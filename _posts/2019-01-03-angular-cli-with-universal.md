---
layout: post
title:  "Angular CLI 6.0.2 with Universal"
author: sal
categories: [ Tech ]
image: https://miro.medium.com/max/1400/1*8klZiTlxZQdUyxbYp-vXMA.png
---

ความสามารถของ search engine รวมไปถึง Social media ในปัจจุบันไม่ได้แสดงเพียงแค่ลิ้งค์ แต่ยังดึงเอารายละเอียด รวมไปถึงรูปภาพแสดงออกมาให้ผู้ใช้งานเห็นก่อนตัดสินใจเข้าไปยังเว็บไซต์

Angular เป็น Single Page Application (SPA) framework ที่ render ในบราวเซอร์ หรือที่เราเรียกว่า client-side rendering ทำให้ search engine และ social media ไปดึงข้อมูล HTML ที่ยังไม่ได้ผ่านการ render ออกมาแสดง

Angular Universal จะทำหน้าที่เป็น server-side renderer เพื่อให้ search engine และ social media ได้ดึงเอา HTML ที่ถูก render ไว้ก่อนแล้วไปใช้งาน เพื่อการแสดงผลที่ถูกต้อง
เริ่มจากการติดตั้ง Angular CLI ลงในเครื่อง

```bash
$ npm install -g @angular/cli@latest
```

สร้างโปรเจคใหม่พร้อมใช้งาน sass ในโปรดเจคด้วย ดูเพิ่มเติม : [https://stackoverflow.com/a/39816365/2045817](https://stackoverflow.com/a/39816365/2045817)

```bash
$ ng new --style=scss demo-universal
$ cd demo-universal
```

จากนั้น install ts-loader angular/platform-server และ @nguniversal/module-map-ngfactory-loader

```shell
$ npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader
```

แก้ไขไฟล์ app.mudule.tsโดยเพิ่ม withServerTransition() เพื่อให้แอพของเราทำงานร่วมกับ Universal

```javascript
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'demo-universal'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

ขั้นตอนต่อไปสร้างไฟล์ module เพื่อเรียกใช้บนฝั่ง server ใน src/app/app.server.module.ts เพื่อจะเรียกใช้ AppModule ผ่านทาง ServerMudule

```javascript
import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
 ```

 ต่อไปสร้างไฟล์สำหรับ Universal bundle เอาไว้ export AppServerModule ใช้ชื่อว่า src/main.server.ts

 ```javascript
 export { AppServerModule } from './app/app.server.module';
 ```

 เสร็จแล้วให้เรากลับไปดูที่ไฟล์ tsconfig.app.json คัดลอกโค๊ดทั้งหมด แล้วสร้างไฟล์ tsconfid.server.json วางโค๊ดที่คัดลอกมาจาก tsconfig.app.json ให้เราเปลี่ยน module format จาก es2015 เป็น commonjs

 ```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "baseUrl": "./",
    "module": "commonjs",
    "types": []
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ]
}
```

เพิ่ม extra property เพื่อบอกให้ compile ไฟล์ app.server.module สำหรับรายละเอียดเพิ่มเติมสามารถอ่านได้ที่ https://github.com/UltimateAngular/aot-loader/wiki/tsconfig.json

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "baseUrl": "./",
    "module": "commonjs",
    "types": []
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ],
  "angularCompilerOptions": {
    "entryModule": "app/app.server.module#AppServerModule"
  }
}
```

กลับไปที่ไฟล์ angular.json ใน property ที่ชื่อว่า architect เราจะเพิ่ม property ใหม่เข้าไป เพื่อกำหนดค่าการ build สำหรับ server

```json
"architect": {
  ...
  "server": {
    "builder": "@angular-devkit/build-angular:server",
    "options": {
      "outputPath": "dist/server",
      "main": "src/main.server.ts",
      "tsConfig": "src/tsconfig.server.json"
    }
  }
}
```
จากนั้นให้เราลอง build project ของเราได้เลยครับ

```bash
$ ng run demo-universal:server
```

<img src="https://miro.medium.com/max/1400/1*hmpBpny-B0C2lTftrXclPQ.png">

### Setting up an Express Server

เราสร้างแอพ ตั้งค่าต่างๆ รวมไปถึง build ทุกอย่างผ่านได้แล้ว ขั้นตอนสุดท้ายเราจะ Run ได้ยังไง? เราจะใช้ Express.js สำหรับ run Universal bundle ของเรา


สร้างไฟล์ server.ts ไว้ใน root ของแอพ

```javascript
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
```

ถึงตรงนี้เราได้ตั้งค่าสำหรับใช้ Node Expreess ไว้แล้ว ขั้นตอนต่อไป เป็นการตั้งค่า Webpack เพื่อบอกให้ Webpack ใช้ไฟล์ server.ts สำหรับ serve แอพของเรา ให้สร้างไฟล์ชื่อ webpack.server.config.js ใน root ของแอพ

```javascript
// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: {
    // This is our Express server for Dynamic universal
    server: './server.ts',
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  // Make sure we include all node_modules etc
  externals: [/node_modules/],
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
}
```

กลับไปที่ไฟล์ package.json ใน property scripts เพิ่มค่าเข้าไป

```json
"scripts": {
  "build:universal": "npm run build:client-and-server-bundles && npm run webpack:server",
  "serve:universal": "node dist/server.js",
  "build:client-and-server-bundles": "ng build --prod && ng run demo-universal:server",
  "webpack:server": "webpack --config webpack.server.config.js --progress --colors"
}
```

จากนั้นใช้คำสั่ง

```bash
$ npm run build:universal && npm run serve:universal
```

### หมายเหตุ:
ขั้นตอนการใช้ Express Server นั้นเป็นการใช้เพื่อประกอบบทความ และใช้เป็นตัวอย่าง ควรจะตั้งค่าการเข้าถึง และความปลอดภัยหากนำไปใช้กับโปรเจคจริงๆ
จากการใช้งานจริงอาจจะมองหา framework เช่น PM2 [http://pm2.keymetrics.io/](http://pm2.keymetrics.io/) เป็นต้น

### ช่วยเหลือ
หากเราใช้ Algular CLI ที่มาพร้อมกับ Webpack 4 อาจจะเกิดปัญหา build ไม่ผ่าน ให้เปลี่ยน tsloader กลับไปเป็นเวอร์ชั่น 4.2.0
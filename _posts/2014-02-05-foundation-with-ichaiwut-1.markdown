---
layout: post
title: "Foundation With iChaiwut Part 1"
slug: "foundation-with-ichaiwut-1"
date:   2014-02-05 12:00:44
categories: Trick
imgurl: http://ichaiwut.me
comments: true
image: http://farm8.staticflickr.com/7445/12324998825_d18c0a5dee_o.jpg
description: "หลังจากที่ผมใช้ Bootstrap มาพักใหญ่ในที่สุดก็ตัดสินใจเปลี่ยนข้างหันมาลองใช้
Foundation ดูบ้าง ใช้ได้สักพักรู้สึกชอบติดใจเลยเอามาใช้กับ iChaiwut.me มันซะเลย"
---

หลังจากที่ผมใช้ [Bootstrap](http://getbootstrap.com) มาพักใหญ่ในที่สุดก็ตัดสินใจเปลี่ยนข้างหันมาลองใช้
[Foundation](http://foundation.zurb.com/) ดูบ้าง ใช้ได้สักพักรู้สึกชอบติดใจเลยเอามาใช้กับ [iChaiwut.me](http://ichaiwut.me) มันซะเลย

โพสนี้ผมจะอธิบายว่าเจ้า Foundation เนี่ยมันมีอะไรที่น่าเล่น หรือใช้งานกันยังไงก่อนอื่นเรามาทำความรู้จักกับมันก่อนนะครับ
Foundation ตอนนี้มาถึงเวอร์ชั่นที่ 5 แล้วนะครับ สำหรับเจ้า CSS Framework ตัวนี้ก็ไม่ต่างอะไรกับ CSS Framwork ทั่วไปนะครับ
การทำงานหรือคุณ สมบัติก็พอๆกันอาจจะมีเหลื่อมล้ำกันบ้างอันนี้ผมจะไม่พูดถึง แต่หากถามผมว่าจะใช้ตัวไหนดีระหว่าง [Bootstrap](http://getbootstrap.com)
กับเจ้าตัว [Foundation](http://foundation.zurb.com) ผมแนะนำให้ลองดูวิดีโอข้างล่างครับ [Bootstrap Or Foundation](http://www.sitepoint.com/video-bootstrap-foundation/)

<center><iframe width="560" height="315" src="//www.youtube.com/embed/Eo7z9Fkzokw" frameborder="0" allowfullscreen></iframe></center>

โพสนี้ผมตั้งใจจะแนะนำ Foundation ให้รู้จักกันก่อนว่ามีอะไรที่โดดเด่นหรือมีอะไรที่น่าเล่นน่าค้นหา

### Responsive Design
ตั้งแต่เวอร์ชั่นที่ 4 เป็นต้นมา Foundation ประกาศตัวเองเป็น Responsive เต็มตัวโดยไม่ต้องใส่ calss หรืออะไรเพิ่มอีกต่อไปนั่นหมายความว่า Foundation เป็น Css Framework ตัวแรกที่เป็น Completely Responsive CSS Framework

### Built on Sass
ถูกใจคอ [SASS](http://sass-lang.com) อย่างผมไม่น้อย สามารถสร้างคลาส และยังมาพร้อมกับ `@mixin` มากมายให้เขียนกันอย่างเมามันส์

### Grid System
เวอร์ชั่น 5 มาพร้อมกับ `small`, `medium` และ `large` grid ซื้งสามารถเลือกใช้งานได้ตามเหมาะสมกับอุปกรณ์ต่างๆ ได้อย่าลงตัว

### Sublime Text
สาวก [Sublime Text](http://www.sublimetext.com/) ก็ยังมี snippet มาให้อีกโอ้วววว อะไรจะสนุกขนาดนั้น ลองตามเข้าไปหาโหลดหรือลองดูที่ [Foundation Sublime Snippet](https://github.com/zurb/foundation-5-sublime-snippets)

โพสหน้าผมจะมาพูดถึง Structre เช่น `Media Queries`, `Grid`, `Utitlity Classses` กันครับ
---
layout: post
title:  "Ionic 2–3 Nav Guards"
slug: "Ionic-2–3-Nav-Guards"
date:   2017-06-16 0:00:01
categories: General
imgurl: http://chaiwut.me
comments: true
image: https://cdn-images-1.medium.com/max/800/1*d_w0M8RoJdXy4l84fsePhg.jpeg
description: "หากใครที่เขียน Angular 2 ~ 4 คงรู้จัก และคุ้นเคยกับ Routing Guards กันอยู่แล้ว พอหันกลับมาเขียน Ionic 2–3 กันบ้างซึ่งเราไม่ได้ใช้ Routes แต่เราใช้ NavController สำหรับการ Push หรือ Pop หน้าต่างๆ ภายใน Ioninc App ทาง Ionic 2–3 ก็มี Feature นี้ให้เหมือนกันนะครับ ชื่อว่า Nav Guards"
---
หากใครที่เขียน Angular 2 ~ 4 คงรู้จัก และคุ้นเคยกับ **Routing Guards** กันอยู่แล้ว พอหันกลับมาเขียน Ionic 2–3 กันบ้างซึ่งเราไม่ได้ใช้ Routes แต่เราใช้ **NavController** สำหรับการ Push หรือ Pop หน้าต่างๆ ภายใน Ioninc App ทาง Ionic 2–3 ก็มี Feature นี้ให้เหมือนกันนะครับ ชื่อว่า Nav Guards

หลักการเดียวกันกับ Routing Guards ครับ Ionic 2–3 มีเมธอด **ionViewCanEnter** และ **ionViewCanLeave** เพื่อให้เราได้ควบการการเปลี่ยนหน้าต่างๆ ในแอพของเรา

>**ionViewCanEnter: boolean/Promise<void>:** Runs before the view can enter. This can be used as a sort of “guard” in authenticated views where you need to check permissions before the view can enter
>
>**ionViewCanLeave: boolean/Promise<void>:** Runs before the view can leave. This can be used as a sort of “guard” in authenticated views where you need to check permissions before the view can leave

**ionViewCanEnter** จะถูกเรียกก่อน เพื่อให้เราได้กระทำการใดๆ ก่อนตัดสินใจว่าจะเข้าสู่เพจนี้หรือไม่
ionViewCanLeave จะถูกเรียกเมื่อจะออกจากเพจนั้นๆ ก่อนที่จะไปยังเพจอื่นๆ

<script src="https://gist.github.com/ichaiwut/2bcf42996e0ba89bd3f482956a9869f1.js"></script>

จากตัวอย่างข้างบนเราจะเห็นว่าก่อนที่เราจะ _push(DetailPage)_ หรือออกจากเพจนี้ไป DetailPage, **ionViewCanLeave()** จะถูกเรียกใช้งาน isValid() เป็น condition ที่เราใช้ตรวจสอบก่อนตัดสินใจออกจากหน้านี้ หากค่าที่ได้ False, .catch() จะทำงาน
เช่นเดียวกับ **ionViewCanEnter** เพียงตรวจสอบว่าก่อนที่จะเข้าเพจนี้ จรงตาม condition ที่เราตั้งไว้หรือเปล่า

<script src="https://gist.github.com/ichaiwut/3e83ba9ac92f50a0d3e0cfece7624b8e.js"></script>

ทั้งหมดคือการทำงานของ Nav Guards โดยคร่าวๆ ครับลองเอาไปใช้กันดู หรือลองอ่านดูใน Doc ของ [ionic 2–3](https://ionicframework.com/docs/api/navigation/NavController/#nav-guards) ก็ได้ครับ
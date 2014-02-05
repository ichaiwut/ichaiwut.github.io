---
layout: post
title: "Jekyll with GitHub Page"
slug: "jekyll-with-github-page"
date:   2014-02-04 12:00:44
categories: Trick
imgurl: http://ichaiwut.me
comments: true
image: http://farm8.staticflickr.com/7336/12315488693_bbe5729572_o.jpg
description: "มีคนถามมาหลายคนเหมือนกันว่าใช้ Wordpress ทำบล็อกนี้เหรอ? ผมตอบตรงนี้เลยแล้วกันครับว่าไมใช่ครับ
บล็อกนี้ผมใช้ Jekyll แล้วเก็บไว้บน Repository ของ GitHub จากนั้นก็ชี้โดเมนเนมไปที่ GitHub Pageของผมครับ"
---

มีคนถามมาหลายคนเหมือนกันว่าใช้ [Wordpress](http://www.wordpress.org) ทำบล็อกนี้เหรอ? ผมตอบตรงนี้เลยแล้วกันครับว่า**ไมใช่ครับ**
บล็อกนี้ผมใช้ [Jekyll](http://jekyllrb.com/) แล้วเก็บไว้บน Repository ของ [GitHub](http://www.github.com/ichaiwut/ichaiwut.github.io)
จากนั้นก็ชี้โดเมนเนมไปที่ [GitHub Page](http://pages.github.com) ของผมครับวิธีทำก็ไม่ได้ยากอะไร ถือโอกาสบอกวิธีทำเลยละกันครับ

สามสี่วันก่อนผมคิดว่าจะทำเว็บบล็อกผมใหม่ก็พยายามหา Server ดีๆแต่ก็ยังหาไม่เจอไม่ลงตัวสักที แรกๆคิดไว้ว่าจะใช้ [Wordpress](http://www.wordpress.org)
แล้วจัดการโมธีมตามสูตรผมที่ชอบทำ แต่ก็เอะใจขึ้นมา แค่บล็อกธรรมดาๆ ทำไมต้องไปใช้ wordpress ด้วยนะ พลันก็จำได้ว่า [@armno](http://armno.in.th) ใช้
[Jekyll](http://jekyllrb.com/) เลยคิดว่าน่าจะลองใช้ตัวนี้เพราะมันไม่ยุ่งยากด้วย และที่สำคัญเราสามารถเก็บไว้ใน Gihub Page ของเราได้ด้วย ในที่สุดจึงตกลงปลงใจ
ด้วยวิธีนี้ เอาล่ะมาดูกันว่าทำอย่างไร

### สร้าง Gitub Page
ขอสมมุติเอาเลยว่าทุกคนมี Github Account เรียบร้อยแล้วนะครับ ขั้นแรกเราต้องสร้าง repository ให้เพจเราก่อนโดยการตั้งชื่อเป็น `username.github.io`
ยกตัวอย่างของผมก็็จะเป็็น `ichaiwut.github.io` ตอนนี้เราก็จะมี repo เป็นของเว็บที่เราจะเอาไว้ทำบล็อกแล้วเรียบร้อย ขั้นตอนนี้สามารถดูวิธีการตั้งค่าได้ที่
[GitHub Page](http://pages.github.com) ครับ

### ดาวโหลด Jekyll
ผมใช้ [Ubuntu](http://www.ubuntu.com) เพราะฉะนั้นขออนุญาตอธิบายเป็น linux commandline นะครับ ก่อนอื่นทำการ Install Jekyll ก่อนนะครับหาก
เครื่องใครยังไม่มี `Ruby` ก็ทำการลงให้เรียบร้อยครับ `$sudo apt-get install ruby1.9.1 ruby1.9.1-dev`

<script src="https://gist.github.com/ichaiwut/8818519.js"></script>

จากนั้นเปิด Browser แล้วพิมพ์ `http://localhost:4000` เพื่อดูเว็บไซต์ครับ

จากนั้นให้สร้าง repository ในนี้เลยครับ `$git init` จากนั้น remote server ไปที่รีโปของเราเองตัวอย่างนะครับ `$git remote add oririn https://github.com/ichaiwut/ichaiwut.github.io.git`
commit แล้วก็ push เว็บไซต์ขึ้นไปได้เลยครับ วิธีเข้าไปดูง่ายๆครับแค่พิม `ichaiwut.github.io` หรือ `username.github.io` ครับ

สำหรับใครที่มีโดเมนเนมอยู่แล้วก็แค่ชี้มาที่ Github เพจของเราก็เป็นอันจบพีธีครับผม

**ข้อมูลเพิ่มเติม**


- [GitHub Pages](http://pages.github.com)
- [Jekyll Doc](http://www.jekyllrb.com)
- [Customs URL](https://help.github.com/articles/setting-up-a-custom-domain-with-pages)

้

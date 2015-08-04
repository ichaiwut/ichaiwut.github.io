---
layout: post
title:  "Chrome Device Inspect"
slug: "Chrome-Device-Inspect"
date:   2015-08-04 23:14:44
categories: General
imgurl: http://ichaiwut.me
comments: true
image: https://c1.staticflickr.com/1/289/19668650633_3d6e7472f4_b.jpg
description: "โพสนี้ขอมาเล่าการใช้งานพวก tools ของ Google Chrome ซึ่งทำให้เราสะดวกสบายในการใช้งาน สำหรับผู้ที่เป็นนักพัฒนา Hybrid App หรือนักพัฒนาเว็บที่ต้องทำงานแบบ Mobile First ทุกอย่างเริ่มจากโทรศัพท์ก่อนนั่นเอง"
---
หลายๆคนคงเคยใช้เจ้าเครื่องมือ  Google Chrome Dev Tools หรือที่เราเรียกกันติดปาก
ทั่วไปว่า Inspect Element นั่นเอง ปรกติแล้วนักทำเว็บทั่วไปก็ใช้กันอยู่บ่อยๆ แทบจะเป็น
อีกเครื่องมือสำคัญที่ขาดไม่ได้ไปเลย สำหรับคนที่ทำ Hybrid App หรือเว็บไซต์ที่เป็น  
Mobile First อยู่แล้วอีกเครื่องมือที่ขาดไม่ได้เช่นกันนั่นก็คือ Inspect Devices ครับ

เจ้า Inspect Devices สามารถตรวจสอบเว็บที่เปิดอยู่กับอุปกรณ์ Android ที่ถูกเปิดด้วย Google Chrome (รวมถึง Hybrid App ด้วย) แค่เสียบสาย data เชื่อมโทรศัพท์กับเครื่องคอมพิวเตอร์เราก็สามารถ Inspect Element เว็บใน Android Device  ได้แล้วครับ

![Dev Tools](https://developer.chrome.com/devtools/docs/remote-debugging/remote-debug-banner.png)

## Requirements
- Google Chrome 32+
- สาย USB Data Link หรือสายที่เราชอบเสียบกับโทรศัพท์และเครื่องคอมเรานั่นแหละครับ
- Android ต้องเวอร์ชั่น 4.0 ขึ้นไปนะครับ

## ตั่งค่าโทรศัพท์
สำหรับโทรศัพท์ที่จะสามารถใช้ Inspect Devices ต้องเปิด USB Debugging ก่อนนะครับ ซึ่งเจ้า  USB Debugging เนี่ยจะอยู่ใน Settings > Developer Options ครับ แน่นอนเราจำเป็นต้องทำโทรศัพท์ของเราให้เป็น Developer ก่อนถึงจะเห็น Option นี้ครับ

สำหรับโทรศัพท์เครื่องไหนที่ยังไม่ได้เปิด Developer Options ให้ไปที่ settings > About Phone แล้วหาคำว่า Build Number กดตรงนั้นประมาณ 7 ครั้งครับ ก็จะมีข้อความขึ้นมาบอกให้เรารู้ว่าตอนนี้เราเป็น Developer แล้ว สามารถดูเพิ่มเติมที่ [https://developer.chrome.com/devtools/docs/remote-debugging#setting-up-device](https://developer.chrome.com/devtools/docs/remote-debugging#setting-up-device) ได้เลยครับ

ใน Developer Options ให้เราเลือก USB Debugging ไว้ด้วยนะครับ และที่สำคัญเครื่องคอมฯเราต้องมี OEM USB Driver นะครับสำหรับ Android เชิญไปโหลดกันที่ [http://developer.android.com/tools/extras/oem-usb.html](http://developer.android.com/tools/extras/oem-usb.html)

## Inspect Device
เมื่อเชื่อมต่อโทรศัพท์กับคอมพิวเตอร์แล้วต่อไปเราก็เข้าสู้หน้า inspect ใน Google Chrome กันครับโดยสามารถเข้าถึงได้ 2 วิธีด้วยกันครับวิธีแรก พิมพ์ `chrome://inspect` ลงใน address bar ครับ วิธีที่สองไปที่ More Tools > Inspect Devices ครับ จากนั้นโทรศัพท์ของเราจะมีหน้าต่างเตือนขึ้นมาครับ ให้เรากด OK ไปครับ

![USB Debugging](https://developer.chrome.com/devtools/docs/remote-debugging/rsa-fingerprint.png)

จากนั้นเราก็จะเข้ามาสู่หน้า List Device ครับ พร้อมกับแสดงให้ดูว่าเราเปิดอะไรอยู่บ้างครับ ซึ่งเราจะสามารถเลือกจากตรงนี้เพื่อ inspect ครับ ของผมเสียบเครื่องเดียวก็จะขึ้นเครื่องเดียวตามภาพนะครับหากมีหลายเครื่องก็จะขึ้นเรียงกันมาครับ

![](http://c1.staticflickr.com/1/557/20102394758_6f2085dab3_z.jpg%22)

จากนั้นให้เราเลือกที่คำว่า inspect ครับก็จะปรากฏหน้าต่าง inspect element  พร้อมกับ Capture หน้าจอเราไปด้วยเลยแหละครับ

![](https://c1.staticflickr.com/1/527/20282119852_2d36dc3836_b.jpg)

![](https://c1.staticflickr.com/1/465/19667882864_1b6e8f5762_z.jpg)

ทีนี้ก็ทำเว็บกับ Hybrid App กันได้อย่างสบายใจแล้วสินะครับ

หากต้องการรายละเอียดและลูกเล่นอื่นๆ รวมไปถึงการตั้งค่าต่างๆ ลองเข้าไปดูที่เว็บของ Google Chrome นะครับ ตามไปเลย [https://developer.chrome.com/devtools/docs/remote-debugging#setting-up-device](https://developer.chrome.com/devtools/docs/remote-debugging#setting-up-device)




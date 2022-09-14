---
layout: post
title: 'Add the event to Google Calendar via Notion'
author: sal
categories: [Tech]
image: https://images.ctfassets.net/lzny33ho1g45/google-calendar-app-of-the-day-p-img/dc01bd04dd0982cdfd6ef0653063cf75/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760
toc: false
---

ใด้ใช้ Notion มาได้ระยะเวลาหนึ่ง รู้สึกชอบและทำอะไรได้หลาย ๆ อย่าง สามารถปรับรูปแบบได้ตามงาน หรือความต้องการของตัวเราเองด้วย แต่มีสิ่งหนึ่งที่ผู้ใช้งานหลายๆ คนต้องการแต่ยังไม่มีใน Notion ก็คือการ update กิจกรรมของเราเองไปที่ Google Calendar ผมเลยไปหาวิธีทำในอินเทอร์เน็ตมา มีหลายวิธีอยู่พอสมควร วันนี้ผมเลยเอาวิธีที่ผมใช้งานอยู่มาแบ่งปัน เผื่อมีใครอยากลองใช้ดูบ้างครับ

---

## ทำยังไง?
จริง ๆ แล้วการส่ง Request จาก Notion เพื่อไป update กิจกรรมใน Google Calendar โดยตรงยังทำได้แต่ผมใช้ตัวช่วยอย่าง Zapier เพื่อเชื่อมทั้งสองเข้าด้วยกัน โดยสามารถทำเป็น `Two-way sync` ยังได้เลยครับ คือการ update ฝั่งไหนก็ได้อีกฝั่งก็จะอัพเดทตามครับ โดยใครที่ยังไม่เคยใช้งานสามารถไปสมัครได้ฟรีเลยครับ ที่ [https://zapier.com/](https://zapier.com/)

## สร้าง Notion Table view databases
ก่อนอื่นเลยผมสร้าง Table view databases ไว้หนึ่งตารางครับเพื่อเก็บกิจกรรมของเราไว้โดยฟิลด์ที่จำเป็นต้องมีเลยคือวันที่และเวลานะครับ ส่วนฟิลด์อื่นสามารถปรับได้ตามใจเลย ส่วนใครที่ไม่ทราบว่า Table view databases คืออะไรก็ลองตามไปดูได้ที่นี่ครับ [https://www.notion.so/help/guides/table-view-databases](https://www.notion.so/help/guides/table-view-databases)

## Connect Google Calendar + Notion

เมื่อเรามี Zapier แล้ว จากนั้นเราก็สามารถเชื่อมกันได้แล้วครับ ทาง Zapier เข้า wizard ให้เราจัดการได้ง่ายมากเลย แล้วยังมีอีกหลาย Flow ให้เราเลือกลองเข้าไปดูที่ [https://zapier.com/apps/google-calendar/integrations/notion](https://zapier.com/apps/google-calendar/integrations/notion) ครับ ส่วนที่ผมใช้อยู่จะเป็นตัวนี้ **[Quick add events to Google Calendar when new items are added to Notion databases](https://zapier.com/shared/53c26d2de14a62570ccf0d1ef0b29e667cd34164)** ตัวนี้ครับ **โดยหากเราใช้เวอร์ชั่น Zapier เวอร์ชั่นฟรี trigger จะทำงานทุก 15 นาทีครับ**

จากนั้นให้เรากดเลือกที่ Try this Zap ครับ ทาง Zapier จะเริ่ม wizard เพื่อให้เราเชื่อมต่อกับ Notion และ Google ขั้นตอนแรกจะเป็นการเช่ือมต่อกับ Notion ก่อนครับ ให้เราเลือกว่าจะเชื่อมจากแอฟไหน ให้เราเลือก Notion ส่วน Event จะเลือกเป็น New Databest Item ครับ เสร็จแล้วกด Continue ได้เลยครับ

<center>
<img src="https://miro.medium.com/max/700/1*Bqo3lVlcQOVrfNszMMvDdQ.png">
</center>

เมื่อเราเข้าระบบ Notion เพือขอ Permission ได้แล้วก็กด Next เพื่อไปยังขั้นตอนต่อไปครับ ทาง Zapier จะทำการดึง database ที่อยู่ใน Account Notion ของเราออกมา ให้เราเลือกว่าเราจะใช้ databases ใน Notion อันไหน ในขั้นตอน Set up trigger ผมเลือก database ที่ชื่อ Appointment ของผม จากนั้นกด continue เพื่อให้ Zapier ได้ลองทดสอบว่าสามารถ trigger ได้ไหม

<center>
<img src="https://miro.medium.com/max/700/1*pZQmVnltDoPk0K-xXEkLQQ.png">
</center>

หากไม่มีอะไรผิดพลาดทาง Zapier ก็จะดึงข้อมูลจากใน Notion มาให้เราดูครับ เราก็สามารถกด Continue ได้เลย

<center>
<img src="https://miro.medium.com/max/700/1*CX896jGlE0nJqujQf4iceQ.png">
</center>

ขั้นตอนต่อไปเป็นการตั้งค่า Google Calendar ครับ ใน Choose app & Event เราจะเลือก Google Calendar และช่อง Event เราจะเลือกใช้งาน Create Detailed Event พอเลือกเสร็จแล้ว กด Continue เพื่อไปเข้าระบบของ Google และเลือกปฏิทินที่ต้องการเชื่อมต่อกับ Notion กันได้เลยครับ

<center>
<img src="https://miro.medium.com/max/700/1*j3ZK8Nz168obCWPhOPthNA.png">
</center>

## **Set up action**

ขั้นตอนนี้สำคัญครับ เราต้องทำการ map ระหว่าง Notion database item ซึ่ง Zapier จะแสดงตัวอย่างในแต่ละ Column ให้เรา (Zapier เอามาตอนที่เราเชือมกับ Notion)

<center>
<img src="https://miro.medium.com/max/700/1*KNSluUxEv86cKqf7WQaKvg.png">
</center>


<center>
<img src="https://miro.medium.com/max/700/1*eMzQ_3vH92zbONP9IdQCQw.png">
</center>

จากภาพด้านบนจะเห็นว่า ผมเลือก calendar เป็น Birthday ใน summay ผมจะ map เจ้าคอลัมที่ชื่อว่า Title ใน Notion ที่เลือกเราก็เลือก Map ได้เต็มที่เลยครับ จะมีส่วนที่ควรระวังคือ Start Data & Time กับ End Date & Time จะต้องมีวันที่และเวลาด้วยครับ

<center>
<img src="https://miro.medium.com/max/700/1*omV1veDUNbY6SaBvPNRREQ.png">
</center>

เมื่อเรา Map ทุกอย่างได้ถูกต้องเราสามารถกด Test Action ได้เลยครับ ทาง Zapier จะส่ง Notion data  ไปสร้าง event ใน Google calendar  ให้ครับ

<center>
<img src="https://miro.medium.com/max/700/1*d6UBixbA0QvJHH7vxKD_HA.png">
</center>
<center>
<img src="https://miro.medium.com/max/700/1*oGZe9TL3XtnD1BM504gmxg.png">
</center>

จากนั้นกด Publish Zap เป็นอันเสร็จสิ้นครับ จากนี้หากมี item เพิ่มเข้ามาที่ตาราง Appointment ของผม ทาง Zapier ก็จะจัดการเอาไปสร้าง event ใน Google Calendar ตามที่เราตั้งค่าไว้ครับ
---
layout: post
title:  "First 3D Printing Trials"
---

![Morse code translator](/assets/images/blog/2015/01/12/first-3d-printing-trials/morse-code-translator.jpg)
{: .post-photo-right-square }

Over the last few months I've had access to a couple MakerBot 3D printers, and was able to use them in a few projects. This is a brief summary of the first project I created to get my feet wet with 3D printing, a Morse Code translator.

![Open morse code translator](/assets/images/blog/2015/01/12/first-3d-printing-trials/morse-code-translator-open.jpg)
{: .post-photo-left-square }

Getting started with the MakerBot printers was extremely easy, literally just plugging it in and clicking start to begin printing a demo object. After printing a few of these (thankfully I wasn't paying for the filament), I started designing an enclosure for my project. I had previously put together the hardware: an Arduino UNO, a mic, and a 16x2 character display.

![Arduino with breadboard](/assets/images/blog/2015/01/12/first-3d-printing-trials/arduino-breadboard.jpg)
{: .post-photo-right-square }

I used Autodesk 123D to create the 3D .stl files that the MakerBot printer would then compile into movements for the printer head. Autodesk 123D was downright frustrating to use at times, but since I was unwilling to dish out actual money to purchase AutoCAD, I made do with the free software. The limitations that I found using 123D was the lack of an easy-to-use coordinate system, which made it difficult to make exact measurements. The only way I could manage measurements was to snap objects together to get a reference point, then move one of the objects on either the X, Y, or Z axes. This became a problem when I wanted an irregular snap-point, the software would simply snap to another point, and I would be forced to guess the millimeter measurements from there.

![3D printed shell](/assets/images/blog/2015/01/12/first-3d-printing-trials/3d-printed-shell.jpg)
{: .post-photo-left-square }

Once the 3D models were created, it was time to print. I printed one piece at a time in case of any errors that might occur during the process. The pieces were printed with a MakerBot Replicator 2, and took approximately 10 hours to complete. The enclosure was a simple box to hold the Arduino and components, along with a cone shape where the mic is located.

![Screen displaying "Hello World"](/assets/images/blog/2015/01/12/first-3d-printing-trials/hello-world-screen.jpg)
{: .post-photo-right-square }

The main issue I encountered when printing was taking the object off the build platform after it was printed. I had to use excessive force to remove the object off the platform, at times damaging the object itself. Another issue that I came across was removing the raft from the printed object. MakerBot printers print a raft on top of the build platform and then print the object on top of the raft. The raft is meant to correct any imperfections in the build platform. However, I found the raft extremely difficult to separate from the object, leaving small pieces of the raft on the object that can only be removed carefully with a knife.

Overall, I was excited to get my hands on a 3D printer and was not disappointed. There are obviously a few problems that need to be resolved, but these will no doubt be fixed in time.

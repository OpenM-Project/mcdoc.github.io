---
title: How the Minecraft for Windows is Cracked/Patched
---

# How the Minecraft for Windows is Cracked/Patched

::: tip Tip
For more information, check https://youtu.be/h2W6vzLN8Fg [made by MCenters]
:::

::: warning Note
This is only for Minecraft for Windows, the Bedrock Edition
:::

Minecraft for Windows is something that couldnt be achieved for free. 
But thats until when we found out that Minecraft for Windows uses the `isTrial()` function in `Windows.ApplicationModel.Store` module to make the Trial.
The `isTrial()` function checks the specific app's licensing system to whether or not to give the App a trial feature. 
Only specific apps allow this feature to be used like Minecraft and other apps (in meaning, you can bypass the trial in other UWP apps that use this Trial feature).

To crack Minecraft for Windows, you will need to change the `isTrial()` function inside `Windows.ApplicationModel.Store.dll` available in System32 and SysWOW64.
Specifically, you will need to change the value of a binary variable, `cl`, inside the `get_isTrial` string. 
If the value of `cl` is `1`, then the `isTrial()` function will work normally causing the Trial in Minecraft. 
If the value of `cl` is `0`, then the `isTrial()` function will not work and lets you get through Minecraft for free.
Knowing this, we will need to change `Windows.ApplicationModel.Store.dll` somehow, either editing manually like in the [video](https://youtu.be/h2W6vzLN8Fg) or this process can be automated and done in different ways.
Automated methods are done by using Third-Party Softwares such as MCenters and others, we will look into them below.

There are different ways to crack Minecraft with the said method and they are said [**in the Glossary here**](/windows/minecraft-for-windows#minecraft-for-windows).
Lets now define all these methods and what they mean.
A **cracked/patched** dll refers to a dll that it's `cl` value has already been changed to `0`.
Only specific dlls work on specific systems, according to their software they have.

As in the glossary, you can see that:
- **DLL Replacing** method replaces your own DLLs with cracked dlls from online sources. This is completely permenant and might not be the correct solution if you want to go with "safer"
- **DRC** method makes your game to load a cracked dll available in another directory in your system using the DLL search order. [Temporary, Works only with Minecraft]
- **DLL Auto Patch** method creates a patched dll from your own dll and replaces the original with patched one. This is much effecient than DLL Replacing with Online Sources.
- **DLL Hooking** method uses [**function hooking**](https://kylehalladay.com/blog/2020/11/13/Hooking-By-Example.html) and other debugging stuff to modify the license checking functions within the game and/or other DLLs loaded within the game in memory. [Temporary, Works only with Minecraft]
- **DMM** method patches the dll module within the game memory. [Temporary, Works only with Minecraft] 

As you have read, DRC, DMM and DLL Hooking runs and change in-memory/RAM. 
This means, the changes are done in the game's process leading it to be temporary (requiring for every-use activation) and only work for Minecraft. 
But these methods are different from I-MCM and pre-cracked [**appx**](https://fileinfo.com/extension/appx).
The way these 2 works is patching the license checking code with in the game. (in meaning, it removes the function of the game to check if `isTrial()` is true/false. [Logically, only works with Minecraft])
**I-MCM** patches the license checking code within the game's memory, making it temporary. 
In the other hand, you can literally patch the game's code completely and pack it in a UWP `.appx` and you can install it and then you dont need to do anything else. 

[ClipSVC](/story#the-beginning-m-centers--online-fixme) is another method, but you can look it up on google if you want :) 

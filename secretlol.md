---
title: How the Minecraft for Windows is Cracked/Patched
---
::: danger
WIP by XtronXI
:::

# How the Minecraft for Windows is Cracked/Patched

::: warning Note
This is only for the Bedrock Edition of Minecraft
:::

For Minecraft for Windows to know if we have paid for it or not, it uses the **Store DLLs** to check for a license. This Store DLLs can be cracked/patched by users, whether manually or using [Third Party Softwares](/windows/minecraft-for-windows#unlockers-for-minecraft-for-windows). After the process is done by such softwares/programs, Minecraft will not be able to check, leading to the Full version of Minecraft. 

## Methods

There are different ways to crack Minecraft and they are said [**in the Glossary here**](/windows/minecraft-for-windows#minecraft-for-windows). These methods are specifically done by softwares/programs. Lets now define all these methods and what they mean.

As in the glossary, you can see that:
- **DLL Replacing** method replaces your own DLLs with cracked DLLs. This is completely permanent and might not be the correct solution if you want to go with "safer"
- **DRC** method makes your game use cracked dll available in another directory in your computer using the [DLL search order](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order). [Temporary, Works only with Minecraft]
- **DLL Auto Patch** method creates patched DLLs from your own dlls and replaces the original ones with patched ones. This is much effecient than DLL Replacing with Online Sources since sometimes online source might not have the specific one needed. We'll look into this later.
- **DLL Hooking** method uses [**function hooking**](https://kylehalladay.com/blog/2020/11/13/Hooking-By-Example.html) and other debugging stuff to modify the license checking functions within the game and/or other DLLs loaded within the game in memory. [Temporary, Works only with Minecraft]
- **DMM** method patches the DLLs within the game memory. [Temporary, Works only with Minecraft] 

As you have read, DRC, DMM and DLL Hooking runs and change in-memory/RAM. This means, the changes are done in the game's process leading it to be temporary (requiring for activating every time) and only work for Minecraft. But these methods are different from I-MCM and pre-cracked [**appx**](https://fileinfo.com/extension/appx).The way these 2 works is patching the license checking code with in the game. (in meaning, it removes the code where Minecraft checks for license). **I-MCM** patches the license checking code within the game's memory, making it temporary. In the other hand, you can literally patch the game's code completely and pack it in a `.appx` and you can install it and then you dont need to do anything else. 

## Store DLL and Cracking/Patching

Minecraft for Windows uses the `isTrial()` function in `Windows.ApplicationModel.Store` module to make the Trial.The `isTrial()` function checks the specific app's licensing system to whether or not to give the App a trial feature. Only specific apps allow this feature to be used like Minecraft and other apps (in meaning, you can bypass the trial in other UWP apps that use this Trial feature).

To crack Minecraft for Windows, you will need to change the `isTrial()` function inside `Windows.ApplicationModel.Store.dll` available in System32 and SysWOW64 in assembly level.
Specifically, you will need to change the value of a binary variable, `cl`, inside the `get_isTrial` string. 
If the value of `cl` is `1`, then the `isTrial()` function will work normally causing the Trial in Minecraft. 
If the value of `cl` is `0`, then the `isTrial()` function will not work and lets you get through Minecraft for free.
Knowing this, we will need to change `Windows.ApplicationModel.Store.dll` somehow, either editing manually like in the [video](https://youtu.be/h2W6vzLN8Fg) or this process can be automated and done in different ways.


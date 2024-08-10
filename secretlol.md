---
title: How Minecraft for Windows is Cracked/Patched
---
::: danger
WIP by XtronXI
:::

# How Minecraft for Windows is Cracked/Patched

::: warning Note
This is only for the Bedrock Edition of Minecraft
:::

Minecraft for Windows uses `C:\Windows\System32\Windows.ApplicationModel.Store.dll` for its licensing system. It makes use of this DLL to perform in app purchase and licensing related tasks like identifying if user bought game or has acquired trial. We crack `C:\Windows\System32\Windows.ApplicationModel.Store.dll` to modify return value of trial function and Minecraft starts working in full game mode. The crack can be done manually or by [Third Party Software, such as M Centers or online-fix.me's unlocker.](/windows/minecraft-for-windows#unlockers-for-minecraft-for-windows)

## Methods

There are different ways to crack Minecraft and they are said [**in the Glossary here**](/windows/minecraft-for-windows#minecraft-for-windows). These methods are specifically done by softwares/programs. Lets now define all these methods and what they mean.

As in the glossary, you can see that:
- **DLL Replacing** method replaces your own DLLs with cracked DLLs. This is completely permanent and might not be the correct solution if you want to go with "safer"
- **DRC** method makes your game use cracked dll available in another directory in your computer using the [DLL search order](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order). [Temporary, Works only with Minecraft]
- **DLL Auto Patch** method creates patched DLLs from your own dlls and replaces the original ones with patched ones. This is much effecient than DLL Replacing with Online Sources since sometimes online source might not have the specific one needed. We'll look into this later.
- **DLL Hooking** method uses [**function hooking**](https://kylehalladay.com/blog/2020/11/13/Hooking-By-Example.html) and other debugging stuff to modify the license checking functions within the game and/or other DLLs loaded within the game in memory. [Temporary, Works only with Minecraft]
- **DMM** method patches the DLLs within the game memory. [Temporary, Works only with Minecraft] 

As you have read, DRC, DMM and DLL Hooking runs and change in-memory/RAM. This means, the changes are done in the game's process leading it to be temporary (requiring for activating every time) and only work for Minecraft. But these methods are different from I-MCM and pre-cracked [**appx**](https://fileinfo.com/extension/appx).The way these 2 works is patching the license checking code with in the game. (in meaning, it removes the code where Minecraft checks for license). **I-MCM** patches the license checking code within the game's memory, making it temporary. The main differnce between I-MCM and DMM is that I-MCM can run while Minecraft is open but cant with DMM.

Also, you can patch the game's code completely and pack it in a `.appx` and you can install it and then you dont need to do anything else. 

There are also other methods like ClipSVC, SetACL and BlueSky Method. We will also define these later.

## DLL and Cracking/Patching

::: tip Tip
For more information about DLLs and Namespaces, see [https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/dynamic-link-library](https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/dynamic-link-library) and [https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)
:::

::: details Newer Versions
Newer Versions of Minecraft uses the boolean property [Windows.Services.Store.StoreAppLicense.IsTrial](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storeapplicense.istrial) from `Windows.ApplicationModel.Store.dll` to check if the license is a trial license by checking the license information (if installing `.appx` of any app that has a trial license, it will show a Limited Access version of the app). The license information of the newer versions of Minecraft is checked after  [`Windows.Services.Store.StoreContext.GetAppLicenseAsync`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storecontext.getapplicenseasync) returns a collection variables of the license.
:::

::: details Initial Versions
 Versions of Minecraft uses the boolean property [Windows.ApplicationModel.Store.LicenseInformation.isTrial](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.licenseinformation.istrial) from `Windows.ApplicationModel.Store.dll` to check if the license is a trial license by checking the license information (if installing `.appx` of any app that has a trial license, it will show a Limited Access version of the app). The license information of the older versions of Minecraft is checked after [`Windows.ApplicationModel.Store.CurrentApp.LicenseInformation`](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.currentapp.licenseinformation) returns a collection variables of the license.
:::

- To crack Minecraft for Windows, you will need to change the value of a binary variable, `cl`, inside the `isTrial` property. 
- If the value of `cl` is 1, then the `isTrial` property will check normally causing the Trial in Minecraft. 
- If the value of `cl` is 0, then the `isTrial` property will not check and lets you get throughs Minecraft for free.
- Watch the video below to understand in detail:

<iframe width="420" height="315" src="https://youtube.com/embed/h2W6vzLN8Fg"></iframe> 

## Other Methods

**to be continued....**

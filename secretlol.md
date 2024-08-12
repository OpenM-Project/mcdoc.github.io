---
title: How Minecraft for Windows is Cracked/Patched
---

# How Minecraft for Windows is Cracked/Patched

::: warning Note
This is only for the Bedrock Edition of Minecraft
:::

Minecraft for Windows uses `C:\Windows\System32\Windows.ApplicationModel.Store.dll` for its licensing system. It makes use of this DLL to perform in-app purchases and licensing related tasks like identifying if user bought game or has acquired trial.\
We crack `C:\Windows\System32\Windows.ApplicationModel.Store.dll` to modify return value of trial function and Minecraft starts working in full game mode. The crack can be done manually or by specific [Third Party Software](/windows/minecraft-for-windows#unlockers-for-minecraft-for-windows).

## Methods

There are different ways to crack Minecraft and they are said [**in the Glossary here**](/windows/minecraft-for-windows#minecraft-for-windows). These methods are specifically done by softwares/programs. Lets now define all these methods and what they mean.

As in the glossary, you can see that:
- **DLL Replacing** method replaces your own DLLs with cracked DLLs. This is completely permanent and might not be the correct solution if you want to go with "safer"
- **DRC** method makes your game use cracked dll available in another directory in your computer using the [DLL search order](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order). [Temporary, Works only with Minecraft]
- **DLL Auto Patch** method creates patched DLLs from your own dlls and replaces the original ones with patched ones. This is much effecient than DLL Replacing with Online Sources since sometimes online source might not have the specific one needed. We'll look into this later.
- **DLL Hooking** method uses [**function hooking**](https://kylehalladay.com/blog/2020/11/13/Hooking-By-Example.html) and other debugging stuff to modify the license checking functions within the game and/or other DLLs loaded within the game in memory. [Temporary, Works only with Minecraft]
- **DMM** method patches the DLLs within the game memory. [Temporary, Works only with Minecraft] 

As you have read, DRC, DMM and DLL Hooking runs and change in-memory/RAM. This means, the changes are done in the game's process leading it to be temporary (requiring for activating every time) and only work for Minecraft. But these methods are different from I-MCM and pre-cracked [**appx**](https://fileinfo.com/extension/appx).The way these 2 works is patching the license checking code with in the game. (in meaning, it removes the code where Minecraft checks for license). **I-MCM** patches the license checking code within the game's memory, making it temporary. The main differnce between I-MCM and DMM is that I-MCM can run while Minecraft is open but cant with DMM.\
Also, you can patch the game's code completely and pack it in a `.appx` and you can install it and then you dont need to do anything else. 

There is an other method using ClipSVC, we will define that later.

## The Licensing System

::: tip Tip
For more information about DLLs and Namespaces, see [https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/dynamic-link-library](https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/dynamic-link-library) and [https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)
:::

To understand deeply about the DLL that gets replaced with the original dll, you will have to know about the licensing process. The licensing process is different depending on the Minecraft version you have:

### Newer Versions
Newer Versions of Minecraft uses the boolean property [Windows.Services.Store.StoreAppLicense.isTrial](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storeapplicense.istrial) from `Windows.ApplicationModel.Store.dll` to check if the license is a trial license by checking the license information (if installing `.appx` of any app that has a trial license, it will give you a limited version of the app). The license information of the newer versions of Minecraft is checked after [`Windows.Services.Store.StoreContext.GetAppLicenseAsync`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storecontext.getapplicenseasync) returns a collection variables of the license.

### Initial Versions
Initial Versions of Minecraft uses the boolean property [Windows.ApplicationModel.Store.LicenseInformation.isTrial](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.licenseinformation.istrial) from `Windows.ApplicationModel.Store.dll` to check if the license is a trial license by checking the license information (if installing `.appx` of any app that has a trial license, it will show a Limited Access version of the app). The license information of the initial versions of Minecraft is checked after [`Windows.ApplicationModel.Store.CurrentApp.LicenseInformation`](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.currentapp.licenseinformation) returns a collection variables of the license.

## Cracking/Patching

::: warning Warning!
You might need to know about [Assembly](https://www.tutorialspoint.com/assembly_programming/) before reading this, or your brain might explode.
:::

To crack Minecraft for Windows, you will need to change the dll using the [Interactive Dissassebler](https://en.wikipedia.org/wiki/Interactive_Disassembler).
You will have to make so that when Minecraft asks for the license, the `isTrial` property becomes false no matter what.
The value of isTrial is stored in a [register](https://www.tutorialspoint.com/assembly_programming/assembly_registers.htm) called `cl`. To do this change, you will have to make so that when `isTrial` runs, `cl` is set to `0` (false).

::: info Note:
If the value of `cl` is 1, then the specific app will be limited in access.\
If the value of `cl` is 0, then the you will get full access in the specific app.
:::

Watch the video below to do it:

<iframe width="420" height="315" src="https://youtube.com/embed/h2W6vzLN8Fg"></iframe> 

## Extra Methods

### ClipSVC

**Tinedpakgamer** (founder of M Centers) created the first method to crack Minecraft using ClipSVC. But it turned out to be dangerous for your computer. It was used in MCenters 1.0 (aka Red MCenters), BlueSky Launcher etc. But what is ClipSVC? 

**`ClipSVC`**, or the Client License Service is a Windows service related to Microsoft Store. It takes care of managing and protecting digital content from the Microsoft Store, like apps and games, to make sure they follow licensing rules and digital rights management (DRM). ClipSVC is used in the process of checking the license, so disabling it will basically break every single licensing systems and no process related to it can be run. In meaning, you could force stop ClipSVC and get apps for free. But since it breaks Minecraft completely too, you will need to other steps.\
**Runtime Broker** makes sure Minecraft follows its licensing rules and security settings. Sine this is there, you will have to End Task it at the correct time, which is when Minecraft buffers loading at 46%. And as I have said, this breaks Minecraft and MS Store, and it even could lead to system errors and crashes

**And that's all! You have learnt how it works, and later on, I might plan to add new things to this page!**

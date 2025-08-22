---
title: How Minecraft for Windows is Cracked/Patched
---

# How Minecraft for Windows is Cracked/Patched

::: warning Note
This page is focused on the Bedrock Edition of Minecraft. However, it can be used for other apps that use the same licensing system as Minecraft for Windows.
:::

If you're here, you've probably unlocked Minecraft using any 3rd-Party Software (listed [here](/bedrock/windows#minecraft-for-windows)). If your wondering how they work, this page is just for you! But before that, lets explore the various methods these 3rd-Party Softwars use.

## Methods

::: details What is a DLL?
A DLL (Dynamic Link Library) is like a toolkit shared by multiple workers (programs). Instead of each worker carrying their own tools, they all borrow what they need from a common toolbox (the DLL). Inside, it’s organized like a blueprint, with rooms (functions) and shelves (data) that the workers can quickly access. It’s a way to avoid clutter and share resources, so they can all work more efficiently without duplicating what’s already there. The [DLL mentioned here](#how-minecraft-works) is explained later.
:::

As in the glossary, you can see that:
- **DLL Replacing** method replaces the DLLs in your PC with cracked DLLs.
- **DRC** method makes your game use cracked DLLs available in another directory in your computer using the [DLL search order](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order). [Temporary, Works only with Minecraft]
- **DLL Auto Patch** method creates patched DLLs from the DLLs in your PC and replaces them with the patched ones. This is much more efficient than DLL Replacing with Online Sources since sometimes online source might not have the specific one needed. We'll look into this later.
- **DLL Hooking** method uses [**function hooking**](https://kylehalladay.com/blog/2020/11/13/Hooking-By-Example.html), and other debugging, in-memory to modify the license checking functions within the game and/or other DLLs loaded within the game in memory. [Temporary, Works only with Minecraft]
- **DMM** method patches the DLLs within the game memory. [Temporary, Works only with Minecraft] 

As you have read, DRC, DMM, and DLL Hooking runs and changes in-memory/RAM. This means, the changes are done in the game's process leading it to be temporary (requiring for activating license checking work for Minecraft). But these methods are different from **In-Memory Code Manipulation** and pre-cracked [**appx**](https://fileinfo.com/extension/appx).

The way these two work is by patching the license-checking code within the game. (in meaning, it removes the code where Minecraft checks for license). **I-MCM** patches the license checking code within the game's memory, making it temporary. The main difference between I-MCM and DMM is that I-MCM can run while Minecraft is open but can't with DMM.

Also, you can patch the game's code completely and pack it in a `.appx` library and you can install it so that you don't need to do anything else. 

There is another method using [ClipSVC](#clipsvc), we will also talk about it later.

## How Minecraft works

Minecraft for Windows uses `Windows.ApplicationModel.Store.dll` located in `C:\Windows\system32` (x64/64-bit) and `C:\Windows\SysWOW64` (x86\32-bit) for its licensing system. It makes use of these DLLs to perform in-app purchases and licensing-related tasks like identifying if the user bought the game or has acquired trial.

You can crack `Windows.ApplicationModel.Store.dll` to modify the returned value of the trial function and Minecraft starts working in its full version (This means, when Minecraft checks if the user has bought the game, it gives a specific value. Then, if the "bought the game" value is `false`, then IsTrial becomes `true`. But, rather than making it `true`, when we crack this dll, it makes it `false` so even if Minecraft App knows you havent paid, it will give the Full Version.). The crack can be done manually or by specific [Third Party Software](/bedrock/windows#unlockers-for-minecraft-for-windows).

## How Minecraft for Windows is Cracked/Patched

To understand deeply about the DLL that gets replaced with the original DLL, you will have to know about the licensing process. The licensing process is different depending on the Minecraft version you have.

| Newer Versions | Initial Versions |
| -------------- | ---------------- |
| Newer Versions of Minecraft use the boolean property [Windows.Services.Store.StoreAppLicense.isTrial](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storeapplicense.istrial) from `Windows.ApplicationModel.Store.dll` to check if the user is licensed to use all features of Minecraft or just trial only features. The returned value of this function depends on whether you bought Minecraft or not. Its value is affected if you have multiple accounts on a PC or you have attached 10 PCs per account. In case of any issue with licensing limits, it returns true, this means Minecraft will run in trial mode. | Initial Versions of Minecraft use the boolean property [Windows.ApplicationModel.Store.LicenseInformation.isTrial](https://learn.microsoftDLLm/en-us/uwp/api/windows.applicationmodel.store.licenseinformation.istrial) from `Windows.ApplicationModel.Store.dll` to check if the user is licensed to use all features of Minecraft or just trial only features. Like `Windows.Services.Store.StoreAppLicense.isTrial`, its value is also affected by factors like accounts and PCs and if the user exceeds any limit then Minecraft runs in trial mode. |

::: tip TIP
For more information about how Minecraft works, visit https://learn.microsoft.com/en-us/uwp/api/windows.services.store and https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store
:::

## Cracking/Patching

::: tip REQUIREMENTS
- Knowing the basics of  [Assembly](https://www.tutorialspoint.com/assembly_programming/) is recommended before reading the rest of this page.
- Disassembler - [Interactive Dissassebler](https://en.wikipedia.org/wiki/Interactive_Disassembler).
:::

We crack Minecraft by modifying the returned value of the IsTrial boolean property. This is done by editing the related function at assembly level to make it replace the isTrial value with false(`0`) whenever Minecraft tries to access the property.

<xgplayer url="https://dl.mcdoc.site/learn/dll-assembly.mp4"/>

The above video shows how to create the DLLs for cracking Minecraft. You can use applications like IOBit Unlocker to replace the original DLLs to the cracked DLLs.
## Extra Methods

### ClipSVC

ClipSVC was used in BlueSky Launcher, and more. But what is ClipSVC? 

**`ClipSVC`**, or the Client License Service is a Windows service related to the Microsoft Store. It takes care of managing and protecting digital content from the Microsoft Store, like apps and games, to make sure they follow licensing rules and digital rights management (DRM). ClipSVC is used in the process of checking the license, so disabling it will break every single licensing system and no process related to it can be run. In meaning, you could force stop ClipSVC and get apps for free. But since it breaks Minecraft completely too, you will need to do other steps.

**Runtime Broker** makes sure Minecraft follows its licensing rules and security settings. Since it's present, you will have to End Task it at an exact time, that is, when Minecraft buffers loading at 46%. And as I have said, this breaks Minecraft and MS Store, and it even could lead to system errors and crashes.

### Pre-Cracked APPX, I-MCM and DMM

Now the doubt is about other types of cracking, how do they work? 

- **DMM** works the same way but rather than editing the DLL in Local Storage (Permenant), it edits in Memory (Temporary). As said, this can be done by 3rd-Party Softwares.
- **I-MCM** works by rather than editing the DLL, it edits the `Minecraft.Windows.exe` file, in Memory, so that whenever it gets a value for IsTrial, it will always be accessed as `0` (false).
- **Pre-Cracked APPX** is same as I-MCM, but this APPX is permenantly cracked and updates are impossible. (Btw, this might be wrong, but this is the way that I think is correct)

---

**And that's all! You have learned how it works, and later on, I might plan to add new things to this page!**

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

For Minecraft for Windows to know if we have paid for it or not, it uses the **Store DLL** to check for a license. This Store DLL can be cracked/patched by users, whether manually or using [Third Party Softwares](/windows/minecraft-for-windows#unlockers-for-minecraft-for-windows). After the process is done by such softwares/programs, Minecraft will not be able to check for the license, leading to the Full version of Minecraft. 

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

## Store DLL and Cracking/Patching

::: tip Tip
For more information about DLLs and Namespaces, see https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/dynamic-link-library and https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces
:::

Store DLLs are dlls that the Microsoft Store uses. The dll is located in the root directory (`system32` & `SysWOW64`) of your computer and is in the name `Windows.ApplicationModel.Store.dll`. But there is difference between the method of initial versions and older versions.

::: details Initial Versions
Initial Versions of Minecraft uses the boolean [`isTrial`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storeapplicense.istrial?view=winrt-26100) property under the class [`StoreAppLicense`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storeapplicense?view=winrt-26100) of [`Windows.Services.Store`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store?view=winrt-26100) namespace of the Store DLL to check if the license is a trial license in the license information[If installing .appx of any app that has a trial license, it will show a Limited Access version of the app]. The license information of the initial versionsof minecraft is checked by [`GetAppLicenseAsync`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storecontext.getapplicenseasync?view=winrt-26100) method under the class [`StoreContext`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store?view=winrt-26100) of the same namespace.   
:::

::: details Older Versions
Older Versions of Minecraft uses the boolean [`isTrial`](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.licenseinformation.istrial?view=winrt-26100) property under the class [`LicenseInformation`](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.licenseinformation?view=winrt-26100) of [`Windows.ApplicationModel.Store`](https://learn.microsoft.com/en-us/uwp/api/windows.services.store?view=winrt-26100) namespace of the Store DLL to check if the license is a trial license in the license information[If installing .appx of any app that has a trial license, it will show a Limited Access version of the app]. The license information of  is checked by [`LicenseInformation`](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.currentapp.licenseinformation?view=winrt-26100) property under the class [`CurrentApp`](https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.currentapp?view=winrt-26100) of the same namespace.
:::

- To crack Minecraft for Windows, you will need to change the `isTrial` property of either of those versions. Specifically, you will need to change the value of a binary variable, `cl`, inside the `get_isTrial` string. 
- If the value of `cl` is 1, then the `isTrial` property will check normally causing the Trial in Minecraft. 
- If the value of `cl` is 0, then the `isTrial` property will not check and lets you get throughs Minecraft for free.
- Knowing this, we will need to change `Windows.ApplicationModel.Store.dll` somehow, either editing manually like in the video below or this process can be automated and done in different ways, which were said above.

 <iframe width="420" height="315"
src="https://youtube.com/embed/h2W6vzLN8Fg">
</iframe> 

## Other Methods

**to be continued....**

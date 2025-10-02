---
title: Minecraft for Windows
lastTested: "2025-10-02"
riskLevel: "Medium"
---

# Minecraft for Windows

<VersionBadge />

<LegalCallout />

::: tip TIP
<p>If the above button doesn't result in Microsoft Store opening with the Minecraft trial page, instead download Minecraft Launcher from the Microsoft Store and install Bedrock from there, or from the Xbox app, search for <strong>Minecraft for Windows</strong> and download it from there.</p>

<p>Also, If you want preview or older versions of Minecraft for Windows, then download <a href="https://github.com/MCMrARM/mc-w10-version-launcher">MCLauncher</a> or <a href="https://bedrocklauncher.github.io/">Bedrock Launcher</a>.</p>
:::

::: details Glossary

<u>*Patching in memory:*</u> When Minecraft is running, the RAM Manipulator [if using one] edits code (instructions) within the game process and other modules (i.e. dlls). Thus, it is temporary method and needs to be done every time the game is started.

<u>*Difference between **I-MCM** and **DMM**:*</u> In the **I-MCM** method, the game exe (`Minecraft.Windows.exe`) is patched in memory, whereas in the **DMM** method, the store DLLs containing the license checking code are patched within memory.

***Methods:***
 * **I-MCM** - In-Memory Code Manipulation: Patches the license checking code within the game exe (`Minecraft.Windows.exe`) directly in memory.
  * **DMM** - DLL Memory Manipulation: Patches the license checking code within the `Windows.ApplicationModel.Store.dll` module loaded within the game in memory.
 * ClipSVC Method: \[Patched] [Check at Learn -->](/learn#clipsvc)
 * DLL Hooking: Uses [function hooking](https://kylehalladay.com/blog/2020/11/13/Hooking-By-Example.html) to modify the license checking functions within the game and/or other DLLs loaded within the game in memory.
 * DLL Replacing: Replaces the `Windows.ApplicationModel.Store.dll` DLL's with patched (i.e cracked) ones.
 * DLL Auto Patch: Creates a Cracked DLL from original `Windows.ApplicationModel.Store.dll` and replaces the original one with cracked one.
 * **DRC** - DLL Redirection for Cracking: Also known as DLL hijacking, this method takes advantage of the [DLL search order](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order) to cause the game to load a patched (i.e. cracked) dll instead of the dll present within the system directories (`System32` and `SysWOW64`). This method does not require editing the dlls in the system directories.
 * BlueSky Mode - Same as DLL Replacing

:::


<TableWrap>

Name | Download | Source code | Is it maintained? | Method
------ | ------ | ------ | ------| ------
🌟 MCBedrockPatch|[x64](https://dl.mcdoc.site/learn/MCBedrockPatch-x64.zip)/[x86](https://dl.mcdoc.site/learn/MCBedrockPatch-x86.zip)| \- | No | **DLL Auto Patch + More**
⭐ online-fix\.me's Launcher|[Website](https://online-fix.me/games/sandbox/16708-minecraft-for-windows-10-po-seti.html)|\-|**Yes**|**I-MCM**
⭐ OptiCraft|[Website](https://optijuegos.net/)|\-|**Yes**|**Modified Education Ed. to make it seem as it's Bedrock Ed. May contain bugs. *Works in Win7***
⭐ Zhmurkov Launcher|[Website](https://zhmurkov.ru/)|\-|**Yes**|**Cracked Appx**
🌐 Minecraft for Windows 10 Topic|[CS.RIN.RU](https://cs.rin.ru/forum/viewtopic.php?f=38&t=90151)|\-|**Yes**|Multiple Methods
Max_RM's pre-cracked appx|[Telegram](https://t.me/TNT_ENTERTAINMENT_inc)|\-|No|**Upcoming Launcher!**
Minecraft: Bedrock Edition [P] [RUS + ENG + 22] (2015, Simulation, UWP) (1.20.80) [P2P]|[RuTracker](https://rutracker.org/forum/viewtopic.php?t=6444229)|\-|**Yes**|**Cracked Appx**
\[DL] Minecraft: Bedrock Edition [L] [RUS + ENG + 22] (2015, Simulation, UWP) (1.20.81) [Microsoft Store-Rip]|[Rutracker](https://rutracker.org/forum/viewtopic.php?t=6440824)|\-|**Yes**|**Cracked Appx**
BlueSky Launcher|[GitHub](https://github.com/fym35/BlueSky) [PixelDrain](https://pixeldrain.com/u/indVkp1F)|[GitHub](https://github.com/fym35/BlueSky) forked from [FishiaT](https://github.com/FishiaT)|No|ClipSVC, SetACL, Bluesky Mode
DynoLTS|[WayBack Machine](https://web.archive.org/web/20210502020234/https://github.com/ClickNinYT/DynoLTS/archive/refs/heads/main.zip)|[WayBack Machine](https://web.archive.org/web/20220708141801/github.com/clickninyt/dynolts)|No|Same as BlueSky
MinecraftWindows10Bypass|[GitHub](https://github.com/keowu/Minecraft-Windows-10-Trial-Bypass/releases/download/V1.0/MinecraftWindows10Bypass.zip)|[GitHub](https://github.com/keowu/Minecraft-Windows-10-Trial-Bypass)|No|**I-MCM**
MCWIN10-PATCHER|[GitHub](https://github.com/raonygamer13/MCWIN10-PATCHER/releases/download/v1.0.0/McpePatcher.exe)|[GitHub](https://github.com/raonygamer13/MCWIN10-PATCHER)|No|DLL Replacing
Minecraft For Windows Launcher|[GitHub](https://github.com/jiesou/MFWL-Minecraft-For-Windows-Unlock-Launcher/archive/refs/heads/main.zip)|[GitHub](https://github.com/jiesou/MFWL-Minecraft-For-Windows-Unlock-Launcher)|No|DLL Replacing
MCWindows10UnlockHack|[PixelDrain](https://pixeldrain.com/u/C5f199xN)|[PixelDrain](https://pixeldrain.com/u/C5f199xN)|No|DLL Replacing
Minecraft Launch Script|[GitHub](https://github.com/Sahil12524/Minecraft-Launch-Script-VB-WinForms/releases/download/v1.10/Minecraft.Launch.Script.1.10.7z)|[GitHub](https://github.com/Sahil12524/Minecraft-Launch-Script-VB-WinForms)|No|DLL Replacing
Minecraft_For_Win10_Crack|[GitHub](https://github.com/zhicheng233/Minecraft_For_Win10_Crack/releases/download/MCBECrack2.41/Minecraft_For_Win10_Crack.exe)|[GitHub](https://github.com/zhicheng233/Minecraft_For_Win10_Crack)|No|DLL Replacing
Minecraft-Activator|[GitHub](https://github.com/Ambassador4ik/Minecraft-Activator/archive/refs/heads/main.zip)|[GitHub](https://github.com/Ambassador4ik/Minecraft-Activator)|No|DLL Replacing
CODEX's crack|[GitHub](https://github.com/ClickNin/mcwin10-codexemulator/archive/refs/heads/master.zip)|[GitHub](https://github.com/ClickNin/mcwin10-codexemulator)|No|Patching MC's files
MCPatcher|[GitHub](https://github.com/bricktea/MCPatcher/releases/download/v1.2.0/MCPatcher.exe)|[GitHub](https://github.com/bricktea/MCPatcher)|No|Patching MC’s files
MCrev|[GitHub](https://github.com/mcrax/mcrev/releases/download/1.14/Revision.1.14.exe)|[GitHub](https://github.com/mcrax/mcrev)|No|Patching MC’s files
PATCHER - CODEX|[PixelDrain](https://pixeldrain.com/u/DzjhErdB)|\-|No|Patching MC’s files
BLauncher|[GitHub](https://github.com/imsaku/blauncher/archive/refs/heads/main.zip)|[GitHub](https://github.com/imsaku/blauncher)|No|ClipSVC
XenonLauncher|[GitHub](https://github.com/charlie272/XenonLauncher/archive/refs/heads/main.zip)|[GitHub](https://github.com/charlie272/XenonLauncher)|No|ClipSVC

</TableWrap>

## Modded / Unlocked / Original APPXs/EXEs

<TableWrap>

| Name | Download | Source code | Is it maintained? | Description
| ------ | ------ | ------ | ------ | ------
| StarMoon Minecraft Repo | [Website](https://spectrollay.github.io/minecraft_repository_test/) | [GitHub](https://github.com/spectrollay/minecraft_repository_test/) | **Yes** | Various different APKs, APPXs, and more, for Minecraft Bedrock Edition.

</TableWrap>

## Hacked/Modded Clients for Minecraft for Windows 10

<TableWrap>

Name | Download | Source code | Is it maintained?| Description
------ | ------ | ------ | ------| ------
⭐Horion|[Website](https://horion.download/)|[GitHub](https://github.com/HorionContinued/Injector)|**Yes**|A Minecraft: Bedrock Edition hack/client mod designed to enhance gameplay.
⭐Horion DLL Archives|\-|[GitHub](https://github.com/7i7u5/Horion-Archive)|**Yes**| An archive with Horion DLLs to be used on other Minecraft version other than latest.
⭐Borion|[Website](https://borion-updated.github.io/) (DLL to be used with [Fate Injector](https://github.com/fligger/FateInjector))|[GitHub](https://github.com/Borion-Updated/Releases)|**Yes**|Borion-Updated is an updated version of Horion and Horion-Open-SRC. Full credit goes to the original Horion developers and everyone who has contributed over the years for the base. They do NOT claim credit for the code of the base.
Prax Client|[GitHub](https://github.com/Prax-Client/Releases) (DLL to be used with [Prax Injector](https://github.com/Prax-Client/Injector))|[GitHub](https://github.com/Prax-Client/Injector)|**Yes**|Prax Client is an external hacked/modded client for Minecraft Bedrock Edition. It offers various features to enhance gameplay.
Horion Open-SRC|\-|[GitHub](https://github.com/NRGJobro/Horion-Open-SRC)|**No**|Horion, but updated to 1.18.12 and open src :)

</TableWrap>

## Other Tools for Minecraft for Windows 10

<TableWrap>

Name | Download | Source code | Is it maintained?| Description
------ | ------ | ------ | ------| ------
⭐ MCLauncher|[GitHub](https://github.com/MCMrARM/mc-w10-version-launcher/releases)|[GitHub](https://github.com/MCMrARM/mc-w10-version-launcher)|**Yes**|Multi-version launcher for Minecraft
⭐ Bedrock Launcher|[GitHub](https://github.com/BedrockLauncher/BedrockLauncher/releases)|[GitHub](https://github.com/BedrockLauncher/BedrockLauncher)|**Yes**|Multi-version launcher for Minecraft with a good GUI
⭐ Mcappx|[Website](https://www.mcappx.com/)|\-|**Yes**|A third-party game resource platform that focuses on providing all versions of Minecraft for Windows
⭐ AutoModificator|[GitHub](https://github.com/Max-RM/AutoModificator)|[GitHub](https://github.com/Max-RM/AutoModificator/releases)|**Yes**| Unlocking height limit and piston push limit
MCli|[GitHub](https://raw.githubusercontent.com/mcrax/mcli/main/MCli.py)|[GitHub](https://github.com/mcrax/mcli)|No|UUID downloading
McUtils|[PixelDrain](https://pixeldrain.com/u/Rpw33LwR)|\-|*Maybe*|Decrypting Marketplace Content
Secret-Minecraft-marketplace-products|[PixelDrain](https://pixeldrain.com/u/TeFv567Z)|~~PixelDrain~~|No|List of unavalible marketplace items
Testcoin|[Telegram](https://t.me/archivebluecoin)|[Telegram](https://t.me/archivebluecoin)|**Yes**|Decrypting Marketplace Content
ThePillagerBay|[Telegram](https://t.me/ThePillagerBay)|~~Telegram~~|**Yes**|Decrypted Marketplace Content
Mc Persona|[PixelDrain](https://pixeldrain.com/u/gn9BuMTG)|[Telegram](https://t.me/c/2071756372/1758)|*Maybe*|Persona decryptor
BlueCoin|[Telegram](https://t.me/archivebluecoin)|\-|**Yes**|Decrypting Marketplace Content
Minecraft DLC Archives|[Discord](https://discord.gg/eDpasTFmRr)|\-|**Yes**|Decrypted Marketplace Contents
Skin Pack Unlocker|[CS.RIN.RU](https://cs.rin.ru/forum/viewtopic.php?f=38&t=90151)|\-|**Yes**|Skinpack unlocker

</TableWrap>

## Unlockers for Minecraft for Windows
::: tip See also
- [Linux](/bedrock/linux) · [Android](/bedrock/android) · [iOS](/bedrock/ios)
- Troubleshooting: [Windows issues](/guides/troubleshooting#windows)
:::
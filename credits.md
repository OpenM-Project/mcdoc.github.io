---
title: Credits
editLink: false
---

<script setup>
import {  VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from 'vitepress/theme'

const openm = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/138195097?v=4',
    name: 'XtronXI',
    title: 'Founded MCDOC, Owner of r/mcommunity_ and moderator of r/mcenters, co-founder & developer at the OpenM Project, and partnered with M Centers',
    links: [
      { icon: 'github', link: 'https://github.com/XtronXI/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/59843249?v=4',
    name: 'Cubebanyasz',
    title: 'Current owner of the OpenM Project, a contributor at M Centers & partnered with M Centers, and owner of the openm.tech domain, and the akshnav.cubebanyasz.me website',
    links: [
      { icon: 'github', link: 'https://github.com/misike12/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/176807151?v=4',
    name: 'ARS',
    title: 'Founder of the OpenM Project, Owner of r/openm, A contributor & and partnered with M Centers, admin at M Community, and a developer & frequent contributor here at MCDOC.',
    links: [
      { icon: 'github', link: 'https://github.com/ars-fr/' }
    ]
  }
]

const mention = [
  {
    avatar: 'https://mcenters.net/images/mcenter_5_icon.png?rand=87b6',
    name: 'Tinedpakgamer [MCenters]',
    title: 'Developer of M Centers Launchers',
    links: [
      { icon: 'github', link: 'https://github.com/tinedpakgamer/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/81485476?v=4',
    name: 'MaxRM',
    title: '>A major partner of M Centers, the owner of MDLC (working on cracked appx for Minecraft), and helped in giving hex codes for BEAMinject',
    links: [
      { icon: 'github', link: 'https://github.com/Max-RM' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/70952784?v=4',
    name: 'CyberAWM',
    title: 'A partner of M Centers',
    links: [
      { icon: 'github', link: 'https://github.com/QwertyTheCoder' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/74685931?v=4'
    name: 'FishiaT [ClickNinYT]',
    title: 'Developer of ClickGo, ClickGoLTS, DynoLTS and BlueSky Launcher. He is also a partner of M Centers, although he is not in the M Centers discord server anymore',
    links: [
      { icon: 'github', link: 'https://github.com/FishiaT/' },
      { icon: 'github', link: 'https://github.com/ClickNin/'}
    ] 
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/829670801334468649/b835b8f133f7c27ade8c7a15ad9199f9.webp',
    name: 'SOMEONE',
    title: 'Founder of M Community, the community that was aiming to revive M Centers after M Centers left (13th February 2024), and before M Centers came back (1st May 2024), also a partner at M Centers.'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>OpenM Team</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="openm" />
  <VPTeamPageSection>
    <template #title>Worth Mentioning</template>
    <template #members>
      <VPTeamMembers size="small" :members="mention" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<!--
<script>
window.onload = function() {
  var tbody = document.querySelector('#membersTable tbody');
  var rows = Array.prototype.slice.call(tbody.rows, 0);
-->
<!--
  rows = rows.sort(function(a, b) {
    return Math.random() > 0.5 ? 1 : -1;
  });
-->
<!--
  rows.forEach(function(row) {
    tbody.appendChild(row);
  });
};
</script>
-->

# Important Websites/Forums/Communities

<table>
  <tr>
    <td><a href="https://online-fix.me">online-fix.me</a></td>
    <td>A website dedicated to cracking, and is really important, as it contains a lot of cracks for Minecraft, such as the Minecraft for Windows crack, the Minecraft Dungeons crack, and the Minecraft Legends crack.</td>
  </tr>
  <tr>
    <td><a href="https://optijuegos.github.io/">OptiProjects/OptiJuegos</a></td>
    <td>A website dedicated to cracking Minecraft China / Minecraft China Dev, and Minecraft: Education Edition.</td>
  </tr>
  <tr>
    <td><a href="https://t.me/MDLC_main">MDLC</a></td>
    <td>MDLC is dedicated to cracking, and is really important, as it contains a lot of cracks for Minecraft, and a lot of pre-patched APPX's designed to work on different devices, MDLC is owned by Max RM.</td>
  </tr>
  <tr>
    <td><a href="https://cs.rin.ru/forum">cs.rin.ru</a></td>
    <td>A forum website that is full of cracking and Minecraft topics.</td>
  </tr>
</table>

#### *And other contributors or developers of OpenM, and its projects, M Centers, and M Community / M Community Development*

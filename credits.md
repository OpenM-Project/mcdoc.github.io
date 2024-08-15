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
    title: 'Founder |  Co-founder of OpenM',
    desc: 'Owner of r/mcommunity_ and moderator of r/mcenters, and partnered with M Centers',
    links: [
      { icon: 'github', link: 'https://github.com/XtronXI/' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><rect width="13" height="13" fill="#E11111FF"></rect><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="10px" fill="#F5F5F5FF">Hi</text></svg>' },
        link: 'https://test.com'
        }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/59843249?v=4',
    name: 'Cubebanyasz',
    title: 'Co-founder | Current owner of OpenM',
    desc: 'A contributor at M Centers & partnered with M Centers, and owner of the openm.tech domain, and the akshnav.cubebanyasz.me website',
    links: [
      { icon: 'github', link: 'https://github.com/misike12/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/176807151?v=4',
    name: 'ARS',
    title: 'Major Contributor | Founder of OpenM',
    desc: 'Owner of r/openm, a contributor & partnered with M Centers, and admin at M Community',
    links: [
      { icon: 'github', link: 'https://github.com/ars-fr/' }
    ]
  }
]

const mention = [
  {
    avatar: 'https://mcenters.net/images/mcenter_5_icon.png?rand=87b6',
    name: 'Tinedpakgamer [MCenters]',
    desc: 'Developer of M Centers Launchers',
    links: [
      { icon: 'github', link: 'https://github.com/tinedpakgamer/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/81485476?v=4',
    name: 'MaxRM',
    desc: 'A major partner of M Centers, the owner of MDLC (working on cracked appx for Minecraft), and helped in giving hex codes for BEAMinject',
    links: [
      { icon: 'github', link: 'https://github.com/Max-RM' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/70952784?v=4',
    name: 'CyberAWM',
    desc: 'A partner of M Centers',
    links: [
      { icon: 'github', link: 'https://github.com/QwertyTheCoder' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/74685931?v=4',
    name: 'FishiaT [ClickNinYT]',
    desc: 'Developer of ClickGo, ClickGoLTS, DynoLTS and BlueSky Launcher. He is also a partner of M Centers, although he is not in the M Centers discord server anymore',
    links: [
      { icon: 'github', link: 'https://github.com/FishiaT/' },
      { icon: 'github', link: 'https://github.com/ClickNin/'}
    ] 
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/829670801334468649/b835b8f133f7c27ade8c7a15ad9199f9.webp',
    name: 'SOMEONE',
    desc: 'Founder of M Community, the community that was aiming to revive M Centers after M Centers left (13th February 2024), and before M Centers came back (1st May 2024), also a partner at M Centers.'
  },
  {
    avatar: 'https://i.ibb.co/B4zYpbz/frame-00-delay-0-04s.png',
    name: 'online-fix.me',
    desc: 'A website dedicated to cracking, and is really important, as it contains a lot of cracks for Minecraft, such as the Minecraft for Windows crack, the Minecraft Dungeons crack, and the Minecraft Legends crack',
    links: [
      { icon: 'web', link: 'https://online-fix.me/' }
    ]
  },
  {
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAGBQTFRFR3BM////////////////////////////////////////////////////////////////////////9fr65fLy1+vqx+Thud7brdjVn9PPj83Id8XAWb63PbmxEbSsALOr5GfTXQAAAB10Uk5TAAEJFSg1RFNeaHaJm6/A0eDt9fb3+Pn6+/z8/f48zzY/AAABWUlEQVR42o1Ti46DIBAsPvpQHjKgWMDy/395FYpI7pLeJCbCzi4zu3D5N0j3oIxzzsZHT/6I3wQKxPVXOgW0sc5776zRAG1qAoWyIeH1/p4KvD3HWygfzvAa/FzjiiXU2DTGk4I7zGf/uSzGxRoKXWFkglPYse7/BrQQBqyfOLvfBgm7F1Oy6GRwcQsDifX0Tl8wnExEc2BJkoh8B350MZnQuOYToySF7JTGQz0m8pkK5p0wI3dcYHuv18M5kSrEjSFL0DmhyrDZaI+5HBnBk8osOml8YSq2C6H08SshKJnjRMBnDVUbuqMvunLRQVfT6SbY2taELY2C9eTSDjJV9JClk3mYkBKAecUC5cr0UFu8LqsG9OJCGqYo46aYt1DDYDrdqEZA+yq+QvYlTkjLoUwp4mbI+u2QZgQwr9Y5+1w0IHJ+QUclMsQjG6zQ9ANljI639ts7rx73D92BMwla3uW4AAAAAElFTkSuQmCC',
    name: 'OptiProjects / OptiJuegos',
    desc: 'A website dedicated to cracking Minecraft China / Minecraft China Dev, and Minecraft: Education Edition',
    links: [
      { icon: 'web', link: 'https://optijuegos.github.io/' }
    ]
  },
  {
    avatar: 'https://cdn4.cdn-telegram.org/file/lF0LH4T5bLjqi2s3-hNRAU9wz--jg3gA-KabhsTL8V3qz3nzOyPno1H_OYy3DZlIOu6in15MeCKIcoJIfbL3XkduyCafqxoVV99lLzqXP0xzDV8rYR8D8t3pBQFZ8tbfwSO9gY2VrBMNQnlaV6aHxpMKGn3MyPKgeBKVgzKd_H7MSgCJG8Heh5FmEgzFRHImKe90rMbssNR-aBXZGAaAAEpMIwvzB0rLbp4oq37JybMsAyZfONBY14xVJpDyENfa2kh60eDsamNCb3UmUh_xkn0_AYQMhaFEBT0lkOiRuF3U2iQDpLVCnVS2zl1m_4ZGF7Ak-8TkBL8dCvYFd8UGOg.jpg',
    name: 'MDLC',
    desc: 'MDLC is dedicated to cracking, and is really important, as it contains a lot of cracks for Minecraft, and a lot of pre-patched APPXs designed to work on different devices, MDLC is owned by Max RM',
    links: [
      { icon: 'ic:baseline-telegram', link: 'https://t.me/MDLC_main' },
      { icon: 'ic:baseline-telegram', link: 'https://t.me/MDLC_group' }
    ]
  },
  {
    avatar: 'https://i.ibb.co/cgxK7gR/csrinru.png',
    name: 'CS.RIN.RU',
    desc: 'A forum website that is full of cracking and Minecraft topics',
    links: [
      { icon: 'web', link: 'https://cs.rin.ru/' }
    ]
  },
  {
    avatar: 'https://rutracker.org/favicon-32x32.png',
    name: 'RuTracker.org',
    desc: 'A torrent tracker website that contains alot of cracked Minecraft downloads',
    links: [
      { icon: 'web', link: 'https://rutracker.org/' }
    ]
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

#### *And other contributors or developers of OpenM, and its projects, M Centers, M Community / M Community Development, and other similar communities*

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

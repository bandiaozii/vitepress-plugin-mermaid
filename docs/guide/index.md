---
layout: page
title: 书籍
description: The development of Vite is guided by an international team.
---

<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamPageSection} from 'vitepress/theme';

import { core, emeriti } from '../.vitepress/theme/config/team';

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title> 医检记忆卡<KaoshiTitle :text="s"/>
     </template>

    <!-- <template #lead>
      <KaoshiTitle/>
    </template> -->

  </VPTeamPageTitle>
  <IVPTeamMembers :members="core" />

 <!-- <VPTeamPageSection>
     <template #title><KaoshiTitle/></template>
    <template #lead>
      这里是检验学霸的优秀笔记。
    </template>
    <template #members>
      <IVPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection> -->

</VPTeamPage>

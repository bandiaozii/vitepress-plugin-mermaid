<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import read from './icons/read.vue'
import VPLink from './IVPLink.vue'
import VPSocialLinks from 'vitepress/dist/client/theme-default/components/VPSocialLinks.vue'
import KaoShibutton from './KaoShibutton.vue';

defineProps<{
  size?: 'small' | 'medium'
  member: {
    avatar: string
    name: string
    title?: string
    org?: string
    orgLink?: string
    desc?: string
    des?: string
    links?: DefaultTheme.SocialLink[]
    bookKey?: string,
    pay?: boolean,
    sponsor?: string,
    ksIdf?: string,
    ksIdt?: string,
    ksIds?: string,
    namef?:string,
    names?:string,
    namet?:string,
    unamef?:string,
    unames?:string,
    unamet?: string,
    list?: string,
    listjifen?: string
  }
}>()
</script>

<template>
  <article class="VPTeamMembersItem" :class="[size ?? 'medium']">
    <div class="profile">
      <figure class="avatar">
        <img class="avatar-img" :src="member.avatar" :alt="member.name">
      </figure>
      <div class="data">
        <h1 class="name">
          {{ member.name }}
        </h1>
        <p v-if="member.title || member.org" class="affiliation">
          <span v-if="member.title" class="title">
            {{ member.title }}
          </span>
          <!-- <span v-if="member.title && member.org" class="at">
            @
          </span> -->

          <div v-if="member.ksIdf && member.namef || member.ksIds && member.names  ||member.ksIdt && member.namet  " >
          <KaoShibutton
          :ksIdf="member.ksIdf" :namef="member.namef" 
          :ksIds="member.ksIds" :names="member.names" 
          :ksIdt="member.ksIdt" :namet="member.namet" 
          :from_type="1" >
          </KaoShibutton>
        </div>

          <div v-if="member.list" >
          <KaoShibuttonto :list="member.list" >
          </KaoShibuttonto>
        </div>
        <div v-if="member.listjifen" >
          <KaoShibuttonjifen :listjifen="member.listjifen" >
          </KaoShibuttonjifen>
        </div>

          <VPLink v-if="member.org" class="org" :class="{ link: member.orgLink }" :href="member.orgLink" no-icon>
            {{ member.org }}
          </VPLink>
        </p>
        <p v-if="member.desc" class="desc">
          {{ member.desc }}
        </p>
        <div v-if="member.links" class="links">
          <VPSocialLinks :links="member.links" />
        </div>
      </div>
    </div>
    <div v-if="member.sponsor" class="sp">
      <VPLink class="sp-link" :href="member.sponsor? member.sponsor:'javascript:void(0)'" :bookKey="member.bookKey" :pay="member.pay" no-icon>
        <read class="sp-icon" /> 开始记忆
      </VPLink>
    </div>
  </article>
</template>

<style scoped>

/* .profile {
  height: 100%;
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly
} */

.profile img {
  position: absolute;
  /* left: 1.5rem; */
  transition: transform 0.5s;
}
.profile:hover img {
  transform: scale(1.5);
}

.VPTeamMembersItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.VPTeamMembersItem.small .profile {
  padding: 32px;
}

.VPTeamMembersItem.small .data {
  padding-top: 20px;
}

.VPTeamMembersItem.small .avatar {
  width: 64px;
  height: 64px;
}

.VPTeamMembersItem.small .name {
  line-height: 24px;
  font-size: 16px;
}

.VPTeamMembersItem.small .affiliation {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
}

.VPTeamMembersItem.small .desc {
  padding-top: 12px;
  line-height: 20px;
  font-size: 14px;
}
.VPTeamMembersItem.small .des {
  padding-top: 12px;
  line-height: 20px;
  font-size: 14px;
}

.VPTeamMembersItem.small .links {
  margin: 0 -16px -20px;
  padding: 10px 0 0;
}

.VPTeamMembersItem.medium .profile {
  padding: 48px 32px;
}

.VPTeamMembersItem.medium .data {
  padding-top: 24px;
  text-align: center;
}

.VPTeamMembersItem.medium .avatar {
  width: 96px;
  height: 96px;
}

.VPTeamMembersItem.medium .name {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.VPTeamMembersItem.medium .affiliation {
  padding-top: 4px;
  font-size: 16px;
}

.VPTeamMembersItem.medium .desc {
  padding-top: 16px;
  max-width: 288px;
  font-size: 16px;
}

.VPTeamMembersItem.medium .links {
  margin: 0 -16px -12px;
  padding: 16px 12px 0;
}

.profile {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  text-align: center;
}

.avatar {
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
}

.avatar-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  margin:  0;
  font-weight: 600;
}

.affiliation {
  margin:  0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.org.link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.org.link:hover {
  color: var(--vp-c-brand);
}

.desc {
  margin: 0 auto;
}

.links {
  display: flex;
  justify-content: center;
  height: 56px;
}

.sp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp-link:hover,
.sp-link:focus {
  outline: none;
  color: var(--vp-c-text-dark-1);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>

// @ts-ignore
import DefaultTheme from 'vitepress/theme';
import '../../public/fontawesome/js/solid.js';
import '../../public/fontawesome/js/brands.js';
import '../../public/fontawesome/js/regular.js';
import '../../public/fontawesome/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './styles/vars.css';
import './custom.css';
import AsideSponsors from './components/AsideSponsors.vue';
import beitiL from './components/beitiL.vue';
import beitiX from './components/beitiX.vue';
import beitiS from './components/beitiS.vue';
import beitiM from './components/beitiM.vue';
import beitiW from './components/beitiW.vue';
import TreeChart from './components/TreeChart.vue';
import kaodian from './components/kaodian.vue';
import Tenant from './components/Tenant.vue';
import son from './components/son.vue';
import father from './components/father.vue';
import Option from './components/Option.vue';
import IVPTeamMembers from './components/IVPTeamMembers.vue';
import IVPLink from './components/IVPLink.vue';
import Link from './components/Link.vue';
import IVPTeamMembersex from './components/IVPTeamMembersex.vue';
import read from './components/icons/read.vue';
import KaoShiTo from './components/KaoShiTo.vue';
import KaoShiTocs from './components/KaoShiTocs.vue';
import KaoShibutton from './components/KaoShibutton.vue';
import JYbutton from './components/JYbutton.vue';
import JYbuttonfufei from './components/JYbuttonfufei.vue';
import KaoShibuttonto from './components/KaoShibuttonto.vue';
import KaoShibuttonfenxiang from './components/KaoShibuttonfenxiang.vue';
import KaoShibuttonjifen from './components/KaoShibuttonjifen.vue';
import KaoshiTitle from './components/KaoshiTitle.vue';
import cell from './components/cell.vue';
import VueCookies from 'vue-cookies';

export default {
  ...DefaultTheme,
  // Layout: NewLayout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.config.globalProperties.$cookies = VueCookies
    app.component('beitiL', beitiL)
    app.component('beitiX', beitiX)
    app.component('beitiS', beitiS)
    app.component('beitiM', beitiM)
    app.component('beitiW', beitiW)
    app.component('KaoshiTitle', KaoshiTitle)
    app.component('KaoShiTo', KaoShiTo)
    app.component('KaoShiTocs', KaoShiTocs)
    app.component('KaoShibutton', KaoShibutton)
    app.component('JYbutton', JYbutton)
    app.component('JYbuttonfufei', JYbuttonfufei)
    app.component('KaoShibuttonto', KaoShibuttonto)
    app.component('KaoShibuttonfenxiang', KaoShibuttonfenxiang)
    app.component('KaoShibuttonjifen', KaoShibuttonjifen)
    app.component('IVPTeamMembers', IVPTeamMembers)
    app.component('IVPTeamMembersex', IVPTeamMembersex)
    app.component('IVPLink', IVPLink)
    app.component('Link', Link)
    app.component('kaodian', kaodian)
    app.component('AsideSponsors', AsideSponsors)
    app.component('Tenant', Tenant)
    app.component('Option', Option)
    app.component('father', father)
    app.component('son', son)
    app.component('read', read)
    app.component('TreeChart', TreeChart)
    app.component('cell', cell)
    app.component('font-awesome-icon', FontAwesomeIcon)
    // app.component('faUserSecret', faUserSecret)
    // app.component('library', library)
    // app.component('fas', fas)
    // app.component('faPlay', faPlay)
    // app.component('fas', fas)
  }
}

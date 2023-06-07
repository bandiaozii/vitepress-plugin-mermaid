
import type { DefaultTheme } from 'vitepress';
import { sidebarclincal } from "./sidebar/sidebarclincal.js"
import { sidebarimmune } from "./sidebar/sidebarimmune.js"
import { sidebarblood } from "./sidebar/sidebarblood.js"
import { sidebarmicroorganism } from './sidebar/sidebarmicroorganism.js'
import { sidebarbiochemical } from "./sidebar/sidebarbiochemical.js"

export const themeConfig: DefaultTheme.Config = {


    logo: '/logo.svg',
    lastUpdatedText: "Last Updated",
    sidebar: {
        '/guide/clinical/': sidebarclincal(),
        '/guide/immune/': sidebarimmune(),
        '/guide/blood/': sidebarblood(),
        '/guide/microorganism/': sidebarmicroorganism(),
        '/guide/biochemical/': sidebarbiochemical(),
    },

}
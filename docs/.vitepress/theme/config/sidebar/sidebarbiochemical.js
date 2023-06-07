import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export function sidebarbiochemical() {
    return [
        {
            text: '一、概述',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/1/')
        },
        {
            text: '二、糖代谢紊乱及糖尿病的检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/2/')
        },
        {
            text: '三、脂代谢及高脂蛋白血症的检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/3/')
        }, {
            text: '四、血浆蛋白质检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/4/')
        },
        {
            text: '五、诊断酶学',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/5/')
        },
        {
            text: '六、体液平衡紊乱及其检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/6/')
        }, {
            text: '七、钙、磷、镁代谢与微量元素',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/7/')
        },
        {
            text: '八、治疗药物浓度监测',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/8/')
        },
        {
            text: '九、心肌损伤的生化标志物',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/9/')
        },

        {
            text: '十、肝胆疾病的实验室检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/10/')
        },
        {
            text: '十一、肾功能及早期肾损伤的检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/11/')
        },
        {
            text: '十二、胰腺疾病的检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/12/')
        }, {
            text: '十三、内分泌疾病的检查',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/13/')
        },
        {
            text: '十四、临床化学常用分析技术',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/14/')
        },
        {
            text: '十五、临床化学自动分析仪',
            collapsible: true,
            collapsed: true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/biochemical/15/')
        }
    ]
}
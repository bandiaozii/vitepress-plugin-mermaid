<template>
  <div>
    <TreeChart :json="treeData" :class="{ landscape: 1 }" />
  </div>
</template>

<script>
import TreeChart from "./TreeChart.vue";
export default {
  name: "app",
  components: {
    TreeChart,
  },

  data() {
    return {
      treeData: {
        extend: false,
        name: "干细胞",
        n: '是一种可以不断自我复制，分化成多种细胞类型的未分化细胞。干细胞可以分为胚胎干细胞和成体干细胞两类。胚胎干细胞来自于早期胚胎，可以分化成所有类型的细胞；成体干细胞存在于成体的各种组织中，具有分化成该组织中的各种细胞类型的能力。"',
        image_url: "http://public.kaoshu.cc/cell/1.png",
        image_urlt: "http://public.kaoshu.cc/cell/1.png",
        class: ["rootNode"],
        children: [
          {
            extend: false,
            name: "祖细胞",
            n: "已经分化成了一定细胞类型，但仍具有一定的分化能力，可以分化成该细胞系中的其他类型细胞的细胞。祖细胞可以分为造血干细胞和淋巴造血干细胞两类。造血干细胞存在于骨髓中，可以分化成红、白血细胞和血小板；淋巴造血干细胞存在于淋巴组织中，可以分化成T、B和NK细胞等淋巴细胞。",
            image_url: "http://public.kaoshu.cc/cell/2.png",
            image_urlt: "http://public.kaoshu.cc/cell/2.png",
            children: [
              {
                extend: false,
                name: "原红细胞",
                x: "瘤状突起",
                n: "胞体直径15～20μm，圆形或椭圆形，边缘常有钝角状或瘤状突起。胞核圆形、居中或稍偏于一旁，约占细胞直径的4/5，核染色质呈颗粒状，比原始粒细胞粗而密，核仁1～2个，胞质量少，深蓝色，不透明，在核周围常形成淡染区。",
                image_url: "http://public.kaoshu.cc/cell/3.png",
                image_urlt: "http://public.kaoshu.cc/cell/3.png",
                children: [
                  {
                    extend: false,
                    name: "早幼红细胞",
                    n: "胞体直径10～18μm，圆形或椭圆形。胞核圆或椭圆形，占细胞2/3以上，核染色质可浓集成粗密的小块，核仁模糊或消失，胞质量多，染不透明蓝或深蓝色，仍可见瘤状突起及核周淡染区。",
                    image_url: "http://public.kaoshu.cc/cell/4.png",
                    image_urlt: "http://public.kaoshu.cc/cell/4.png",
                    children: [
                      {
                        extend: false,
                        name: "中幼红细胞（早）",
                        n: "胞体直径8～15μm，圆形。胞核圆形或椭圆形，约占细胞的1/2，核染色质凝聚成索条状或块状，其中有明显空隙，核仁消失。胞质内血红蛋白形成逐渐增多，可呈嗜多色性。",
                        image_url: "http://public.kaoshu.cc/cell/5.png",
                        image_urlt: "http://public.kaoshu.cc/cell/5.png",
                        children: [
                          {
                            extend: false,
                            name: "中幼红细胞（中）",
                            n: "中幼红细胞（中）的直径约为10-15微米，形态为圆形，胞体染色较深，呈现出深红色。其胞核呈现圆形，有明显的核仁，核质比例约为1/2左右。胞质中不含有血红蛋白，也没有明显的嗜酸性或嗜碱性颗粒。",
                            image_url: "http://public.kaoshu.cc/cell/6.png",
                            image_urlt: "http://public.kaoshu.cc/cell/6.png",
                            children: [
                              {
                                extend: false,
                                name: "中幼红细胞（晚）",
                                n: "。中幼红细胞（晚）的直径约为7-10微米，形态为圆形或略呈椭圆形，胞体染色较深，呈现出深红色。其胞核已经完全消失，胞质中含有血红蛋白和其他细胞成分，但细胞器已经减少到极少量。胞质中不含有嗜酸性或嗜碱性颗粒。",
                                image_url: "http://public.kaoshu.cc/cell/7.png",
                                image_urlt:
                                  "http://public.kaoshu.cc/cell/7.png",
                                children: [
                                  {
                                    extend: false,
                                    name: "晚幼红细胞",
                                    n: "胞体直径7～10μm，圆形，胞核圆形，居中或偏位，占细胞1/2以下，核染色质聚集成数个大块或凝缩成紫黑色团块状，胞质量较多，浅灰或浅红色。",
                                    image_url:
                                      "http://public.kaoshu.cc/cell/8.png",
                                    image_urlt:
                                      "http://public.kaoshu.cc/cell/8.png",
                                    children: [
                                      {
                                        extend: false,
                                        name: "网织红细胞",
                                        n: "为晚幼红细胞脱核的分化阶段，直径8～9μm，胞质内仍含嗜碱物质，属于成熟细胞。",
                                        image_url:
                                          "http://public.kaoshu.cc/cell/9.png",
                                        image_urlt:
                                          "http://public.kaoshu.cc/cell/9.png",
                                        children: [
                                          {
                                            extend: false,
                                            name: "红细胞",
                                            n: "正常红细胞平均直径7.2μm，形态呈双面微凹之圆盘状，中央较薄，边缘较厚，染色后呈淡红略带紫色，中央部分淡染，无核。",
                                            image_url:
                                              "http://public.kaoshu.cc/cell/10.png",
                                            image_urlt:
                                              "http://public.kaoshu.cc/cell/10.png",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                extend: false,
                name: "原粒细胞",
                x: "核仁2～5个",
                n: "原始粒细胞：胞体直径10～18μm，圆形或类椭圆形。胞核较大，约占细胞的 2/3以上，核染色质呈细粒状，排列均匀，无浓集，核膜较模糊。核仁2～5个，较小，清楚。胞质量少，呈透明天蓝色，绕于核周，无颗粒。",
                image_url: "http://public.kaoshu.cc/cell/17.png",
                image_urlt: "http://public.kaoshu.cc/cell/17.png",
                children: [
                  {
                    extend: false,
                    name: "中性早幼粒细胞",
                    n: "细胞体积较大，约12-18微米，细胞核也较大，占据了细胞体积的大部分，通常呈现圆形或扁圆形。细胞核染色质较多，呈现粗大的颗粒状，核仁不明显或不可见。胞浆呈现淡蓝色或淡紫色，内含嗜酸性颗粒和嗜碱性颗粒，但不易观察到。",
                    image_url: "http://public.kaoshu.cc/cell/19.png",
                    image_urlt: "http://public.kaoshu.cc/cell/19.png",
                    children: [
                      {
                        extend: false,
                        name: "中性中幼粒细胞",
                        n: "胞体直径10～18μm，圆形。胞核椭圆形或一侧开始扁平，占细胞的2/3～1/2，染色质聚集成索块状，核仁消失。胞质量多，内含中等量、大小较一致的特异的中性颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/20.png",
                        image_urlt: "http://public.kaoshu.cc/cell/20.png",
                        children: [
                          {
                            extend: false,
                            name: "中性晚幼粒细胞",
                            n: "胞体直径10～16μm，呈圆形，胞核明显凹陷，但其凹陷程度一般不超过核假设直径的一半。核染色质粗糙，排列更紧密。胞质量多，染浅红色，充满中性颗粒。",
                            image_url: "http://public.kaoshu.cc/cell/21.png",
                            image_urlt: "http://public.kaoshu.cc/cell/21.png",
                            children: [
                              {
                                extend: false,
                                name: "中性杆状核粒细胞",
                                n: "胞体直径10～15μm，圆形。胞核凹陷程度超过核假设直径的一半，核径最窄处大于最宽处1/3以上，形态弯曲成带状，核染色质粗糙呈块状，核两端钝圆，染深紫红色。胞质充满中性颗粒。",
                                image_url:
                                  "http://public.kaoshu.cc/cell/22.png",
                                image_urlt:
                                  "http://public.kaoshu.cc/cell/22.png",
                                children: [
                                  {
                                    extend: false,
                                    name: "中性分叶核核粒细胞",
                                    n: "胞体直径10～14μm，圆形。胞核分叶状，常分2～5叶，核染色质浓集或呈较多小块。胞质丰富，浆内分布着细小紫红色中性颗粒。",
                                    image_url:
                                      "http://public.kaoshu.cc/cell/23.png",
                                    image_urlt:
                                      "http://public.kaoshu.cc/cell/23.png",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    extend: false,
                    name: "嗜碱早幼粒细胞",
                    n: "细胞体积较大，约12-18微米，细胞核也较大，占据了细胞体积的大部分，通常呈现圆形或扁圆形。细胞核染色质较多，呈现粗大的颗粒状，核仁不明显或不可见。胞浆呈现淡蓝色或淡紫色，内含嗜碱性颗粒，这些颗粒可以通过酸性染色来观察到。",
                    image_url: "http://public.kaoshu.cc/cell/26.png",
                    image_urlt: "http://public.kaoshu.cc/cell/26.png",
                    children: [
                      {
                        extend: false,
                        name: "嗜碱中幼粒细胞",
                        x: "紫黑色",
                        n: "胞体直径10～15μm。胞核椭圆形，轮廓不清楚，核染色质较模糊。胞质内及核上含有数量不多、排列凌乱、大小不等的紫黑色特异的嗜碱性颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/27.png",
                        image_urlt: "http://public.kaoshu.cc/cell/27.png",
                        children: [
                          {
                            extend: false,
                            name: "嗜碱晚幼粒细胞",
                            n: "胞体直径10～14μm。胞核固缩呈肾形，轮廓模糊。胞质内及核上含有少量、分布不匀的嗜碱性颗粒。",
                            image_url: "http://public.kaoshu.cc/cell/28.png",
                            image_urlt: "http://public.kaoshu.cc/cell/28.png",
                            children: [
                              {
                                extend: false,
                                name: "嗜碱杆状核粒细胞",
                                n: "胞体10～12μm。胞核呈模糊杆状。胞质内及胞核上含有紫黑色、大小不匀、数量较少的嗜碱性颗粒。",
                                image_url:
                                  "http://public.kaoshu.cc/cell/29.png",
                                image_urlt:
                                  "http://public.kaoshu.cc/cell/29.png",
                                children: [
                                  {
                                    extend: false,
                                    name: "嗜碱分叶核核粒细胞",
                                    n: "胞体直径10～12μm，胞核可分3～4叶或分叶不明显。胞质嗜碱性颗粒呈紫黑色，大小不一，分布不均，常掩盖在核上。",
                                    image_url:
                                      "http://public.kaoshu.cc/cell/30.png",
                                    image_urlt:
                                      "http://public.kaoshu.cc/cell/30.png",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    extend: false,
                    name: "嗜酸早幼粒细胞",
                    n: "细胞体积较大，约12-18微米，细胞核也较大，占据了细胞体积的大部分，通常呈现圆形或扁圆形。细胞核染色质较多，呈现粗大的颗粒状，核仁不明显或不可见。胞浆呈现淡蓝色或淡紫色，内含嗜酸性颗粒，这些颗粒可以通过碱性染色来观察到。",
                    image_url: "http://public.kaoshu.cc/cell/37.png",
                    image_urlt: "http://public.kaoshu.cc/cell/37.png",
                    children: [
                      {
                        extend: false,
                        name: "嗜酸中幼粒细胞",
                        x: "橘红色",
                        n: "胞体直径15～20μm，胞核与中性中幼粒细胞相似。胞质内充满粗大、均匀、排列紧密、橘红色的特异的嗜酸性颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/39.png",
                        image_urlt: "http://public.kaoshu.cc/cell/39.png",
                        children: [
                          {
                            extend: false,
                            name: "嗜酸晚幼粒细胞",
                            n: "胞体直径10～16μm，胞核在中央或偏一侧，呈肾形或椭圆形。胞质充满着嗜酸性颗粒。",
                            image_url: "http://public.kaoshu.cc/cell/40.png",
                            image_urlt: "http://public.kaoshu.cc/cell/40.png",
                            children: [
                              {
                                extend: false,
                                name: "嗜酸杆状核粒细胞",
                                n: "胞体直径11～16μm，圆形。胞核与中性杆状粒细胞相似。胞质充满着粗大的橘红色嗜酸性颗粒。",
                                image_url:
                                  "http://public.kaoshu.cc/cell/41.png",
                                image_urlt:
                                  "http://public.kaoshu.cc/cell/41.png",
                                children: [
                                  {
                                    extend: false,
                                    name: "嗜酸分叶核核粒细胞",
                                    n: "胞体直径11～16μm，胞核多分为两叶。胞质充满着粗大呈橘红色嗜酸性颗粒。",
                                    image_url:
                                      "http://public.kaoshu.cc/cell/42.png",
                                    image_urlt:
                                      "http://public.kaoshu.cc/cell/42.png",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                extend: false,
                name: "原淋巴细胞",
                x: "伪足突起",
                n: "胞体直径10～18μm，圆或椭圆形。胞核大，位于中央或稍偏一侧，圆或椭圆形、核染色质细致，呈颗粒状，但比原粒细胞稍粗，排列匀称，核膜浓厚，界限清晰，核仁1～2个，胞质极少，呈淡蓝色，透明，核周界明显，无颗粒。",
                image_url: "http://public.kaoshu.cc/cell/48.png",
                image_urlt: "http://public.kaoshu.cc/cell/48.png",
                children: [
                  {
                    extend: false,
                    name: "幼淋巴细胞",
                    n: "胞体直径10～16μm，胞核圆或椭圆形，核仁模糊不清或消失，核染色质仍较细致。胞质较少，淡蓝色，偶有少许天青胺蓝颗粒。",
                    image_url: "http://public.kaoshu.cc/cell/49.png",
                    image_urlt: "http://public.kaoshu.cc/cell/49.png",
                    children: [
                      {
                        extend: false,
                        name: "小淋巴细胞",
                        x: "小切迹",
                        n: "胞体圆形，直径6～9μm，胞核圆形或有小切迹，核染色质聚集紧密成大块状。胞质量很少，颇似裸核，如可见则呈淡蓝色，一般无颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/51.png",
                        image_urlt: "http://public.kaoshu.cc/cell/51.png",
                      },

                      {
                        extend: false,
                        name: "大淋巴细胞",
                        n: "胞体圆形，直径12～15μm，胞核椭圆形稍偏一侧，核染色质排列紧密而均匀。胞质较多，呈清澈的淡蓝色，可有少量大小不等的天青胺蓝颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/53.png",
                        image_urlt: "http://public.kaoshu.cc/cell/53.png",
                      },
                    ],
                  },
                ],
              },
              {
                extend: false,
                name: "原单核细胞",
                x: "胞质，呈灰蓝色，毛玻璃",
                n: "胞体直径15～20μm，圆或椭圆形。胞核较大，圆形、类圆形。核染色质纤细，呈疏松网状，核仁1～3个。胞质较丰富，呈灰蓝色，毛玻璃，不透明，边缘不规则，有时可见伪足状突出。",
                image_url: "http://public.kaoshu.cc/cell/31.png",
                image_urlt: "http://public.kaoshu.cc/cell/31.png",
                children: [
                  {
                    extend: false,
                    name: "幼单核细胞",
                    n: "胞体直径15～25μm，圆形，不规则形。胞核圆或不规则形，呈扭曲折叠状，核染色质较原单核细胞粗糙疏松，呈丝网状，无核仁。胞质较多，染灰蓝色，可见细小染紫红色的天青胺蓝颗粒。",
                    image_url: "http://public.kaoshu.cc/cell/33.png",
                    image_urlt: "http://public.kaoshu.cc/cell/33.png",
                    children: [
                      {
                        extend: false,
                        name: "单核细胞",
                        x: "马蹄形",
                        n: "胞体直径12～20μm，圆或不规则形，胞核形态不规则并有明显的扭曲折叠。核染色质较细致，疏松呈丝网状或条索状。胞质量多，染灰蓝色和淡粉红色，胞质内见细小的、分散均匀的灰尘样紫红色天青胺蓝颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/35.png",
                        image_urlt: "http://public.kaoshu.cc/cell/35.png",
                      },
                    ],
                  },
                ],
              },

              {
                extend: false,
                name: "原浆细胞",
                n: "胞体直径14～18μm，圆或椭圆形。胞核圆形，占细胞的2/3以上，核染色质呈粗颗粒网状，核仁2～5个。胞质量多，染深蓝色，不透明，核附近较淡染，无颗粒。",
                image_url: "http://public.kaoshu.cc/cell/55.png",
                image_urlt: "http://public.kaoshu.cc/cell/55.png",
                children: [
                  {
                    extend: false,
                    name: "幼浆细胞",
                    n: "胞体直径12～16μm，多呈椭圆形。胞核圆或椭圆形，占细胞1/2，核染色质较原始浆细胞粗糙紧密，开始聚集，染深紫红色，核仁消失。胞质量多，染深蓝色，不透明，近核处有淡染色区，有时可有空泡及少数天青胺蓝颗粒。",
                    image_url: "http://public.kaoshu.cc/cell/56.png",
                    image_urlt: "http://public.kaoshu.cc/cell/56.png",
                    children: [
                      {
                        extend: false,
                        name: "浆细胞",
                        x: "车轮状",
                        n: "胞体直径8～15μm，圆或椭圆形。胞核明显缩小，较圆，可占细胞1/3以下，偏于细胞一侧，核染色质浓密成块，常排列成车轮状，无核仁。胞质丰富，染蓝色或红蓝相混的蓝紫色，有泡沫感，核的外侧常有明显的淡染区，浆内常有小空泡，偶见少数天青胺蓝颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/57.png",
                        image_urlt: "http://public.kaoshu.cc/cell/57.png",
                      },
                      {
                        extend: false,
                        name: "浆细胞",
                        x: "车轮状",
                        n: "胞体直径8～15μm，圆或椭圆形。胞核明显缩小，较圆，可占细胞1/3以下，偏于细胞一侧，核染色质浓密成块，常排列成车轮状，无核仁。胞质丰富，染蓝色或红蓝相混的蓝紫色，有泡沫感，核的外侧常有明显的淡染区，浆内常有小空泡，偶见少数天青胺蓝颗粒。",
                        image_url: "http://public.kaoshu.cc/cell/58.png",
                        image_urlt: "http://public.kaoshu.cc/cell/58.png",
                      },
                    ],
                  },
                ],
              },
              {
                extend: false,
                name: "原巨核细胞",
                n: "胞体较大，直径15～30μm，圆形或不规则形。胞核较大，圆形，不规则，核染色质呈粗大网状，排列紧密，核仁2～3个。胞质量较少，不均匀，边缘不规则，染深蓝色，无颗粒，核周着色浅淡。",
                image_url: "http://public.kaoshu.cc/cell/43.png",
                image_urlt: "http://public.kaoshu.cc/cell/43.png",
                children: [
                  {
                    extend: false,
                    name: "幼巨核细胞",
                    n: "胞体明显增大，直径30～50μm，外形常不规则。胞核不规则，有重叠或扭转，核染色质呈粗颗粒状或小块状，排列紧密，核仁可有可无，胞质量增多，染蓝色或浅蓝色，近核处呈淡蓝色或浅粉红色，出现少量天青胺蓝颗粒。",
                    image_url: "http://public.kaoshu.cc/cell/44.png",
                    image_urlt: "http://public.kaoshu.cc/cell/44.png",
                    children: [
                      {
                        extend: false,
                        name: "颗粒型巨核细胞",
                        n: "胞体甚大，直径40～70μm，有时可达100μm，其形态不规则。胞核较大，形态不规则，核染色质较粗糙，排列紧密呈团块状，无核仁，胞质极丰富，染粉红色，夹杂有蓝色，质内含有大量细小的紫红色颗粒，常聚集成簇，但无血小板形成。",
                        image_url: "http://public.kaoshu.cc/cell/45.png",
                        image_urlt: "http://public.kaoshu.cc/cell/45.png",
                      },
                    ],
                    children: [
                      {
                        extend: false,
                        name: "血小板生成型巨核细胞",
                        n: "胞体巨大，直径40～70μm，有时可达100μm，胞核不规则，高度分叶状，核染色质呈团块状。胞质呈均匀粉红色，质内充满大小不等的紫红色颗粒或血小板。胞膜不清晰，多呈伪足状，其内侧及外侧常有血小板的堆集。",
                        image_url: "http://public.kaoshu.cc/cell/46.png",
                        image_urlt: "http://public.kaoshu.cc/cell/46.png",
                        children: [
                          {
                            name: "裸核型巨核细胞",
                            n: "产生血小板型巨核细胞的胞浆解体后，释放出大量血小板，仅剩一胞核，称之为裸核。",
                            image_url: "http://public.kaoshu.cc/cell/59.png",
                            image_urlt: "http://public.kaoshu.cc/cell/59.png",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

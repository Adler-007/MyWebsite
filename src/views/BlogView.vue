<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in articles" :key="article.id">
            <router-link
              :to="`/read/${article.slug}/${article.id}`"
              class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center"
            >
              <div class="w-full pr-4">
                <div
                  class="text-xs mb-1 text-slate-400 flex items-center italic"
                >
                  <div
                    class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"
                  ></div>
                  {{ article.date }}
                </div>
                <h1
                  class="text-sm md:text-md text-amber-200 font-bold mb-2 paraf"
                >
                  {{ article.title }}
                </h1>
                <div class="text-sm hidden md:block paraf">
                  {{ article.desc }}
                </div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img
                    :src="article.image"
                    class="rounded-lg md:rounded-xl"
                    alt=""
                  />
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div
            class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent"
          >
            Let's share experiences, stories, and knowledge together.
          </div>
          <div
            class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"
          ></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">Topics</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >NodeJS</span
              >
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer"
                >Technology</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "北京华琦远航国际咨询有限公司 | 前端开发工程师",
          desc: "在实习期间开发了赛事管理系统,此系统是为支撑学校羽毛球赛事而搭建的管理后台系统,项目中我负责后台管理系统前端开发,使用Vue3+Vite+ElementPlus+Vue-Router技术栈,与后端紧密协作,通过Apifox对接真实API接口,实现了赛事信息的增删改查(CRUD)等核心管理功能,确保前端界面与MySQL数据库及Redis缓存高效、准确地进行数据通信。系统成功保障了赛事顺利举办,其模块化设计也为后续扩展至其他赛事奠定了基础。",
          date: "2025-07-01 至 2025-09-27",
          slug: "beijing-consulting-front-end",
          image:
            "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
          id: 2,
          title: "北邮社会实践交流网站 | 项目负责人兼前端开发",
          desc: "本项目为校级创新项目,意在开发一个面向北邮学生的社会实践信息管理平台,我在项目中负责网站前端页面的开发以及项目的整体节奏的把控,已完成网站的前端页面的展示以及相关的交互功能。",
          date: "2024-09-01 至 2025-05-01",
          slug: "buaa-social-practice-platform",
          image:
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
          id: 3,
          title: "基于智能算法的物流中心选址优化 | 项目核心成员",
          desc: "本项目旨在通过多种智能算法以及基于建模+算法的综合评价模型来帮助确保货物能快速、准确地到达目的地,提高物流配送的及时性和可靠性;我在项目中负责主导文献综述环节,完成20+篇中英文论文的算法对比分析,提炼出多个优化策略,输出结项报告及可视化方案,获评学校A级项目。",
          date: "2023-09-01 至 2024-05-01",
          slug: "logistics-optimization-project",
          image:
            "https://pic.rmb.bdstatic.com/bjh/news/4278247a64799826ad4165b74408f649.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) {
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
  /* animation-delay: 1000ms; */
}
</style>

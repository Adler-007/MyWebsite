<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in currentArticles" :key="article.id">
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
            让我们分享一些有趣的故事、心得和经验吧~
          </div>
          <div
            class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"
          ></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">主题</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span
                @click="activeTab = 'internship'"
                :class="{
                  'bg-amber-200 bg-opacity-20 text-amber-200 border border-amber-200':
                    activeTab === 'internship',
                  'bg-[#1e1e1f] hover:bg-white/20 text-white':
                    activeTab !== 'internship',
                }"
                class="py-2 px-3 rounded-2xl text-xs cursor-pointer transition-all duration-200"
                >实习/项目</span
              >
              <span
                @click="activeTab = 'campus'"
                :class="{
                  'bg-amber-200 bg-opacity-20 text-amber-200 border border-amber-200':
                    activeTab === 'campus',
                  'bg-[#1e1e1f] hover:bg-white/20 text-white':
                    activeTab !== 'campus',
                }"
                class="py-2 px-3 rounded-2xl text-xs cursor-pointer transition-all duration-200"
                >校园经历</span
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
      activeTab: "internship", // 默认选中"实习/项目"
      internshipArticles: [
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
      campusArticles: [
        {
          id: 101,
          title: "校级部门宣传部 | 新媒体部负责人",
          desc: "独立运营部门公众号,撰写15篇原创推文,单篇最高阅读量2000+,带动粉丝增长400+;设计比赛奖状(PS),多次负责活动场地的拍摄,获得老师和同学的好评;志愿服务时常80+,获得过3次以上的志愿者奖状。",
          date: "2024-05-01 至 2026-05-31",
          slug: "buaa-student-union-media",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
          id: 102,
          title: "班级干部 | 文体委员",
          desc: "参与统筹策划多场院级活动,包括运动会、迎新晚会等,平均参与人数100+,活动满意度达92%;设计线上报名系统(Excel+问卷星),将报名效率提升40%,节省人工核对时间。",
          date: "2022-09-01 至 2026-05-31",
          slug: "campus-event-registration",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
          id: 103,
          title: "暑期社会实践 | 团队负责人",
          desc: "此项目以“寻脉中华传统 根植文化自信“为主题,旨在提升个人文化素养、增强文化自信,我在项目中负责团队管理、把控整体节奏、编写相应资料,项目获得了最佳报告奖。",
          date: "2023-06-01 至 2023-09-30",
          slug: "ecommerce-course-project",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80",
        },
      ],
    };
  },
  computed: {
    currentArticles() {
      return this.activeTab === "internship"
        ? this.internshipArticles
        : this.campusArticles;
    },
  },
};
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  line-clamp: 3;
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

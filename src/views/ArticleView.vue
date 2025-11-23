<template>
  <div
    class="modal-overlay fixed inset-0 z-[99] flex items-start justify-center pt-24 md:pt-28 pb-4 px-4 overflow-y-auto"
    @click.self="closeModal"
  >
    <div
      class="modal-content bg-white rounded-xl w-full md:w-3/5 max-w-4xl mb-8 relative shadow-2xl flex flex-col"
    >
      <!-- 关闭按钮 -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        aria-label="关闭"
      >
        <svg
          class="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div class="p-5 md:p-10 flex-1 overflow-y-auto">
        <div>
          <h1
            class="text-xl md:text-4xl text-black text-left font-bold leading-relaxed pr-10"
          >
            {{ title }}
          </h1>
          <div class="mt-3 text-left text-gray-800 text-sm">
            发布时间：<span>{{ date }}</span>
          </div>
          <div
            class="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2"
          ></div>
          <div>
            <div class="relative w-full" style="padding-top: 50%">
              <img
                :src="image"
                class="absolute top-0 left-0 rounded-lg w-full h-full object-cover"
                alt="Thumbnail"
              />
            </div>
          </div>
          <div
            class="text-left text-black mt-8 leading-relaxed text-base md:text-lg pb-4"
          >
            <p class="mb-4">{{ content }}</p>
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
      title: "",
      image: "",
      date: "",
      content: "",
      articles: [
        // 实习/项目
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
        // 校园经历
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
  mounted() {
    this.getDetails();
    // 阻止背景滚动
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    // 恢复背景滚动
    document.body.style.overflow = "";
  },
  methods: {
    getDetails() {
      const id = parseInt(this.$route.params.id);
      const article = this.articles.find((item) => item.id === id);
      if (article) {
        this.title = article.title;
        this.image = article.image;
        this.date = article.date;
        this.content = article.desc;
      } else {
        // 如果找不到文章，显示默认内容
        this.title = "文章未找到";
        this.content = "抱歉，找不到对应的文章内容。";
      }
    },
    closeModal() {
      // 返回上一页或返回到博客列表页
      this.$router.push("/blog");
    },
  },
};
</script>

<style scoped>
/* 遮罩层背景 */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

/* 弹窗内容 */
.modal-content {
  max-height: calc(100vh - 8rem);
  min-height: fit-content;
}

/* 内容区域滚动 */
.modal-content > div {
  max-height: calc(100vh - 8rem);
}

/* 滚动条样式 */
.modal-content > div::-webkit-scrollbar {
  width: 8px;
}

.modal-content > div::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.modal-content > div::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.modal-content > div::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .modal-overlay {
    padding-top: 4rem;
  }

  .modal-content {
    max-height: calc(100vh - 6rem);
    margin-bottom: 1rem;
  }

  .modal-content > div {
    max-height: calc(100vh - 6rem);
  }
}
</style>

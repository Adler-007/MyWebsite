<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "精通",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "精通",
        },
        {
          id: 3,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "精通",
        },
        {
          id: 4,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "熟练",
        },
        {
          id: 5,
          name: "Vite",
          imageUrl: require("@/assets/imgs/about/vite.png"),
          status: "熟练",
        },
        {
          id: 6,
          name: "Element Plus",
          imageUrl: require("@/assets/imgs/about/element-plus.png"),
          status: "精通",
        },
        {
          id: 7,
          name: "NodeJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
          status: "熟悉",
        },
        {
          id: 8,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "熟练",
        },
        {
          id: 9,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "精通",
        },
        {
          id: 10,
          name: "uni-app",
          imageUrl: require("@/assets/imgs/about/uni_app.png"),
          status: "熟悉",
        },
        {
          id: 11,
          name: "Python",
          imageUrl: require("@/assets/imgs/about/python.png"),
          status: "基础",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Git",
          imageUrl:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          status: "版本管理",
        },
        {
          id: 2,
          name: "GitHub",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          status: "Git 仓库管理",
        },
        {
          id: 3,
          name: "Gitee",
          imageUrl: require("@/assets/imgs/about/gitee.png"),
          status: "Gitee 仓库管理",
        },
        {
          id: 4,
          name: "NPM",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
          status: "包管理",
        },
        {
          id: 5,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "数据库",
        },
        {
          id: 6,
          name: "原型设计",
          imageUrl: require("@/assets/imgs/about/md.png"),
          status: "设计工具",
        },
        {
          id: 7,
          name: "WPS",
          imageUrl: require("@/assets/imgs/about/wps.png"),
          status: "办公软件",
        },
        {
          id: 8,
          name: "Xmind",
          imageUrl: require("@/assets/imgs/about/xmind.png"),
          status: "思维导图",
        },
        {
          id: 9,
          name: "Visio",
          imageUrl: require("@/assets/imgs/about/visio.png"),
          status: "绘图工具",
        },
        {
          id: 10,
          name: "新媒体设计",
          imageUrl: require("@/assets/imgs/about/gzh.png"),
          status: "微信公众号",
        },
        {
          id: 11,
          name: "PhotoShop",
          imageUrl: require("@/assets/imgs/about/ps.png"),
          status: "图片处理",
        },
        {
          id: 12,
          name: "剪映",
          imageUrl: require("@/assets/imgs/about/jy.png"),
          status: "视频剪辑",
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <div
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5"
    >
      <article data-page="about">
        <header>
          <div
            class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
          >
            About Me &nbsp;
            <div
              class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
          </div>
        </header>

        <section
          class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center"
        >
          <div class="flex justify-center">
            <img
              class="w-9/12 rounded-full mb-3 fadein-up"
              src="../assets/imgs/头像.jpeg"
              alt="Foto"
            />
          </div>
          <div class="md:w-7/12">
            <p class="mb-3 md:mb-7 fadein-left fadeins-1">
              &nbsp; &nbsp; &nbsp;
              您好！我是努尔艾力・买买提，就读于北京邮电大学电子商务专业
              2026年毕业生，专注于Web前端开发领域。
              在校期间，系统学习了电子商务网站开发、数据库系统、Python数据分析、PS课程、移动应用开发、计算机实习课、
              运筹学、电子商务物流管理等课程，为前端技术打下理论基础；通过一段实习和两段前端项目实战，熟练运用HTML、CSS、
              JavaScript等核心技术，掌握了VUE框架、Vite构建工具，实现了从需求分析到页面交付的全流程实践。
            </p>
            <p class="mb-3 fadein-left fadeins-2">
              &nbsp; &nbsp; &nbsp; 此外，新媒体运营（独立运营公众号，撰写 20+
              篇原创推文，粉丝增长1000+）
              和校园活动策划（设计线上报名系统，效率提升40%）的经历，锤炼了我的团队协作、创新思维与问题解决能力。
              我在大学期间，通过了英语四六级考试，两次获得了校级三等奖学金，取得了全国计算机等级考试二级证书（Web程序设计）、
              在北京邮电大学2023年暑假社会实践中被评为先进个人以及斩获最佳报告奖，除此之外，我还获得了知识竞赛荣誉证书、
              勤工助学先进个人等荣誉，并且参与了全国大学生职业规划大赛。
            </p>
          </div>
        </section>
      </article>
    </div>

    <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
      <article data-page="about">
        <header>
          <div
            class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
          >
            <div
              class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
            &nbsp; Skills
          </div>
        </header>
        <section>
          <div>
            <ul
              class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5"
            >
              <li class="mr-2">
                <button
                  class="inline-block px-4 py-3 rounded-lg hover:text-white"
                  :class="{
                    'text-amber-200 bg-amber-200 bg-opacity-10':
                      activeTab === 1,
                  }"
                  @click="activeTab = 1"
                >
                  技术栈
                </button>
              </li>
              <li class="mr-2">
                <button
                  class="inline-block px-4 py-3 rounded-lg hover:text-white"
                  :class="{
                    'text-amber-200 bg-amber-200 bg-opacity-10':
                      activeTab === 2,
                  }"
                  @click="activeTab = 2"
                >
                  工具链
                </button>
              </li>
            </ul>
          </div>
          <div v-show="activeTab === 1">
            <div
              class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
            >
              <div v-for="item in tech" :key="item.id">
                <div
                  class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                  >
                    <img
                      alt="HTML"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                      :src="item.imageUrl"
                      style="color: transparent"
                    />
                  </div>
                  <div
                    class="flex items-center text-sm md:text-base lg:text-lg"
                  >
                    <div
                      class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                    >
                      {{ item.name }}
                    </div>
                    <div
                      class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                    >
                      {{ item.status }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeTab === 2">
            <div
              class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
            >
              <div v-for="item in tools" :key="item.id">
                <div
                  class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                  >
                    <img
                      alt="HTML"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                      :src="item.imageUrl"
                      style="color: transparent"
                    />
                  </div>
                  <div
                    class="flex items-center text-sm md:text-base lg:text-lg"
                  >
                    <div
                      class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                    >
                      {{ item.name }}
                    </div>
                    <div
                      class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                    >
                      {{ item.status }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>

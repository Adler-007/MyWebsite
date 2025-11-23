# Personal Website

一个基于 Vue 3 构建的现代化个人网站，展示个人简介、技能、作品集和经历。

## ✨ 特性

- 🎨 **现代化设计** - 采用深色主题，简洁美观的 UI 设计
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **快速加载** - 纯静态前端，无需后端支持
- 🎯 **单页应用** - 使用 Vue Router 实现流畅的页面切换
- 🎭 **动画效果** - 丰富的页面过渡和交互动画
- 📝 **内容管理** - 所有内容均为静态数据，易于维护和更新

## 🛠️ 技术栈

- **框架**: Vue 3.2.13
- **路由**: Vue Router 4.0.3
- **样式**: Tailwind CSS 3.3.2
- **构建工具**: Vue CLI 5.0
- **代码规范**: ESLint

## 📁 项目结构

```
personal-website/
├── public/                 # 静态资源文件
│   ├── index.html         # HTML 模板
│   └── img/               # 项目图片
├── src/
│   ├── assets/            # 资源文件
│   │   ├── imgs/         # 图片资源
│   │   └── tailwind.css   # Tailwind 样式
│   ├── components/        # 组件
│   ├── router/            # 路由配置
│   ├── views/             # 页面视图
│   │   ├── HomeView.vue      # 首页
│   │   ├── AboutView.vue     # 关于我
│   │   ├── PortfolioView.vue # 作品集
│   │   ├── BlogView.vue      # 个人经历
│   │   └── ArticleView.vue   # 文章详情
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 14.x
- npm >= 6.x

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器，支持热重载：

```bash
npm run dev
```

访问 [http://localhost:8080](http://localhost:8080) 查看网站。

### 生产构建

构建生产版本：

```bash
npm run build
```

构建文件将输出到 `dist/` 目录。

### 代码检查

运行 ESLint 检查代码：

```bash
npm run lint
```

## 📄 页面说明

### 首页 (Home)

- 个人介绍
- 动态打字效果
- 头像展示

### 关于 (About)

- 个人简介
- 技能展示（技术栈和工具链）
- 技能等级标识

### 作品集 (Portfolio)

- 项目展示
- 项目描述和技术栈
- 项目链接

### 个人经历 (Blog)

- 实习/项目经历
- 校园经历
- 标签筛选功能
- 详情弹窗展示

## 🎨 自定义配置

### 修改个人信息

编辑对应的 Vue 组件文件：

- `src/views/HomeView.vue` - 首页信息
- `src/views/AboutView.vue` - 关于页面和技能
- `src/views/BlogView.vue` - 个人经历内容
- `src/views/PortfolioView.vue` - 作品集内容

### 修改样式

项目使用 Tailwind CSS，可以直接在组件中使用 Tailwind 类名，或修改 `tailwind.config.js` 进行全局配置。

### 修改路由

编辑 `src/router/index.js` 文件来添加或修改路由。

## 📦 部署

### 静态托管

构建完成后，将 `dist/` 目录部署到任何静态托管服务：

- **Netlify**: 拖拽 `dist/` 文件夹到 Netlify
- **Vercel**: 连接 GitHub 仓库，自动部署
- **GitHub Pages**: 将 `dist/` 内容推送到 `gh-pages` 分支
- **Nginx**: 将 `dist/` 内容复制到 Nginx 的网站目录

### 构建配置

如需修改构建配置，请编辑 `vue.config.js` 文件。

---

Made with ❤️ using Vue 3

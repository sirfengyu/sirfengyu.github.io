(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{582:function(s,a,n){"use strict";n.r(a);var e=n(10),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress搭建技术博客"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建技术博客"}},[s._v("#")]),s._v(" vuepress搭建技术博客")]),s._v(" "),n("h2",{attrs:{id:"_1-github操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-github操作"}},[s._v("#")]),s._v(" 1. github操作")]),s._v(" "),n("p",[s._v("比如我的github用户名是sirfengyu，建立"),n("code",[s._v("sirfengyu\\sirfengyu.github.io")]),s._v("的仓库。\n建立"),n("code",[s._v("sirfengyu/blog")]),s._v("仓库")]),s._v(" "),n("p",[s._v("github pages参考：")]),s._v(" "),n("blockquote",[n("p",[s._v("https://help.github.com/en/categories/github-pages-basics")])]),s._v(" "),n("h2",{attrs:{id:"_2-vuepress初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-vuepress初始化"}},[s._v("#")]),s._v(" 2. vuepress初始化")]),s._v(" "),n("h3",{attrs:{id:"_2-1-下面初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下面初始化"}},[s._v("#")]),s._v(" 2.1. 下面初始化")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 安装\n# 全局安装vuepress\nyarn global add vuepress\n\n# 将 github 新创建的仓库克隆到本地\ngit clone https://github.com/sirfengyu/blog.git\n\n# 进入项目\ncd blog\n\n# yarn 初始化, 按照提示回车\nyarn init\n\n# 安装 vuepress\nyarn add vuepress -D\n\n# 安装 gh-pages\nyarn add gh-pages -D\n\n# 创建一个 docs 目录\nmkdir docs\n\n# 创建一个 markdown 文件\necho '# Hello VuePress' > docs/README.md\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"_2-2-修改打包脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改打包脚本"}},[s._v("#")]),s._v(" 2.2. 修改打包脚本")]),s._v(" "),n("p",[s._v("然后，给 "),n("code",[s._v("package.json")]),s._v(" 添加一些 "),n("code",[s._v("scripts")]),s._v(" 脚本：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs",\n    "docs:deploy": "yarn build && gh-pages -d docs/.vuepress/dist"\n  },\n  "resolutions": {\n    "webpack-dev-middleware": "3.6.0"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_2-3-运行本地开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-运行本地开发环境"}},[s._v("#")]),s._v(" 2.3. 运行本地开发环境")]),s._v(" "),n("p",[s._v("运行 "),n("code",[s._v("vurepress")]),s._v(" 的本地开发环境")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("访问 "),n("code",[s._v("localhost:8080")]),s._v(" ， 已经成功开启")]),s._v(" "),n("h2",{attrs:{id:"_3-基础配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-基础配置"}},[s._v("#")]),s._v(" 3. 基础配置")]),s._v(" "),n("h3",{attrs:{id:"_3-1-生成静态资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-生成静态资源"}},[s._v("#")]),s._v(" 3.1. 生成静态资源")]),s._v(" "),n("p",[s._v("执行下面的命令，生成静态资源")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("默认情况下，构建的文件会位于 "),n("strong",[s._v("docs/.vuepress/dist")]),s._v(" 中，该文件可以通过 "),n("strong",[s._v("docs/.vuepress/config.js")]),s._v(" 中的 "),n("code",[s._v("dest")]),s._v(" 字段进行配置。")]),s._v(" "),n("h3",{attrs:{id:"_3-2-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-配置"}},[s._v("#")]),s._v(" 3.2. 配置")]),s._v(" "),n("p",[s._v("创建 "),n("strong",[s._v("docs/.vuepress/config.js")]),s._v("， 并进行简单配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var config = {\n\n  // 静态网站部署的目录\n  base: '/readme-blog/',\n\n  // 网站标题\n  title: 'fy \\' 博客',\n\n  // <meta name=\"description\" content=\"...\">\n  description: '种一棵树最好的时间是十年前，其次是现在', \n\n  markdown: {\n    \n    // 显示代码行号\n    lineNumbers: true\n  }\n}\n\nmodule.exports = config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"_4-博客首页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-博客首页"}},[s._v("#")]),s._v(" 4. 博客首页")]),s._v(" "),n("h3",{attrs:{id:"_4-1-公共文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-公共文件"}},[s._v("#")]),s._v(" 4.1. 公共文件")]),s._v(" "),n("p",[s._v("创建 "),n("strong",[s._v("docs/.vuepress/public")]),s._v(" 用于存放公共文件，包含图片资源")]),s._v(" "),n("p",[s._v("hero.png\n"),n("img",{attrs:{src:"/hero.png",alt:"hero.png"}})]),s._v(" "),n("p",[s._v("logo.png\n"),n("img",{attrs:{src:"/logo.png",alt:"logo.png"}})]),s._v(" "),n("h3",{attrs:{id:"_4-2-简单的首页编写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-简单的首页编写"}},[s._v("#")]),s._v(" 4.2. 简单的首页编写")]),s._v(" "),n("p",[s._v("将 "),n("strong",[s._v("docs/README.md")]),s._v("设置为首页， 修改代码为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\nhome: true\nheroImage: /hero.jpg\nfooter: MIT Licensed | Copyright © 2018 FengYu\n---\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_4-3-设置网站-ico-图标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-设置网站-ico-图标"}},[s._v("#")]),s._v(" 4.3. 设置网站 ico 图标")]),s._v(" "),n("p",[s._v("配置网站的 "),n("strong",[s._v("ico")]),s._v(" 图标， 修改 "),n("strong",[s._v(".vuepress/config.js")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const config = {\n  head: [\n    ['link', { rel: 'icon', href: '/logo.png' }]\n  ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_5-导航栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-导航栏"}},[s._v("#")]),s._v(" 5. 导航栏")]),s._v(" "),n("h3",{attrs:{id:"_5-1-配置导航栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-配置导航栏"}},[s._v("#")]),s._v(" 5.1. 配置导航栏")]),s._v(" "),n("p",[s._v("使用 "),n("strong",[s._v("vuepress")]),s._v(" 的默认主题配置导航栏 "),n("strong",[s._v(".vuepress/config.js")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const nav = [\n  {\n    text: '前端栈',\n    items: [\n      { text: 'Vue', link: '/WEB/Vue/vuepress-blog' },\n      { text: 'React', link: '/WEB/React/react-router' }\n    ]\n  }\n]\n\nconst config = {\n  themeConfig: {\n\n    // 项目的 github 地址\n    repo: 'zhb333/readme-blog',\n\n    // github 地址的链接名\n    repoLabel: '代码',\n\n    // 配置导航栏\n    nav,\n  },\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"_5-2-创建有效的导航资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-创建有效的导航资源"}},[s._v("#")]),s._v(" 5.2. 创建有效的导航资源")]),s._v(" "),n("p",[s._v("为了使得导航栏的链接点击有效， 我们创建两个文件：")]),s._v(" "),n("p",[n("strong",[s._v("docs/WEB/Vue/vuepress-blog.md")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 使用`vuepress`搭建静态博客\n\n## vuepress初始化\n\n## 基础配置\n\n## 博客首页\n\n## 导航栏\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("strong",[s._v("docs/WEB/React/react-router.md")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# react-router\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_6-侧边栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-侧边栏"}},[s._v("#")]),s._v(" 6. 侧边栏")]),s._v(" "),n("h3",{attrs:{id:"_6-1-侧边栏配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-侧边栏配置"}},[s._v("#")]),s._v(" 6.1. 侧边栏配置")]),s._v(" "),n("p",[s._v("使用 "),n("strong",[s._v("vuepress")]),s._v(" 的默认主题配置侧边栏 "),n("strong",[s._v(".vuepress/config.js")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const sidebar = {\n  '/WEB/': [\n    {\n      title: 'Vue',\n      children: [\n        'Vue/vuepress-blog'\n      ]\n    },\n\n    {\n      title: 'React',\n      children: [\n        'React/react-router'\n      ]\n    }\n  ]\n}\n\nconst nav = [\n  {\n    text: '前端栈',\n    items: [\n      { text: 'Vue', link: '/WEB/' + sidebar['/WEB/'][0]['children'][0] },\n      { text: 'React', link: '/WEB/' + sidebar['/WEB/'][1]['children'][0] }\n    ]\n  }\n]\n\nvar config = {\n  themeConfig: {\n\n    // 当前 markdown 的 github 代码链接\n    editLinks: true,\n\n    // 链接显示的文本\n    editLinkText: '查看原文|编辑此页',\n\n    nav,\n    sidebar,\n  },\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("h3",{attrs:{id:"_6-2-侧边栏效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-侧边栏效果"}},[s._v("#")]),s._v(" 6.2. 侧边栏效果")]),s._v(" "),n("p",[s._v("访问： "),n("strong",[s._v("http://localhost:8080/blog/")]),s._v("， 可以看到侧边栏已经生成")]),s._v(" "),n("h2",{attrs:{id:"_7-将静态博客网站部署到外网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-将静态博客网站部署到外网"}},[s._v("#")]),s._v(" 7. 将静态博客网站部署到外网")]),s._v(" "),n("p",[s._v("使用 "),n("strong",[s._v("gh-pages")]),s._v(" 进行项目部署")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn deploy\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("过几分钟后，访问 "),n("strong",[s._v("sirfengyu.github.io/blog/")]),s._v("， 便可以看到在外网成功部署的静态博客")]),s._v(" "),n("h2",{attrs:{id:"_8-评论功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-评论功能"}},[s._v("#")]),s._v(" 8. 评论功能")]),s._v(" "),n("p",[s._v("我们使用 "),n("strong",[s._v("valine")]),s._v(" 来实现评论功能：")]),s._v(" "),n("blockquote",[n("p",[s._v("Valine - 一款快速、简洁且高效的无后端评论系统。")])]),s._v(" "),n("p",[n("strong",[s._v("点击进入 "),n("a",{attrs:{href:"https://leancloud.cn/dashboard/applist.html#/apps",target:"_blank",rel:"noopener noreferrer"}},[s._v("Valine官网"),n("OutboundLink")],1),s._v(" ，需要先注册才能食用")])]),s._v(" "),n("h3",{attrs:{id:"_8-1-安装-valine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-安装-valine"}},[s._v("#")]),s._v(" 8.1. 安装 Valine")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# Install leancloud's js-sdk\nyarnadd leancloud-storage --save\n\n# Install valine\nyarn add valine --save\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_8-2-注册-vuepress-全局组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-注册-vuepress-全局组件"}},[s._v("#")]),s._v(" 8.2. 注册 vuepress 全局组件")]),s._v(" "),n("p",[s._v("创建 "),n("strong",[s._v(".vuepress/components/Valine.vue")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <div id=\"vcomments\"></div>\n</template>\n\n<script>\nexport default {\n  name: 'Valine',\n  mounted: function(){\n    // require window \n    const Valine = require('valine');\n    if (typeof window !== 'undefined') {\n      this.window = window\n      window.AV = require('leancloud-storage')\n      \n    }\n     \n    new Valine({\n      el: '#vcomments' ,\n      appId: '',// your appId\n      appKey: '', // your appKey\n      notify:false, \n      verify:false, \n      avatar:'mm', \n      placeholder: 'just go go' \n    });\n  },\n}\n<\/script>\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h3",{attrs:{id:"_8-3-使用-valine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-使用-valine"}},[s._v("#")]),s._v(" 8.3. 使用 Valine")]),s._v(" "),n("p",[s._v("只需要在 "),n("strong",[s._v("markdown")]),s._v(" 中调用即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<Valine></Valine>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_9-参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-参考"}},[s._v("#")]),s._v(" 9. 参考")]),s._v(" "),n("blockquote",[n("p",[s._v("https://v1.vuepress.vuejs.org/zh/guide/\nhttps://juejin.im/post/5bf047796fb9a04a06047409")])]),s._v(" "),n("h2",{attrs:{id:"_10-评论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-评论"}},[s._v("#")]),s._v(" 10. 评论")]),s._v(" "),n("p",[n("valine")],1)])}),[],!1,null,null,null);a.default=t.exports}}]);
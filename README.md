# 个人导航网站

这是一个简洁美观的个人导航网站，提供常用网站快速访问和搜索功能。网站为纯静态设计，无需登录，无需服务器支持。本项目风格借鉴了 [mTab书签导航](https://github.com/tsxcw/mtab)，并进行了简化设计，实现了纯静态部署。

## 功能特点

- 美观的山景背景
- 实时显示时间和日期（包括农历）
- Google搜索功能
- 分类网站快捷方式
- 底部Dock栏
- 响应式设计，适配不同设备
- 使用Font Awesome图标库，减少HTTP请求

## 部署方法

### 本地使用

1. 将本项目克隆或下载到本地
2. 打开 `index.html` 文件即可使用
3. 可根据个人需求修改网站链接和图标

### 通过GitHub Pages部署（永久免费）

1. Fork 本仓库到你的GitHub账号
2. 进入你Fork后的仓库设置(Settings)
3. 找到Pages设置选项
4. 在Source部分选择main分支(或你的主分支)
5. 保存设置后，GitHub将自动部署你的网站
6. 几分钟后，你可以通过 `https://[你的用户名].github.io/[仓库名]` 访问你的导航网站

这种方式可以让你的导航网站永久免费托管，同时可以通过GitHub进行更新和管理。

### 通过Cloudflare Pages部署（永久免费，更快速）

Cloudflare Pages提供了高性能、全球CDN分发的静态网站托管服务，完全免费且无使用限制。

1. 注册/登录 [Cloudflare](https://dash.cloudflare.com/) 账号
2. 在侧边栏导航至 "Pages"
3. 点击 "创建项目" 或 "Connect to Git"
4. 选择 GitHub 或 GitLab 作为代码源，并授权Cloudflare访问
5. 选择包含本导航网站代码的仓库
6. 配置构建设置：
   - 构建命令：留空（因为是纯静态网站）
   - 构建输出目录：`/` 或留空（因为所有文件都在根目录）
   - 根目录：留空（使用默认值）
7. 点击 "保存并部署"
8. 等待部署完成后，Cloudflare会提供一个 `*.pages.dev` 域名
9. 您还可以在项目设置中自定义域名，绑定自己的域名（可选）

Cloudflare Pages的优势：
- 全球CDN，访问速度更快
- 自动HTTPS
- 无限带宽和请求数
- 支持自定义域名
- 每次Git提交自动部署

## 自定义指南

### 修改导航分类

导航分类在左侧栏中定义，并与主页面的内容区域相关联。要修改这些分类，需要同时调整HTML和JavaScript文件：

1. **修改HTML中的导航分类**

   在 `index.html` 文件中找到以下部分：
   ```html
   <div class="nav-items">
     <div class="nav-item active" data-category="home-category">
       <i class="fas fa-home"></i>
       <span>首页</span>
     </div>
     <!-- 其他导航项 -->
   </div>
   ```

   要添加新的导航分类，按照上述格式添加新的 `nav-item` 元素。例如：
   ```html
   <div class="nav-item" data-category="new-category">
     <i class="fas fa-chart-line"></i>
     <span>新分类</span>
   </div>
   ```

   注意 `data-category` 属性需要与内容区域中对应的分类ID匹配。

2. **添加对应的内容区域**

   在 `index.html` 文件中找到网站内容区域：
   ```html
   <div class="website-container">
     <div class="website-category active-category" id="home-category">
       <!-- 首页内容 -->
     </div>
     <!-- 其他分类 -->
   </div>
   ```

   添加新的内容区域，使用与导航分类中 `data-category` 相同的ID：
   ```html
   <div class="website-category" id="new-category">
     <div class="category-title">新分类</div>
     <div class="website-row">
       <!-- 此分类下的网站链接 -->
     </div>
   </div>
   ```

### 增加或修改网站链接

要增加或修改网站链接，需要在HTML中添加网站条目，并在JavaScript中设置对应的URL：

1. **在HTML中添加网站条目**

   在相应的分类内容区域中，找到或添加 `website-row` 元素，然后在其中添加新的网站条目：
   ```html
   <div class="website-item">
     <div class="website-icon blue">
       <i class="fab fa-github"></i>
     </div>
     <div class="website-name">GitHub</div>
   </div>
   ```

   网站图标颜色可以通过以下类来设置：`blue`, `green`, `red`, `orange`, `purple`, `pink`等。

2. **在JavaScript中设置网站URL**

   在 `js/script.js` 文件中找到 `setupWebsiteItems` 函数，并在其中的switch语句中添加新网站的URL映射：
   ```javascript
   switch(siteName) {
     case 'GitHub':
       url = 'https://github.com';
       break;
     // 添加新网站
     case '新网站名称':
       url = 'https://新网站URL';
       break;
   }
   ```

### 修改Dock栏图标

Dock栏位于页面底部，可以添加或修改其中的快捷图标：

1. **在HTML中修改Dock图标**

   在 `index.html` 文件中找到 `dock` 部分：
   ```html
   <div class="dock">
     <div class="dock-item">
       <i class="fas fa-robot"></i>
       <span class="sr-only">AI</span>
     </div>
     <!-- 其他dock项 -->
   </div>
   ```

   添加新的dock项，选择合适的Font Awesome图标：
   ```html
   <div class="dock-item">
     <i class="fas fa-code"></i>
     <span class="sr-only">编程</span>
   </div>
   ```

2. **在JavaScript中设置Dock图标URL**

   在 `js/script.js` 文件中找到 `setupDockItems` 函数，并在其中的switch语句中添加新图标的URL映射：
   ```javascript
   switch(siteName) {
     case '编程':
       url = 'https://stackoverflow.com';
       break;
     // 添加其他映射
   }
   ```

## 图标资源

本项目使用Font Awesome 6图标库，无需下载额外的图片资源。
只需确保有互联网连接，图标将自动从CDN加载。

仅需要添加以下背景图片：
- `img/mountain.jpg` - 背景山脉图片（可选，默认使用渐变色背景）

### 如何添加新图标

1. 访问 [Font Awesome 官网](https://fontawesome.com/icons) 查找所需图标
2. 在HTML中添加合适的图标类，例如 `<i class="fas fa-home"></i>`
3. 可以在CSS中自定义图标颜色和大小

### 常用Font Awesome图标参考

- 社交媒体: `fa-twitter`, `fa-facebook`, `fa-instagram`, `fa-youtube`, `fa-linkedin`, `fa-github`
- 工具类: `fa-tools`, `fa-code`, `fa-terminal`, `fa-database`, `fa-cloud`
- 购物类: `fa-shopping-cart`, `fa-store`, `fa-credit-card`
- 通用: `fa-home`, `fa-user`, `fa-cog`, `fa-search`, `fa-envelope`

## 样式定制

如果你想进一步定制网站的样式，可以修改以下CSS文件：

- `css/style.css` - 主要样式文件，控制整体布局和颜色方案
- `css/fallback.css` - 图标相关样式

常见自定义操作：

1. **修改背景颜色或图片**
   ```css
   body {
     background: linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d);
     /* 或使用图片背景 */
     /* background-image: url('../img/your-background.jpg'); */
   }
   ```

2. **修改主题颜色**
   ```css
   :root {
     --primary-color: #3a86ff;
     --secondary-color: #ff006e;
     --accent-color: #ffbe0b;
   }
   ```

## 致谢

- 感谢 [mTab书签导航](https://github.com/tsxcw/mtab) 项目的设计灵感
- 感谢 [Font Awesome](https://fontawesome.com/) 提供的优质图标库

## 注意事项

- 本项目为纯静态网站，无需服务器支持
- 为获得最佳显示效果，请使用现代浏览器访问
- 图标依赖于Font Awesome CDN，离线环境下图标可能无法显示 
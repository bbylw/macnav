# 个人导航网站

一个美观实用的个人网站导航页面，使用HTML、CSS和JavaScript构建。

## 特点

- **多彩图标**：每个链接都有美观的彩色图标，支持Font Awesome图标库
- **分类导航**：将网站链接按6个不同类别组织，便于查找
- **响应式设计**：适配不同屏幕尺寸，包括桌面和移动设备
- **动态时间显示**：显示当前时间和日期
- **简洁搜索框**：集成搜索功能
- **悬停动画**：链接悬停时的美观动效
- **深色主题**：默认采用深色主题，护眼且美观

## 导航分类

该导航页面只包含以下6个主要分类：

1. **Ai搜索**：各类AI搜索工具和人工智能服务，如Google、Bing、ChatGPT等
2. **社交媒体**：社交平台和媒体网站，如Facebook、Twitter、Instagram等
3. **实用工具**：各类网络工具，如Google翻译、短链接、网速测试等
4. **科技资讯**：科技新闻和资讯网站，如TechCrunch、Wired、The Verge等
5. **云存储**：各类云存储和云服务平台，如Google Drive、Dropbox、OneDrive等
6. **电子邮箱**：常用邮箱服务，如Gmail、Outlook、QQ邮箱等

## 使用方法

1. 克隆或下载此仓库到本地
2. 双击打开`index.html`文件即可在浏览器中使用
3. 也可部署到网络服务器上作为个人导航页使用

## 样式定制

- 所有样式都使用CSS定义，可以在`css/style.css`和`css/fallback.css`文件中修改
- 图标样式使用内联CSS定义，方便修改和扩展
- 可以修改配色方案、布局和动画效果

## 添加或修改链接

如需添加新链接或修改现有链接，只需编辑`index.html`文件中对应分类的HTML代码：

```html
<a href="链接地址" target="_blank" class="colorful-link">
  <div class="colorful-icon icon-blue">
    <i class="fas fa-icon-name"></i>
  </div>
  <div class="colorful-name">网站名称</div>
</a>
```

图标颜色类可以选择以下几种：
- `icon-blue`: 蓝色背景
- `icon-red`: 红色背景
- `icon-green`: 绿色背景
- `icon-orange`: 橙色背景
- `icon-purple`: 紫色背景
- `icon-pink`: 粉色背景
- `icon-dark`: 深色背景
- `icon-multi`: 多彩渐变背景

## 图标库

该项目使用Font Awesome 6图标库，可以在此选择图标：
[https://fontawesome.com/icons](https://fontawesome.com/icons)

## 注意事项

- 项目经过精简，仅保留6个必要分类
- 所有链接都使用colorful-link样式保持一致性
- 确保使用有效的Font Awesome图标类名

## 许可证

MIT License 
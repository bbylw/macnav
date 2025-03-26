// 更新时间函数
function updateTime() {
    const now = new Date();
    
    // 更新时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // 更新日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    // 获取星期几
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[now.getDay()];
    
    // 这里简化处理农历，实际需要引入专门的农历转换库
    // 这里只是模拟显示
    const lunarInfo = getLunarDate(now);
    
    document.getElementById('date').textContent = `${month}月${day}日 星期${weekday} ${lunarInfo}`;
}

// 简化的农历信息获取函数 (实际应用中需要更复杂的算法)
function getLunarDate(date) {
    // 这只是一个示例，实际应用需要真正的农历转换算法
    const lunarMonths = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                      '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                      '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    
    // 简化处理，仅作示例
    const month = date.getMonth();
    const day = date.getDate() % 30;
    const year = date.getFullYear() % 10;
    const yearBranch = date.getFullYear() % 12;
    
    return `${lunarMonths[month]}月${lunarDays[day-1]} ${stems[year]}${branches[yearBranch]}`;
}

// 搜索功能
function setupSearch() {
    const searchBox = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-button');
    
    // 搜索按钮点击事件
    searchButton.addEventListener('click', () => {
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
        }
    });
    
    // 回车键搜索
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchBox.value.trim();
            if (searchTerm) {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
            }
        }
    });
}

// 网站项点击处理
function setupWebsiteItems() {
    const websiteItems = document.querySelectorAll('.website-item');
    
    websiteItems.forEach(item => {
        item.addEventListener('click', () => {
            const siteName = item.querySelector('.website-name').textContent;
            let url = '#';
            
            // 根据网站名确定URL
            switch(siteName) {
                case '百度':
                    url = 'https://www.baidu.com';
                    break;
                case '蓝易云':
                    url = 'https://www.aliyun.com';
                    break;
                case '即时设计':
                    url = 'https://js.design';
                    break;
                case '码云Gitee':
                    url = 'https://gitee.com';
                    break;
                case 'GitHub':
                    url = 'https://github.com';
                    break;
                case 'WebTerm':
                    url = 'https://webterm.dev';
                    break;
                case '服务器':
                    url = 'https://console.cloud.tencent.com';
                    break;
                default:
                    url = 'https://www.baidu.com';
            }
            
            window.open(url, '_blank');
        });
    });
}

// Dock项点击处理
function setupDockItems() {
    const dockItems = document.querySelectorAll('.dock-item');
    
    dockItems.forEach(item => {
        item.addEventListener('click', () => {
            const siteName = item.querySelector('.sr-only')?.textContent || '';
            let url = '#';
            
            // 根据网站名确定URL
            switch(siteName) {
                case '百度':
                    url = 'https://www.baidu.com';
                    break;
                case 'AI':
                    url = 'https://chat.openai.com';
                    break;
                case '阿里云':
                    url = 'https://www.aliyun.com';
                    break;
                case '华为':
                    url = 'https://www.huawei.com';
                    break;
                case 'GitHub':
                    url = 'https://github.com';
                    break;
                case '微博':
                    url = 'https://weibo.com';
                    break;
                case '哔哩哔哩':
                    url = 'https://www.bilibili.com';
                    break;
                case '知乎':
                    url = 'https://www.zhihu.com';
                    break;
                case 'CSDN':
                    url = 'https://www.csdn.net';
                    break;
                case '工具':
                    // 显示工具菜单
                    alert('工具功能开发中...');
                    return;
                case '掘金':
                    url = 'https://juejin.cn';
                    break;
                case '抖音':
                    url = 'https://www.douyin.com';
                    break;
                case '京东':
                    url = 'https://www.jd.com';
                    break;
                case '淘宝':
                    url = 'https://www.taobao.com';
                    break;
                default:
                    url = 'https://www.google.com';
            }
            
            window.open(url, '_blank');
        });
    });
}

// 导航栏项点击处理
function setupNavItems() {
    const navItems = document.querySelectorAll('.nav-item');
    const websiteCategories = document.querySelectorAll('.website-category');
    
    // 定义分类id映射
    const categoryMap = {
        '首页': 'home-category',
        '娱乐影音': 'entertainment-category',
        '工具开发': 'dev-category',
        '购物消费': 'shopping-category',
        '学习教育': 'education-category',
        '新闻资讯': 'news-category',
        '游戏娱乐': 'gaming-category',
        '云服务': 'cloud-category',
        '旅行出行': 'travel-category',
        '健康医疗': 'health-category'
    };
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // 添加active类到当前点击的项
            this.classList.add('active');
            
            // 获取当前分类名称
            const categoryName = this.querySelector('span').textContent;
            
            // 隐藏所有分类
            websiteCategories.forEach(category => {
                category.classList.remove('active-category');
            });
            
            // 显示对应的分类
            const categoryId = categoryMap[categoryName];
            if (categoryId) {
                const targetCategory = document.getElementById(categoryId);
                if (targetCategory) {
                    targetCategory.classList.add('active-category');
                }
            }
            
            // 添加分类切换动画
            const targetCategory = document.getElementById(categoryId);
            if (targetCategory) {
                targetCategory.style.opacity = 0;
                targetCategory.classList.add('active-category');
                
                // 渐入动画
                setTimeout(() => {
                    targetCategory.style.transition = 'opacity 0.3s ease';
                    targetCategory.style.opacity = 1;
                }, 50);
            }
        });
    });
}

// 背景粒子效果 (可选)
function setupParticles() {
    // 如果需要，可以使用库如particles.js实现背景粒子效果
    // 这里是一个简单的实现
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // 简单粒子系统
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // 创建粒子
    const particleCount = 50;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // 动画循环
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 当DOM加载完毕后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始更新时间
    updateTime();
    
    // 每秒更新时间
    setInterval(updateTime, 1000);
    
    // 设置交互功能
    setupSearch();
    setupWebsiteItems();
    setupDockItems();
    setupNavItems();
    
    // 可选：启用背景粒子效果
    // setupParticles();
}); 
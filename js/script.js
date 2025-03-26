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
                case 'Google':
                    url = 'https://www.google.com';
                    break;
                case 'Bing':
                    url = 'https://www.bing.com';
                    break;
                case 'openrouter':
                    url = 'https://openrouter.ai/';
                    break;
                case 'websim':
                    url = 'https://websim.ai/';
                    break;
                case 'Facebook':
                    url = 'https://www.facebook.com';
                    break;
                case 'Twitter':
                    url = 'https://twitter.com';
                    break;
                case 'Instagram':
                    url = 'https://www.instagram.com';
                    break;
                case 'YouTube':
                    url = 'https://www.youtube.com';
                    break;
                case 'TikTok':
                    url = 'https://www.tiktok.com';
                    break;
                case 'GitHub':
                    url = 'https://github.com';
                    break;
                case 'Pinterest':
                    url = 'https://www.pinterest.com';
                    break;
                case 'Stack Overflow':
                    url = 'https://stackoverflow.com';
                    break;
                case 'Netflix':
                    url = 'https://www.netflix.com';
                    break;
                case 'Spotify':
                    url = 'https://www.spotify.com';
                    break;
                case '哔哩哔哩':
                    url = 'https://www.bilibili.com';
                    break;
                case 'IMDb':
                    url = 'https://www.imdb.com';
                    break;
                case 'Hulu':
                    url = 'https://www.hulu.com';
                    break;
                case 'Disney+':
                    url = 'https://www.disneyplus.com';
                    break;
                case 'SoundCloud':
                    url = 'https://soundcloud.com';
                    break;
                case 'Amazon':
                    url = 'https://www.amazon.com';
                    break;
                case '淘宝':
                    url = 'https://www.taobao.com';
                    break;
                case '京东':
                    url = 'https://www.jd.com';
                    break;
                case 'Shopify':
                    url = 'https://www.shopify.com';
                    break;
                case 'eBay':
                    url = 'https://www.ebay.com';
                    break;
                case 'SHEIN':
                    url = 'https://www.shein.com';
                    break;
                case 'Walmart':
                    url = 'https://www.walmart.com';
                    break;
                case '美团':
                    url = 'https://www.meituan.com';
                    break;
                case 'Wikipedia':
                    url = 'https://www.wikipedia.org';
                    break;
                case 'Coursera':
                    url = 'https://www.coursera.org';
                    break;
                case 'edX':
                    url = 'https://www.edx.org';
                    break;
                case 'Khan Academy':
                    url = 'https://www.khanacademy.org';
                    break;
                case 'Nature':
                    url = 'https://www.nature.com';
                    break;
                case 'Duolingo':
                    url = 'https://www.duolingo.com';
                    break;
                case 'Udemy':
                    url = 'https://www.udemy.com';
                    break;
                case 'ResearchGate':
                    url = 'https://www.researchgate.net';
                    break;
                case 'CNN':
                    url = 'https://www.cnn.com';
                    break;
                case 'BBC':
                    url = 'https://www.bbc.com';
                    break;
                case 'Reuters':
                    url = 'https://www.reuters.com';
                    break;
                case 'New York Times':
                    url = 'https://www.nytimes.com';
                    break;
                case '环球时报':
                    url = 'https://www.globaltimes.cn';
                    break;
                case 'The Guardian':
                    url = 'https://www.theguardian.com';
                    break;
                case 'Bloomberg':
                    url = 'https://www.bloomberg.com';
                    break;
                case 'Twitch':
                    url = 'https://www.twitch.tv';
                    break;
                case 'Steam':
                    url = 'https://store.steampowered.com';
                    break;
                case 'Xbox':
                    url = 'https://www.xbox.com';
                    break;
                case 'PlayStation':
                    url = 'https://www.playstation.com';
                    break;
                case 'Nintendo':
                    url = 'https://www.nintendo.com';
                    break;
                case 'Discord':
                    url = 'https://discord.com';
                    break;
                case 'Epic Games':
                    url = 'https://www.epicgames.com';
                    break;
                case 'Chess.com':
                    url = 'https://www.chess.com';
                    break;
                case 'AWS':
                    url = 'https://aws.amazon.com';
                    break;
                case 'Azure':
                    url = 'https://azure.microsoft.com';
                    break;
                case 'Google Cloud':
                    url = 'https://cloud.google.com';
                    break;
                case '阿里云':
                    url = 'https://www.aliyun.com';
                    break;
                case '腾讯云':
                    url = 'https://cloud.tencent.com';
                    break;
                case 'Dropbox':
                    url = 'https://www.dropbox.com';
                    break;
                case '百度网盘':
                    url = 'https://pan.baidu.com';
                    break;
                case 'MongoDB':
                    url = 'https://www.mongodb.com';
                    break;
                case 'Booking.com':
                    url = 'https://www.booking.com';
                    break;
                case 'Airbnb':
                    url = 'https://www.airbnb.com';
                    break;
                case 'Uber':
                    url = 'https://www.uber.com';
                    break;
                case 'TripAdvisor':
                    url = 'https://www.tripadvisor.com';
                    break;
                case '携程':
                    url = 'https://www.ctrip.com';
                    break;
                case '滴滴出行':
                    url = 'https://www.didiglobal.com';
                    break;
                case 'Google Maps':
                    url = 'https://www.google.com/maps';
                    break;
                case 'WebMD':
                    url = 'https://www.webmd.com';
                    break;
                case 'Mayo Clinic':
                    url = 'https://www.mayoclinic.org';
                    break;
                case 'WHO':
                    url = 'https://www.who.int';
                    break;
                case 'Fitbit':
                    url = 'https://www.fitbit.com';
                    break;
                case '平安好医生':
                    url = 'https://www.pingan.com/health';
                    break;
                case '丁香医生':
                    url = 'https://www.dxy.cn';
                    break;
                case 'MyFitnessPal':
                    url = 'https://www.myfitnesspal.com';
                    break;
                case 'NIH':
                    url = 'https://www.nih.gov';
                    break;
                default:
                    url = 'https://www.google.com';
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

// 分类切换功能
function setupCategorySwitch() {
    const navItems = document.querySelectorAll('.nav-item');
    const categories = document.querySelectorAll('.website-category');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有激活状态
            navItems.forEach(nav => nav.classList.remove('active'));
            categories.forEach(cat => cat.classList.remove('active-category'));
            
            // 添加当前项的激活状态
            item.classList.add('active');
            const categoryId = item.getAttribute('data-category');
            const categoryElement = document.getElementById(categoryId);
            categoryElement.classList.add('active-category');
            
            // 重置滚动位置到顶部
            categoryElement.scrollTop = 0;
        });
    });
    
    // 监听滚动事件，确保内容不被Dock栏遮挡
    categories.forEach(category => {
        category.addEventListener('scroll', function() {
            // 检测是否接近底部
            const isNearBottom = this.scrollHeight - this.scrollTop - this.clientHeight < 100;
            
            // 如果接近底部，添加额外的底部padding
            if (isNearBottom) {
                this.style.paddingBottom = '100px';
            } else {
                this.style.paddingBottom = '20px';
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
    setupCategorySwitch();
    
    // 可选：启用背景粒子效果
    // setupParticles();
});
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
    // 使用href属性处理链接，不再需要复杂的switch语句
    // 所有链接都已经用<a>标签直接包含了href属性
}

// 底部Dock栏点击功能
function setupDockItems() {
    const dockItems = document.querySelectorAll('.dock-item');
    const navItems = document.querySelectorAll('.nav-item');
    
    dockItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // 点击dock项目时，触发相应导航项目的点击事件
            if (index < navItems.length) {
                navItems[index].click();
            }
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
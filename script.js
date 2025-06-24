function showTab(tabName) {
            // 隱藏所有分頁內容
            const allTabs = document.querySelectorAll('.tab-content');
            const allNavTabs = document.querySelectorAll('.nav-tab');
            
            allTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            allNavTabs.forEach(navTab => {
                navTab.classList.remove('active');
            });
            
            // 顯示選中的分頁
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
        }

       

        // 滾動動畫效果
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.experience-item, .skill-card');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });

        // 初始化動畫樣式
        document.querySelectorAll('.experience-item, .skill-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
        });
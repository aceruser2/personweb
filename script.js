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

function openLightbox(imgUrl, caption) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    img.src = imgUrl;
    img.alt = caption || '';
    cap.textContent = caption || '';
    lightbox.style.display = 'flex';
    // 按 ESC 關閉
    document.onkeydown = function(e) {
        if (e.key === "Escape") closeLightbox();
    };
    // 點擊遮罩關閉
    lightbox.onclick = function(e) {
        if (e.target === lightbox) closeLightbox();
    };
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.onkeydown = null;
    document.getElementById('lightbox').onclick = null;
}

function filterPhotos(category) {
    // 切換按鈕 active 樣式
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes("'" + category + "'"));
    });
    // 過濾圖片
    document.querySelectorAll('.photo-item').forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
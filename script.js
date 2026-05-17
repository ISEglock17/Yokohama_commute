document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. タブ切り替え機能 (路線図 ⇄ 家賃相場図)
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // クリックされたボタンの親要素（.tab-wrapper）を特定
            const wrapper = button.closest('.tab-wrapper');
            
            // そのラッパー内のすべてのボタンから active クラスを削除
            wrapper.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            // すべてのコンテンツから active クラスを削除
            wrapper.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // クリックされたボタンに active クラスを付与
            button.classList.add('active');
            
            // 対応するコンテンツを表示
            const targetId = button.getAttribute('data-tab');
            const targetContent = wrapper.querySelector(`#${targetId}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ==========================================
    // 2. ページトップへ戻るボタン
    // ==========================================
    const scrollTopBtn = document.getElementById('js-scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('is-visible');
        } else {
            scrollTopBtn.classList.remove('is-visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 3. 画像読み込みエラー時のフォールバック処理（おまけ）
    // ==========================================
    // 万が一画像が存在しない場合、デザインが壊れないようダミー枠を動的に生成します
    const images = document.querySelectorAll('.responsive-img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            const altText = img.getAttribute('alt') || '画像';
            const parent = img.parentElement;
            parent.innerHTML = `<div style="padding:40px 20px; background:#edf2f7; color:#718096; font-size:0.9rem; border:2px dashed #cbd5e0; border-radius:6px;">📸 【画像配置エリア】<br>"${img.getAttribute('src')}" を読み込めませんでした。<br>（${altText}）</div>`;
        });
    });
});
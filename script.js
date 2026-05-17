document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('js-scroll-top');

    // スクロール位置に応じて「トップへ戻る」ボタンを表示・非表示
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('is-visible');
        } else {
            scrollTopBtn.classList.remove('is-visible');
        }
    });

    // ボタンがクリックされたらスムーズにトップへスクロール
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
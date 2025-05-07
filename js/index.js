document.addEventListener('DOMContentLoaded', () => {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const moreContent = document.getElementById('more-content');

    seeMoreBtn.addEventListener('click', () => {
        moreContent.classList.toggle('visible');
        seeMoreBtn.textContent = moreContent.classList.contains('visible') ? '閉じる' : 'もっと見る';
    });

    const contactBtn = document.getElementById('contact-btn');
    const email = document.getElementById('email-address');

    contactBtn.addEventListener('click', () => {
        email.classList.toggle('visible');
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    document.body.scrollTop = 0; // Safari対応
    document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge
}


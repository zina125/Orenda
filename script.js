// تحسين تجربة المستخدم باستخدام JavaScript

// عند تمرير الصفحة، يتم إضافة تدرج على الفوتر
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        footer.style.backgroundColor = '#001f3f';
    } else {
        footer.style.backgroundColor = '#00264d';
    }
});

// تأثير انزلاق ناعم عند الضغط على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

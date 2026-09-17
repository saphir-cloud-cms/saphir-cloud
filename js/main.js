// Hàm hỗ trợ cuộn mượt đến các section khi click thẻ card
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
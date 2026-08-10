// 找到页面中的主题切换按钮
const themeButton = document.querySelector(".theme-button");

// 监听按钮的点击事件
themeButton.addEventListener("click", function () {

    // 给 body 添加或移除 dark-mode 类
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        // 当前是黑夜模式，按钮显示太阳
        themeButton.textContent = "☀️";
    } else {
        // 当前是白天模式，按钮显示月亮
        themeButton.textContent = "🌙";
    }
});
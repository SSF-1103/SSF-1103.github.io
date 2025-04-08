function switchLanguage(lang) {
    // 隐藏所有语言内容
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.classList.add('hidden');
    });

    // 显示目标语言内容
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(element => {
        element.classList.remove('hidden');
    });

    // 更新页面语言属性
    document.documentElement.lang = lang;
}

(function () {
    window['yandexChatWidgetCallback'] = function() {
        try {
            window.yandexChatWidget = new Ya.ChatWidget({
                guid: '2a50ead1-8f0b-4eff-a3f6-352ad3b441ab',
                buttonText: 'Задать вопрос',
                title: 'Чат с автором сайта',
                theme: 'light',
                collapsedDesktop: 'never',
                collapsedTouch: 'never'
            });
        } catch(e) { }
    };
    var n = document.getElementsByTagName('script')[0],
        s = document.createElement('script');
    s.async = true;
    s.charset = 'UTF-8';
    s.src = 'https://chat.s3.yandex.net/widget.js';
    n.parentNode.insertBefore(s, n);
})();
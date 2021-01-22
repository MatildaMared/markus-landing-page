// Special handling for in-app browsers that don't always support new windows
(function() {
    function browserSupportsNewWindows(userAgent) {
        var rules = [
            'FBIOS',
            'Twitter for iPhone',
            'WebView',
            '(iPhone|iPod|iPad)(?!.*Safari\/)',
            'Android.*(wv|\.0\.0\.0)'
        ];
        var pattern = new RegExp('(' + rules.join('|') + ')', 'ig');
        return !pattern.test(userAgent);
    }

    if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {
        document.getElementById('af-form-791915812').parentElement.removeAttribute('target');
    }
})();

(function() {
    var IE = /*@cc_on!@*/false;
    if (!IE) { return; }
    if (document.compatMode && document.compatMode == 'BackCompat') {
        if (document.getElementById("af-form-791915812")) {
            document.getElementById("af-form-791915812").className = 'af-form af-quirksMode';
        }
        if (document.getElementById("af-body-791915812")) {
            document.getElementById("af-body-791915812").className = "af-body inline af-quirksMode";
        }
        if (document.getElementById("af-header-791915812")) {
            document.getElementById("af-header-791915812").className = "af-header af-quirksMode";
        }
        if (document.getElementById("af-footer-791915812")) {
            document.getElementById("af-footer-791915812").className = "af-footer af-quirksMode";
        }
    }
})();

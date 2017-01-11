var Language = (function () {
    function Language() {
    }
    Language.get = function (key, def) {
        if (!def)
            def = "E_MISSING_TRANSLATION";
        return window.$lang[key] == null ? def : window.$lang[key];
    };
    return Language;
}());

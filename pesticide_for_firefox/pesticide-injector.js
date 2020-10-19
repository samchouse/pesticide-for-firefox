(() => {
    // inject the pesticide CSS and JS
    async function toggleAssets() {
        const injector = 'if (document.getElementById("pesticideCSS") && document.getElementById("pesticideJS") ) {' +
            'document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideCSS"));' +
            'document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideJS"));' +
            'document.getElementsByTagName("body")[0].removeChild(document.getElementById("pesticide-for-firefox-result"));' +
            '} else {' +
            'const pesticideCSS = document.createElement("link");' +
            'pesticideCSS.rel = "stylesheet";' +
            'pesticideCSS.type = "text/css";' +
            'pesticideCSS.href = browser.extension.getURL("/pesticide.min.css");' +
            'pesticideCSS.id = "pesticideCSS";' +
            'document.getElementsByTagName("head")[0].appendChild(pesticideCSS);' +
            'const pesticideJS = document.createElement("script");' +
            'pesticideJS.type = "text/javascript";' +
            'pesticideJS.src = browser.extension.getURL("/pesticide.js");' +
            'pesticideJS.id = "pesticideJS";' +
            'document.getElementsByTagName("head")[0].appendChild(pesticideJS);' +
            'pesticideResult = document.createElement("div"),' +
            'pesticideResult.id = "pesticide-for-firefox-result",' +
            'document.getElementsByTagName("body")[0].appendChild(pesticideResult)' +
            '}';

        await browser.tabs.executeScript(undefined, {code: injector});
    }

    browser.browserAction.onClicked.addListener(async () => {
        await toggleAssets();
    });

})(window, document);

window.onload = function () {
    function loadScript (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url , true);
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.text = xhr.responseText;
                    if (url.substr(url.lastIndexOf('/') + 1)==="require.js") {   //only for require
                        script.setAttribute("data-main","js/target/config.js");
                    }
                    document.body.appendChild(script);
                }
            }
        };
        xhr.send(null);
        if (callback) { callback(); }
    }
    loadScript("js/target/vendor/require.js");
};
window.onload = function () {
    function loadScript(url, callback){
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.defer = "defer";
        if (url.substr(url.lastIndexOf('/') + 1)==="require.js") {   //only for require
            script.setAttribute("data-main","js/target/config.js");
        }
        if (script.readyState){ //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange = null;
                    if (callback) { callback(); }
                }
                else { //Others
                    script.onload = function() {
                        if (callback) { callback(); }
                    };
                }
            };
        }
        script.src = url;
        document.getElementsByTagName("body")[0].appendChild(script);
    }

    loadScript("js/target/vendor/require.js");
    // loading with dependencies
    loadScript("file1.js", function(){
        loadScript("file2.js", function(){
            loadScript("file3.js", function(){
                alert("All files are loaded!");
            });
        });
    });
};


function getParameters() {
        let parameters = {};
        // window.location = currentUrl;
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            let param = vars[i].split('=');
            if(parameters[param[0]] = param[1]);
        }
        return parameters;
    };
    exports.getParameters = getParameters;


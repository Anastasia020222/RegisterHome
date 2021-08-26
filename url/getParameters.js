function getParameters(x) {
    let url = new URL(x);
    let search = new URLSearchParams(url.search);
    let parameters = {};
    for(var pair of search.entries()) {
        parameters[pair[0]] = pair[1];
    }
    return parameters;
};
exports.getParameters = getParameters;


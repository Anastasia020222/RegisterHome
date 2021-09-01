function urlItem(x) {
    let url = new URL(x);
    let href = new URLSearchParams(url.href);
    // let parameters = {};
    // for(var pair of search.entries()) {
    //     parameters[pair[0]] = pair[1];
    // }
    return href;
    console.log(href);
};
exports.urlItem = urlItem;
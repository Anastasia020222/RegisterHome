function makeid(num, d) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz023456789+._";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  // if (d === 0) {
  //   text += '+._mail';
  // };
  return text;
};

exports.makeid = makeid;
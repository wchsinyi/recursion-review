// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var ans = "";
  var arr = ['number', 'boolean'];
  if (typeof obj == 'function' || typeof obj == 'undefined'){
    ans = undefined
  }else if(obj==null){
    ans = 'null'
  }
  else if (arr.indexOf(typeof(obj)) != -1) {
    ans = String(obj);
  } 
  else if (typeof(obj) === "string"){
    ans = '\"' + String(obj) + '\"';
  }
  else if (Array.isArray(obj)) {
    ans += '[';
    obj.forEach((elem, i) => {
      ans += stringifyJSON(elem);
      if (i < obj.length - 1) {
        ans += ',';
      }
    });
    ans += ']';
  } else if (typeof obj === 'object') {
    ans += '{';
    var count =0; var l = Object.keys(obj).length
    for (let j in obj) {
      if(stringifyJSON(obj[j])!=undefined){
        ans += "\"" + j + "\"" + ":";
        ans += stringifyJSON(obj[j]);
        if(count<l-1){
          ans += ","
        }
      }
      count++ 
    }
    ans += '}';
  }

  return ans;
};

stringifyJSON(undefined);
export default function(inputArr) {
  if (!inputArr && !Array.isArray(inputArr)) {
    throw new TypeError("not an array");
  }
  var arr = inputArr.reduce(function(a, v) {
    return a.concat(v);
  });
  var a = arr.length,
    t,
    i;
  while (a) {
    i = Math.floor(Math.random() * a--);
    t = arr[a];
    arr[a] = arr[i];
    arr[i] = t;
  }
  return arr;
}

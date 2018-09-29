var timesTables = {
  num: 10, // default a 10x10 multiplication table via nested array
  table: function (num = this.num) {
    let answerArr = [];
    for (let f1 = 1; f1 <= num; f1++) {
      var y = [];
      for (let f2 = 1; f2 <= num; f2++) {
        y.push([f1, f2]);
      }
      answerArr.push(y);
    }
    return answerArr;
  },
  // taking the Fisher-Yates shuffle from https://bost.ocks.org/mike/shuffle/
  // shuffles in-place, takes random element from front and puts it to back
  game: {
    shuffled: function (inputArr) {
      if (!inputArr && !Array.isArray(inputArr)) {
        throw new TypeError("not an array");
      }
      var arr = inputArr.reduce(function (a, v) {
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
  },
  check: function (sum, result) {
    if (
      Array.isArray(sum) &&
      !isNaN(sum[0]) &&
      !isNaN(sum[1]) &&
      sum.length == 2
    ) {
      return result == sum[0] * sum[1];
    } else {
      throw new TypeError("sum not an array with 2 number elements");
    }
  },
  box: function (arr) {
    var box = (arr[0]) + ((arr[1] - 1) * 10);
    return box;
  },
  timer: 0
};

if (typeof module !== "undefined") {
  module.exports = timesTables;
}

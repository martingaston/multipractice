var test = require("tape");
var timesTables = require("./logic");

test("Tape is working", function (t) {
  t.ok("Tape", "Tape is loaded");
  t.equal(1 + 1, 2, "1 + 1 = 2");
  t.end();
});

test("Multiplication table creation", function (t) {
  var actual = timesTables.table();
  var flat = timesTables.table().reduce(function (a, v) {
    return a.concat(v);
  });
  t.deepEqual(actual.length, 10, "Answers array has 10 nested arrays");
  t.deepEqual(
    actual[9].length,
    10,
    "Each nested array has 10 nested array elements"
  );
  t.deepEqual(flat.length, 100, "Total of 100 element array");
  t.deepEqual(flat[0], [1, 1], "Flattened: First array element is [1,1]");
  t.deepEqual(flat[44], [5, 5], "Flattened: 44th array element is [5,5]");
  t.deepEqual(flat[99], [10, 10], "Flattened: Final array element is [10,10]");
  t.deepEqual(actual[0][4], [1, 5], "Original Array: [0][4] is [1, 5]");
  t.deepEqual(actual[5][5], [6, 6], "Original Array: [5][5] is [6, 6]");

  actual = timesTables.table(12).reduce(function (a, v) {
    return a.concat(v);
  });
  t.deepEqual(
    actual.length,
    12 * 12,
    "Can create 12x12 table with 144 element array"
  );
  t.end();
});

test("Multiplication table is shuffled", function (t) {
  var table = timesTables.table();
  var shuffled = timesTables.game.shuffled(table);
  t.equal(shuffled.length, 100, "Shuffled array is still 100 elements");
  t.notDeepEqual(
    shuffled,
    table.reduce(function (a, v) {
      return a.concat(v);
    }),
    "Shuffled array (reduced) is different to original array (reduced)"
  );
  t.end();
});

test("Answer validation", function (t) {
  t.equal(timesTables.check([1, 1], 1), true, "1x1 = 1");
  t.equal(timesTables.check([1, 2], 2), true, "1x2 = 2");
  t.equal(timesTables.check([8, 6], 48), true, "8x6 = 48");
  t.notEqual(timesTables.check([7, 6], 49), true, "7x6 != 49");
  t.notEqual(timesTables.check([10, 10], 90), true, "10x10 != 90");
  t.throws(
    function () {
      timesTables.check([7, "ham"], 14);
    },
    /sum not an array with 2 number elements/,
    "Throws TypeError when sum is not an array with two number elements"
  );
  t.end();
});

test("Box validation", function (t) {
  t.equal(timesTables.box([1, 1]), 1, "1x1 sum = 1st box");
  t.equal(timesTables.box([5, 5]), 45, "5x5 sum = 45th box");
  t.equal(timesTables.box([10, 10]), 100, "10x10 sum = 100th box");
  t.end();
});
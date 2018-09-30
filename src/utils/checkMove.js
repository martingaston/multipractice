export default function(sum, result) {
  if (
    Array.isArray(sum) &&
    !isNaN(sum[0]) &&
    !isNaN(sum[1]) &&
    sum.length === 2
  ) {
    return Number(result) === sum[0] * sum[1];
  } else {
    throw new TypeError("sum not an array with 2 number elements");
  }
}

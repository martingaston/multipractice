const createTable = (num = "10") => {
  let answerArr = [];
  for (let row = 1; row <= num; row++) {
    const line = [];
    for (let col = 1; col <= num; col++) {
      line.push([row, col]);
    }
    answerArr.push(line);
  }
  return answerArr;
};

export default createTable;

class CodersArray {
  length = 0;
  push;
  some;
  find;
  filter;
  map;

  constructor(...values) {
    for (const iterator of values) {
      this.length++;
    }
  }
}

export default CodersArray;

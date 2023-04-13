class CodersArray {
  length = 0;

  constructor(...values) {
    for (const value of values) {
      this.length++;
    }
  }
}

export default CodersArray;

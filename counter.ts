function createCounter(n: number): () => number {
  let current = n;
  return function () {
    return current++;
  };
}

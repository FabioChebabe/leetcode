function simplifyPath(path: string): string {
  const stack: string[] = path.split('/');
  let result: string[] = [];

  for (let i = 0; i < stack.length; i++) {
    const dir = stack[i];
    if (dir === '..') {
      if (result.length > 0) {
        result.pop();
      }
    } else if (dir !== '' && dir !== '.') {
      result.push(dir);
    }
  }

  return '/' + result.join('/');
}

console.log(simplifyPath('/../'));

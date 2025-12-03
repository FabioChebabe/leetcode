function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || typeof classFunction !== 'function') {
    return false;
  }

  const wrapped = Object(obj);

  if (
    wrapped === null ||
    (typeof wrapped !== 'object' && typeof wrapped !== 'function')
  ) {
    return false;
  }

  let proto = Object.getPrototypeOf(wrapped);

  while (proto) {
    if (proto === classFunction.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

console.log(checkIfInstanceOf(5, Number));

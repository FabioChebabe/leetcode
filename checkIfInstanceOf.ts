// function checkIfInstanceOf(obj: any, classFunction: any): boolean {
//   if (
//     obj === null ||
//     obj === undefined ||
//     typeof classFunction !== 'function'
//   ) {
//     return false;
//   }

//   const wrapped = Object(obj);

//   if (
//     wrapped === null ||
//     (typeof wrapped !== 'object' && typeof wrapped !== 'function')
//   ) {
//     return false;
//   }

//   let proto = Object.getPrototypeOf(wrapped);

//   while (proto) {
//     if (proto === classFunction.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   }

//   return false;
// }

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined) return false;
  if (typeof classFunction !== 'function') return false;
  if (!classFunction.prototype) return false;

  const wrapped = Object(obj);

  let proto = Object.getPrototypeOf(wrapped);
  const target = classFunction.prototype;

  while (proto !== null) {
    if (proto === target) return true;
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

console.log(checkIfInstanceOf(new Date(), Date));

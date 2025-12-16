function isValidBusinessLine(value: string): boolean {
  return (
    value === 'electronics' ||
    value === 'grocery' ||
    value === 'pharmacy' ||
    value === 'restaurant'
  );
}

function validateCoupons(
  code: string[],
  businessLine: string[],
  isActive: boolean[]
): string[] {
  const regex = /^[A-Za-z0-9_]+$/;

  const businessOrder: Record<string, number> = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  };

  const validCoupons: { code: string; businessLine: string }[] = [];

  for (let i = 0; i < code.length; i++) {
    if (
      code[i].length > 0 &&
      regex.test(code[i]) &&
      isValidBusinessLine(businessLine[i]) &&
      isActive[i] === true
    ) {
      validCoupons.push({
        code: code[i],
        businessLine: businessLine[i],
      });
    }
  }

  validCoupons.sort((a, b) => {
    const businessDiff =
      businessOrder[a.businessLine] - businessOrder[b.businessLine];

    if (businessDiff !== 0) {
      return businessDiff;
    }

    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });

  return validCoupons.map((c) => c.code);
}

console.log(
  validateCoupons(
    ['Qf8NjqOTYp', 'w4xOTEM20C'],
    ['pharmacy', 'pharmacy'],
    [true, true]
  )
);

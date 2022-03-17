export const sum = (a, b) =>
  ({
    [true]: false,
    [typeof a === 'string' && typeof b === 'string']: Number(a) + Number(b),
    [typeof a === 'number' && typeof b === 'number']: a + b,
  }.true);

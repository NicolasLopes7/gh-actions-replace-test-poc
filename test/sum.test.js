import { sum } from '../src/sum.mjs';

describe('sum', () => {
  it('should return false when the params have different types', () => {
    expect(sum('1', 2)).toBe(false);
  });
  it('should return the sum correctly when the params are numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('should return the sum correctly when the params are strings', () => {
    expect(sum('1', '2')).toBe(3);
  });
});

import { orderOrganizer, orderOrganizerTwo, checkRulePasses, reorderUpdates, readInput } from './day5';

describe('Utility Functions', () => {
  it('checkRulePasses returns true for valid updates', () => {
    const update = [1, 2, 3];
    const rule = [1, 3];
    expect(checkRulePasses(update, rule)).toBe(true);
  });

  it('checkRulePasses returns false for invalid updates', () => {
    const update = [3, 2, 1];
    const rule = [1, 3];
    expect(checkRulePasses(update, rule)).toBe(false);
  });

  it('reorderUpdates swaps update elements correctly', () => {
    const update = [3, 2, 1];
    const rule = [1, 3];
    reorderUpdates(update, rule);
    expect(update).toEqual([1, 2, 3]);
  });
});

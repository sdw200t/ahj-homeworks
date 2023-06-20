import Bowerman from './class';

describe('Bowerman', () => {
  const bowerman = new Bowerman();

  test('levelUp() is called with arguments', () => {
    // Prepare a spy for the validator.setRule() method.
    const setRuleSpy = jest.spyOn(bowerman, 'levelUp');

    // Create a mock rule for use as a function argument.
    const trueRule = jest.fn(() => true);

    const result = bowerman.levelUp();

    expect(result).toBeUndefined();

    // Check the spy if the method was called correctly.
    expect(setRuleSpy).toHaveBeenCalledWith('true', trueRule);

    // Restore the mock and revert original implementation.
    setRuleSpy.mockClear();
  });
});

import { RomanNumeralsManager } from './index';
const makeSut = () => {
  const sut = new RomanNumeralsManager();

  return { sut };
};

describe('Index Test', () => {
  describe(RomanNumeralsManager.name, () => {
    describe(RomanNumeralsManager.prototype.convertDecimalToRoman.name, () => {
      it('Should return I when number 1 is provided', () => {
        const { sut } = makeSut();

        const result = sut.convertDecimalToRoman(1);

        expect(result).toBe('I');
      });
    });
  });
});
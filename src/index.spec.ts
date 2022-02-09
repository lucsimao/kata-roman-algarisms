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

      it('Should return II when number 2 is provided', () => {
        const { sut } = makeSut();

        const result = sut.convertDecimalToRoman(2);

        expect(result).toBe('II');
      });

      it('Should return III when number 3 is provided', () => {
        const { sut } = makeSut();

        const result = sut.convertDecimalToRoman(3);

        expect(result).toBe('III');
      });

      it('Should return IV when number 4 is provided', () => {
        const { sut } = makeSut();

        const result = sut.convertDecimalToRoman(4);

        expect(result).toBe('IV');
      });

      it('Should return V when number 5 is provided', () => {
        const { sut } = makeSut();

        const result = sut.convertDecimalToRoman(5);

        expect(result).toBe('V');
      });
    });
  });
});

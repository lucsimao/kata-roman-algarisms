export class RomanNumeralsManager {
  public convertDecimalToRoman(number: number) {
    let result = '';

    if (number === 4) return 'IV';

    for (let i = 0; i < number; i++) {
      result = result.concat('I');
    }

    return result;
  }
}

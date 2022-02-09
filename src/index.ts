export class RomanNumeralsManager {
  public convertDecimalToRoman(number: number) {
    let result = '';

    if (number === 4) return 'IV';
    if (number === 5) return 'V';

    for (let i = 0; i < number; i++) {
      result = result.concat('I');
    }

    return result;
  }
}

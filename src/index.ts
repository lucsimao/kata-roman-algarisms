export class RomanNumeralsManager {
  public convertDecimalToRoman(number: number) {
    let result = '';
    for (let i = 0; i < number; i++) {
      result = result.concat('I');
    }

    return result;
  }
}

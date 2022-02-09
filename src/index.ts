const romanNumeralList = ['I', 'II', 'III', 'IV', 'V'];

export class RomanNumeralsManager {
  public convertDecimalToRoman(number: number) {
    return romanNumeralList[number - 1];
  }
}

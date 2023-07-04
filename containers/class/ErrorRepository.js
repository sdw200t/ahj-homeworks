export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [0, 'ошибка 0'],
      [1, 'ошибка 1'],
      [2, 'ошибка 2'],
    ]);
  }

  translate(code) {
    const rez = this.errors.get(code);
    if (rez === undefined) {
      return 'Unknown error';
    }
    return rez;
  }
}

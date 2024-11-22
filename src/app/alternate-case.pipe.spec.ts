import { AlternateCasePipe } from './alternate-case.pipe';

describe('Alternate Pipe', () => {
  let pipe: AlternateCasePipe;

  beforeEach(() => {
    pipe = new AlternateCasePipe();
  });

  it("Devrait mettre en majuscule les caractères d'indice pair et miniscule les autres", () => {
    const result = pipe.transform('abcdef');
    expect(result).toBe('AbCdEf');
  });

  it('Gerer des chaines avec des caractères mélangées', () => {
    const result = pipe.transform('abCDEf');
    expect(result).toBe('AbCdEf');
  });
});

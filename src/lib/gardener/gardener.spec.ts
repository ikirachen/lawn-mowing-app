import { Lawn } from '../lawn/lawn';
import { Size } from '../utils/size';
import { Mower } from '../mower/mower';
import { Position } from '../utils/position';
import { Gardener } from './gardener';

describe('Gardener tests', () => {

  let gardner: Gardener;

  it('should create an instance', () => {
    expect(() => gardner = new Gardener(new Mower('FRLFFF', 'N', new Position(1, 2)), new Lawn(new Size(5, 5)))).toBeTruthy();
  });

  it('isValidPosition (2, 3) shold return true', () => {
      const result = new Gardener(new Mower('FRLFFF', 'N', new Position(1, 2)),
                                  new Lawn(new Size(5, 5))).isValidPosition(new Position(2, 3));
      expect(result).toBe(result);
  });

  it('isValidPosition (6, 6) shold return false', () => {
    const result = new Gardener(new Mower('FRLFFF', 'N', new Position(1, 2)),
                                new Lawn(new Size(5, 5))).isValidPosition(new Position(6, 6));
    expect(result).toBe(false);
  });

  it('calculateNewOrientation go forward shold return N', () => {
        const result = new Gardener(new Mower('FRLFFF', 'N', new Position(1, 2)),
                                    new Lawn(new Size(5, 5))).calculateNewOrientation('F', 'N');
        expect(result).toBe('N');
  });

  it('calculateNewOrientation turn left shold return W', () => {
    const result = new Gardener(new Mower('FRLFFF', 'N', new Position(1, 2)),
                                new Lawn(new Size(5, 5))).calculateNewOrientation('L', 'N');
    expect(result).toBe('W');
  });

});

import { Mower } from './mower';
import { Position } from '../utils/position';

describe('Mower tests', () => {
  it('should create instance', () => {
    const result = new Mower('FFF', 'S', new Position(2, 2));
    expect(result).toBeTruthy();
  });

  it('should be equal to [2 2 S]', () => {
    const result = new Mower('FFF', 'S', new Position(2, 2)).toString();
    expect(result).toBe('2 2 S');
  });

});

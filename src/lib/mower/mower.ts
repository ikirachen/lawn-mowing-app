import { Position } from '../utils/position';
import { Constants } from '../utils/constants';

export class Mower {
  constructor(public instructions: string,
              public orientation: string,
              public position: Position) {
  }

  public toString = (): string => {
    return this.position.x + Constants.whiteSpace + this.position.y + Constants.whiteSpace + this.orientation;
  }
}


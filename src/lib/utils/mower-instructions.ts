import { Position } from '../utils/position';

export class MowerInstructions {
  constructor(public instruction: string,
              public orientation: string,
              public position: Position) {

  }
}

import { Mower } from '../mower/mower';
import { Lawn } from '../lawn/lawn';
import { Position } from '../utils/position';

export class Gardener {
  constructor(public mower: Mower, public lawn: Lawn) {
  }

  public  isValidPosition = (position: Position): boolean =>  {
    return  position.x >= 0 && position.y >= 0 &&
            (this.lawn.size.width - position.x) >= 0 &&
            (this.lawn.size.height - position.y) >= 0;
  }

  public calculateNewOrientation = (command: string, orientation: string): string => {
    switch (command) {
        case 'F': {
            return orientation;
        }
        case 'R': {
            switch (orientation) {
                case 'N':
                    return 'E';
                case 'E':
                    return 'S';
                case 'S':
                    return 'W';
                case 'W':
                    return 'N';
                default:
                    return 'not recognized orientation';
            }
        }
        case 'L': {
            switch (orientation) {
                case 'N':
                    return 'W';
                case 'E':
                    return 'N';
                case 'S':
                    return 'E';
                case 'W':
                    return 'S';
                default:
                    return 'not recognized orientation';
            }
        }
        default:
            return 'not recognized command';
      }
  }

  public calculatenNewPosition = (orientation: string, oldPosition: Position): Position => {
      switch (orientation) {
          case 'N':
              {
                  return new Position(oldPosition.x, oldPosition.y + 1);
              }
          case 'E':
              {
                  return new Position(oldPosition.x + 1, oldPosition.y);
              }
          case 'S':
              {
                  return new Position(oldPosition.x, oldPosition.y - 1);
              }
          case 'W':
              {
                  return new Position(oldPosition.x - 1, oldPosition.y);
              }
      }
  }

  public mow = () => {
      for (const command of this.mower.instructions) {
        if (command === 'F') {
            const newPosition = this.calculatenNewPosition(this.mower.orientation, this.mower.position);

            if (this.isValidPosition(newPosition)) {
                this.mower.position = newPosition;
            }
        } else {
          this.mower.orientation = this.calculateNewOrientation(command, this.mower.orientation);
        }
    }
  }
}

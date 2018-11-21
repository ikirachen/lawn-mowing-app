
import { Constants } from '../utils/constants';
import { InstructionValidator } from '../utils/instruction-validator/instruction-validator';
import { Size } from '../utils/size';
import { MowerInstructions } from '../utils/mower-instructions';
import { Position } from '../utils/position';

export class InstructionParser {
  constructor(private instructions: string) {

    const lines = instructions.split(Constants.newLineRegEx);

    if (!InstructionValidator.checkInstructionLinesCount(lines)) {
        throw new Error(Constants.invalidInstructionLinesCount);
    }

    if (!InstructionValidator.checkLawnSizeInstructions(lines[0])) {
        throw new Error(Constants.invalidLawnSizeInstructions);
    }

    const lanwInstructions = lines[0].split(Constants.whiteSpace);
    this._lawnSize = new Size(parseInt(lanwInstructions[0], 10), parseInt(lanwInstructions[1], 10));

    this._mowerInstructions = new Array<MowerInstructions>();

    for (let i = 1; i < lines.length; i += 2) {
      const mowerPositionInstructions = lines[i];
      const mowerCommandInstructions = lines[i + 1];

      if (!InstructionValidator.checkMowerPositionInstructions(mowerPositionInstructions)) {
         const line = i + 1; // line is array index + 1
         throw new Error(Constants.invalidMowerPositionInstructions + line);
      }

      if (!InstructionValidator.checkMowerCommandInstructions(mowerCommandInstructions)) {
        const line = i + 2; // line is array index + 1
        throw new Error(Constants.invalidMowerCommandInstructions + line);
      }

      const positionInstructions = mowerPositionInstructions.split(Constants.whiteSpace);
      const position = new Position(parseInt(positionInstructions[0], 10), parseInt(positionInstructions[1], 10));

      this._mowerInstructions.push(new MowerInstructions(mowerCommandInstructions, positionInstructions[2], position));
    }
  }

  private _lawnSize: Size;
  public get lawnSize(): Size {
      return this._lawnSize;
  }

  private _mowerInstructions: MowerInstructions[];
  public get mowerInstructions(): MowerInstructions[] {
    return this._mowerInstructions;
  }
}

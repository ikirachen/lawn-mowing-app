import { Constants } from '../constants';

export class InstructionValidator {

  static checkInstructionLinesCount = (instructionLines: string[]): boolean => {
    return instructionLines.length % 2 !== 0 && instructionLines.length >= 3;
  }

  static  checkLawnSizeInstructions = (instructions: string): boolean => {
    const parts = instructions.split(Constants.whiteSpace);
    return parts.length === 2 &&
           !isNaN(Number(parts[0])) &&
           !isNaN(Number(parts[1])) &&
           Number(parts[0]) > 0 &&
           Number(parts[1]) > 0;
  }

  static  checkMowerPositionInstructions = (instructions: string): boolean => {
    const parts = instructions.split(Constants.whiteSpace);
    return parts.length === 3 &&
           !isNaN(parseInt(parts[0], 10)) &&
           !isNaN(parseInt(parts[1], 10)) &&
           InstructionValidator.isValidOrientation(parts[2]);
  }

  static  isValidOrientation = (orientation: string): boolean => {
    return orientation.length === 1 && (orientation === 'N' ||
                                        orientation === 'E' ||
                                        orientation === 'S' ||
                                        orientation === 'W');
  }

  static  checkMowerCommandInstructions = (instructions: string): boolean => {
    let result = true;
    let index = 0;

      while (result && index < instructions.length) {
        result = InstructionValidator.isValidCommand(instructions[index]);
        index++;
      }

    return result;
  }

  static  isValidCommand = (command: string): boolean => {
    return command === 'F' || command === 'L' || command === 'R';
  }
}

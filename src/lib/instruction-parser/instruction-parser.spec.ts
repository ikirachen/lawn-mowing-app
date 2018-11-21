
import { InstructionParser } from './instruction-parser';
import { Constants } from '../utils/constants';

describe('InstructionParser tests', () => {
  const validInstructions = '5 5\r\n1 2 N\r\nLFLFLFLFF\r\n3 3 E\r\nFFRFFRFRRF';

  const invalidLanwSizeInstructions = '5 F\r\n1 2 N\r\nLFLFLFLFF\r\n3 3 E\r\nFFRFFRFRRF';
  const invalidInstructionsLines = '5 F\r\n1 2 N\nLFLFLFLFF\r\n3 3 E\r\nFFRFFRFRRF\r\n';
  const invalidMowerPositionInstructions = '5 5\r\n1 X N\r\nLFLFLFLFF\r\n3 3 E\r\nFFRFFRFRRF';
  const invalidMowerCommandInstructions = '5 5\r\n1 2 N\r\nLFXFLFLFF\r\n3 3 E\r\nFFRFFRFRRF';

  it('should create an instance', () => {
    expect(new InstructionParser(validInstructions)).toBeTruthy();
  });

  it('shoud throw ' + Constants.invalidInstructionLinesCount, () => {
    expect(() => new InstructionParser(invalidInstructionsLines)).toThrow(new Error(Constants.invalidInstructionLinesCount));
  });

  it('shoud throw ' + Constants.invalidLawnSizeInstructions, () => {
    expect(() => new InstructionParser(invalidLanwSizeInstructions)).toThrow(new Error(Constants.invalidLawnSizeInstructions));
  });

  it('shoud throw ' + Constants.invalidMowerPositionInstructions + '2', () => {
    expect(() => new InstructionParser(invalidMowerPositionInstructions))
                      .toThrow(new Error(Constants.invalidMowerPositionInstructions + '2'));
  });

  it('shoud throw ' + Constants.invalidMowerCommandInstructions + '2', () => {
    expect(() => new InstructionParser(invalidMowerCommandInstructions))
                      .toThrow(new Error(Constants.invalidMowerCommandInstructions + '3'));
  });

  it('correctly parsed lawn size (5 5)', () => {
    const parser =  new InstructionParser(validInstructions);
    const result = parser.lawnSize.height === 5 && parser.lawnSize.width === 5;

    expect(result).toBeTruthy();
  });

  it('correctly parsed mower 1 positions', () => {

    const parser =  new InstructionParser(validInstructions);
    const mowerInst1 = parser.mowerInstructions[0];

    const result = mowerInst1.position.x === 1 &&
                   mowerInst1.position.y === 2 &&
                   mowerInst1.orientation === 'N';
    expect(result).toBe(true);
  });

  it('correctly parsed mower 2 positions', () => {
    const parser =  new InstructionParser(validInstructions);
    const mowerInst = parser.mowerInstructions[1];

    const result = mowerInst.position.x === 3 &&
                   mowerInst.position.y === 3 &&
                   mowerInst.orientation === 'E';
    expect(result).toBe(true);
  });
});

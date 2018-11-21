import { InstructionValidator } from './instruction-validator';

describe('InstructionValidator', () => {

  it('correct lawn size (4 6)', () => {
    const result = InstructionValidator.checkLawnSizeInstructions('4 6');
    expect(result).toBe(true);
  });

  it('incorrect lawn size (-4 6)', () => {
    const result = InstructionValidator.checkLawnSizeInstructions('-4 6');
    expect(result).toBe(false);
  });

  it('incorrect lawn size (4 -6)', () => {
    const result = InstructionValidator.checkLawnSizeInstructions('4 -6');
    expect(result).toBe(false);
  });

  it('incorrect lawn size (X 6)', () => {
    const result = InstructionValidator.checkLawnSizeInstructions('X 6');
    expect(result).toBe(false);
  });

  it('incorrect lawn size (6 X)', () => {
    const result = InstructionValidator.checkLawnSizeInstructions('6 X');
    expect(result).toBe(false);
  });

  it('incorrect lawn size (X X)', () => {
    const reuslt = InstructionValidator.checkLawnSizeInstructions('X X');
    expect(reuslt).toBe(false);
  });

  it('correct command (L)', () => {
    const reuslt = InstructionValidator.isValidCommand('L');
    expect(reuslt).toBe(true);
  });

  it('correct command (R)', () => {
    const reuslt = InstructionValidator.isValidCommand('R');
    expect(reuslt).toBe(true);
  });

  it('correct command (F)', () => {
    const reuslt = InstructionValidator.isValidCommand('F');
    expect(reuslt).toBe(true);
  });

  it('incorect  command (X)', () => {
    const reuslt = InstructionValidator.isValidCommand('X');
    expect(reuslt).toBe(false);
  });
});

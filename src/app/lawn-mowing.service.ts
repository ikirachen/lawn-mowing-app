import { Injectable } from '@angular/core';
import { Lawn } from 'src/lib/lawn/lawn';
import { Mower } from 'src/lib/mower/mower';
import { Gardener } from 'src/lib/gardener/gardener';
import { InstructionParser } from '../lib/instruction-parser/instruction-parser';
import { Constants } from '../lib/utils/constants';

@Injectable({ providedIn: 'root' })
export class LawnMowingService {
  constructor() {
  }

  public mow(instruction: string): string {
    const instructionParser = new InstructionParser(instruction);
    const lawn = new Lawn(instructionParser.lawnSize);
    let output = '';

    for (const mowerInstr of instructionParser.mowerInstructions) {
      const mower = new Mower(mowerInstr.instruction, mowerInstr.orientation, mowerInstr.position);
      const gardner = new Gardener(mower, lawn);
      gardner.mow();

      if (output !== '') {
        output += Constants.newLine;
      }

      output += mower.toString();
    }

    return output;
  }
}

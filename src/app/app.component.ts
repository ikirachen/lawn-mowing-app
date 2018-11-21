import { Component } from '@angular/core';
import { LawnMowingService } from './lawn-mowing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public message: string;
  public messageStyles: Object;
  private outputFileName = 'output.txt';
  private successMessage = 'Mowing succeeded !';

  constructor(private lawnMowingService: LawnMowingService) {
    this.title = 'Lawn mowing ';
    this.message = '';
    this.messageStyles = new Object();
  }

  handleFileInput(files: FileList) {

      const file = files.item(0);
      const fileReader = new FileReader();

      fileReader.onload = () => {
        try {

          const output = this.lawnMowingService.mow(fileReader.result.toString());
          const blob = new Blob([output]);
          const a = document.createElement('a');

          a.href = URL.createObjectURL(blob);
          a.download = this.outputFileName;

          a.click();
          this.message = this.successMessage;
          this.messageStyles = this.getSuccessMessgageStyles();

        } catch (e) {
          this.message = e.message;
          this.messageStyles = this.getErrorMessgageStyles();
        }
    };

    fileReader.readAsText(file);
  }

  private getErrorMessgageStyles(): Object {
    return {
      'color': 'red'
    };
  }

  private getSuccessMessgageStyles(): Object {
    return {
      'color': 'green'
    };
  }
}

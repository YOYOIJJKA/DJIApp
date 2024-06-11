import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {
  showExplorationTip: boolean = false;
  showUsageTip: boolean = false;

  showBlock: boolean = false;

  toggleShow() {
    this.showBlock = !this.showBlock;
  }
}

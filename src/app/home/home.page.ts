import { Component, ViewChild } from '@angular/core';
import { IonAccordion, IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonAccordionGroup) accordionGroup!: IonAccordionGroup;
  selection = '';

  constructor() {}

  closeAccodion() {
    this.accordionGroup.value = 'frameworks';
  }
  toggleSection() {
    this.accordionGroup.value = 'languages';
   }

}

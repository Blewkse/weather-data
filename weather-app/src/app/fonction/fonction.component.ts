import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.component.html',
  styleUrls: ['./fonction.component.css'],
})
export class FonctionComponent {
  @Input() Id: number = 0;
}

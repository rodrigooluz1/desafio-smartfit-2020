import { Component, Input, OnInit } from '@angular/core';
import { Locations } from 'src/app/types/locations.interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardItem!: Locations;

  ngOnInit(): void {
  }

}

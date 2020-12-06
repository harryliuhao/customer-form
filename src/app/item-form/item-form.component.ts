import { Component, OnInit } from '@angular/core';
import {Iitem} from './item'


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  pageTitle: string='Item Locations';
  listFilter: string = 'cart';
  items: Iitem[]=[
    {
    "itemId": 1,
    "itemName": "Leather Gloves",
    "room": "basement",
    "place": "closet",
    "updateDate": "March 19, 2020",
    "description": "bought at Costco",
    "quantity": 2
  },
  {
    "itemId": 2,
    "itemName": "fiber towels",
    "room": "basement",
    "place": "ledder",
    "updateDate": "March 19, 2020",
    "description": "used",
    "quantity": 3
  },
    {
    "itemId": 3,
    "itemName": "head lamp",
    "room": "garage",
    "place": "board",
    "updateDate": "October 19, 2020",
    "description": "new",
    "quantity": 1
  },
    {
    "itemId": 4,
    "itemName": "head lamp",
    "room": "basement",
    "place": "board",
    "updateDate": "October 19, 2020",
    "description": "new",
    "quantity": 2
  }
  ];
  constructor() {

   };

  ngOnInit() {
  }

}
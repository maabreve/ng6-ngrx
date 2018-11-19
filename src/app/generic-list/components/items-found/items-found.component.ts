import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-found',
  templateUrl: 'items-found.component.html',
  styleUrls: ['items-found.component.css']
})

export class ItemsFoundComponent implements OnInit {
  @Input() items: number;

  constructor() {
  }

  ngOnInit() {

  }
}


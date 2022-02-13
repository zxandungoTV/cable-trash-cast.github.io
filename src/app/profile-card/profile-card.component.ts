import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input()
  name!: any;
  @Input()
  links!: any;
  @Input()
  role!: any;
  @Input()
  image!: any;
  constructor() { }

  ngOnInit(): void {
  }

}

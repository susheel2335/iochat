import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-base',
  templateUrl: './user-base.component.html',
  styleUrls: ['./user-base.component.scss']
})
export class UserBaseComponent implements OnInit {

  title = 'Users';

  constructor() { }

  ngOnInit() {
  }

}

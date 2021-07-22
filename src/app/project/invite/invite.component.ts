import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: "tim"
    },
    {
      id: 2,
      name: "dora"
    },
    {
      id: 1,
      name: "tony"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  displayUser(user:{id:string; name:string}) {
    return user ? user.name:"";
  }

  onClick() {
    
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
@Input()  user: any;

ngOnInit(){
  console.log('ngOnInit :', this.user );
  
}
}

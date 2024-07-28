import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})


export class UsersListComponent implements OnInit {
  usersList: any;

  usersList$!: Observable<any>;
  constructor(private  http: HttpClient){
    
  }

  ngOnInit(){
    this.usersList$ = this.http.get('https://reqres.in/api/users').pipe(
      map((obj:any)=> obj.data)
    ); 
  }

  

}

import { Component, OnInit } from '@angular/core';
import {Store,State} from "@ngrx/store";
import {Observable, from} from "rxjs";
import * as userLogins from '../_actions/userAction';
import {UserState, getLogin} from '../_reducers'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  dataUser:any=[]
    constructor(private _store:Store<UserState>,private router:Router){
        this._store.select(getLogin).subscribe(item=>{
             this.dataUser = item;
             console.log(item)
        });
    }
  ngOnInit() {
  }
    logout = ()=>{
        this._store.dispatch(new userLogins.LogoutLoginAction);
        this.router.navigate(['/login']);
    }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontTeste';

  users: User
  constructor(private app : AppService) {
    this.listar()
   }

  ngOnInit() {}

  listar() {
    this.app.listar().subscribe((res : User) => {
      this.users = res
      console.log('Variavel que preenchemos => ', this.users)
      console.log('A nossa resposta =>', res)
    }, err => {
      console.error(err)
    })
  }
}

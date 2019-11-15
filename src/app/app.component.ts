import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontTeste';

  users : any
  constructor(private app : AppService) {
    this.listar()
   }

  ngOnInit() {}

  listar() {
    this.app.listar().subscribe(res => { 
      this.users = res
      console.log(this.users)
    })
  }
}

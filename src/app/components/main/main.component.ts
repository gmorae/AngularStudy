import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users : any
  constructor(private app : AppService) {
    this.listar()
   }

  ngOnInit() {
  }

  listar() {
    this.app.listar().subscribe(res => { 
      this.users = res
      console.log(this.users)
    })
  }
}

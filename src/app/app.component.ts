import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractice';
  name = 'Vinay';
  address: any = {
    city: "Dhule",
    state: "maharashtra",
    country: "India"
  }
  skills: string[] = ['html','css', 'angular', 'bootstrap', 'Typescript']
  salary: number= 20000;
  todaysDate = new Date();
  ngifdemo =true;
  message = true;
  cityname: string= "Mumbai";
  customerList:customer[]=[
    {customerName:'david', gender:'male'},
    {customerName:'luna', gender:'female'}
  ]
  size=100002434;

  clicked=false;
  clickme(){
    this.clicked=!this.clicked;
  }
 firstname="";
 submit(){
  console.log(this.firstname);
 }
}
export interface customer{
  customerName:string,
  gender:string
}


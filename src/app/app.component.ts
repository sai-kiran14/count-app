import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter Application';

  count:number = 0;
  inc = ()=>{
    if(this.count==10){
      this.count=this.count
    }else
    this.count=this.count+1;
  }
  dec =()=>{
    if(this.count==0){
      this.count=0
    }else
    this.count=this.count-1;
  }
  res =()=>{
    this.count=0
  }
}

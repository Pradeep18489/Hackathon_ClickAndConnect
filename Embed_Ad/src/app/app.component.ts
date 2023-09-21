import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Embed_Ad';
  myControl = new FormControl();
  options:any;
  imageName:string = "";
  lifeEventName:string="";
  ngOnInit() {
    this.options = ['One', 'Two', 'Three'];
  }

  Search(){
    this.SearchImage();
  }

  private SearchImage(){
    const imagePath = "../assets/images/";
    switch(this.lifeEventName.toLowerCase()){
      case "your marriage":
        this.imageName = `${imagePath}adoption (2).jpg`
      }
  }
}

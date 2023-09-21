import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Embed_Ad';
  myControl = new FormControl();
  options: any;
  imageName: string = "";
  lifeEventName: string = "";
  caption: string="";
  ngOnInit() {
    this.options = ['One', 'Two', 'Three'];
  }

  Search() {
    this.SearchImage();
  }

  private SearchImage() {
    const imagePath = "../assets/images/";
    switch (this.lifeEventName.toLowerCase()) {
      case "your marriage":
        this.imageName = `${imagePath}beautiful-couple-having-their-wedding-beach.jpg`
        this.caption = 'Looking to get married?';
        break;
      case "first anniversary of your marriage":
        this.imageName = `${imagePath}anniversary celebration-1.jpg`
        this.caption = 'Celebrating your anniversary?';
        break;
      case "birth of your child":
        this.imageName = `${imagePath}child-birth-1.jpg`
        this.caption = 'Planning a family?'
        break;
      case "increase in salary":
        this.imageName = `${imagePath}salary-1.jpg`
        this.caption = 'Got a recent Promotion ?'
        break;
      case "critical illness":
        this.imageName = `${imagePath}critical-illness-1.jpg`
        this.caption = 'Life can throw different challenges at you!'
        break;
      case "tpd":
        this.imageName = `${imagePath}disability-1.jpg`
        this.caption = 'Life can throw different challenges at you!'
        break;
      case "disability":
        this.imageName = `${imagePath}disability-1.jpg`
        this.caption = 'Life can throw different challenges at you!'
        break;
      case "your child starts secondary school":
        this.imageName = `${imagePath}child-teen-age-12-2.jpg`
        this.caption = 'Kids grow fast! '
        break;
      case "income Protection":
        this.imageName = `${imagePath}salary-1.jpg`
        this.caption = 'Life can throw different challenges at you!'
        break;
        case "new mortgage for the purchase of your home ":
        this.imageName = `${imagePath}new home mortgage (2).jpg`
        this.caption = 'Planning to buy a house?'
        break;
      default:
        break;
    }
  }
}

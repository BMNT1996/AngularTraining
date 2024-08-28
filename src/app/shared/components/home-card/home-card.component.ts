import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})

export class HomeCardComponent implements OnInit{
  @Input() cardName: string = "Undefined";
  @Input() cardPath: string = "Undefined";

  cardColor: string = `rgb(255,255,255)`;

  ngOnInit(): void {
    this.cardColor = this.randomColor();
  }
  
  randomColor() : string {
    var red = Math.random()*255;
    var green = Math.random()*255;
    var blue = Math.random()*255;
    
    //Ensure light background to contrast with text
    if(red + green + blue <= 255){
      return this.randomColor();
    }

    return `rgb(${red},${green},${blue})`; 
  }
  

}

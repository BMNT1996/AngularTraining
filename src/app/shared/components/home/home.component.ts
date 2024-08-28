import { Component, OnInit } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import appConfig from '../../../app.config.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  

  cards: Cards[] = [];
  
  ngOnInit(): void {
    this.cards = appConfig.cards;
  }

}

interface Cards {
  name: string;
  path: string
}

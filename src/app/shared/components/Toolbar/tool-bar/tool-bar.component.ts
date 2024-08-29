import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {
    @Input() title: string = "Toolbar Exercise";
    @Input() menus: Menu[] = [
        {title: "Google", link: "http://www.google.com"},
        {title: "Facebook", link: "http://www.facebook.com"},
        {title: "Instagram", link: "http://www.instagram.com"},
        {title: "LinkedIn", link: "http://www.linkedin.com"},
        {title: "Angular", link: "http://www.angular.dev"}
    ];
}

interface Menu {
  title: string;
  link: string
}
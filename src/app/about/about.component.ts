import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  angularImg = '../../assets/angular-logo.svg.png';
  vueImg = '../../assets/vuejs-logo.png';
  reactImg = '../../assets/react-logo.svg.png';
  htmlImg = '../../assets/html-logo.jpeg';
  cssImg = '../../assets/css-logo.jpeg';
  uxiImg = '../../assets/uxi-logo.jpeg';
  xdImg = '../../assets/xd-logo.png';
  figmaImg = '../../assets/figma-logo.png';
  aiImg = '../../assets/ai-logo.png';
  gitImg = '../../assets/git.png';
  terminalImg = '../../assets/terminal-logo.png';

  technologies = [
    {
      img: this.vueImg,
      name: 'VueJs',
      width: '15px'
    },
    {
      img: this.angularImg,
      name: 'Angular',
      width: '20px'
    },
    {
      img: this.reactImg,
      name: 'ReactJs',
      width: '20px'
    },
    {
      img: this.htmlImg,
      name: 'HTML',
      width: '18px'
    },
    {
      img: this.cssImg,
      name: 'CSS',
      width: '18px'
    },
    {
      img: this.uxiImg,
      name: 'UX/UI Design',
      width: '18px'
    }
  ]

  tools = [
    {
      img: this.gitImg,
      name: 'Git',
      width: '16px'
    },
    {
      img: this.terminalImg,
      name: 'Terminal',
      width: '16px'
    },
    {
      img: this.xdImg,
      name: 'Adobe XD',
      width: '20px'
    },
    {
      img: this.figmaImg,
      name: 'Figma',
      width: '20px'
    },
    {
      img: this.aiImg,
      name: 'Adobe AI',
      width: '20px'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

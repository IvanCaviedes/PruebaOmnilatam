import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {

  @Input() color: string = "blanco";
  constructor() { }

  banners: any = {
    "rojo": {
      img: "https://s1.1zoom.me/big0/769/Mountains_Jeep_Jeep_Wrangler_JL_2018_2.0_AT_612103_1280x853.jpg"
    },
    "blanco": {
      img: "https://s1.1zoom.me/big0/157/Toyota_Toyota_Sequoia_TRD_Pro_2022_SUV_White_611932_1280x853.jpg"
    },
    "amarillo": {
      img: "https://s1.1zoom.me/big0/661/Audi_R8_V10_performance_RWD_2022_Yellow_Metallic_612027_1280x853.jpg"
    },
    "azul": {
      img: "https://s1.1zoom.me/big0/829/Audi_A4_Avant_S_line_competition_plus_(Worldwide)_605410_1280x853.jpg"
    }
  }

  ngOnInit(): void {
  }

}

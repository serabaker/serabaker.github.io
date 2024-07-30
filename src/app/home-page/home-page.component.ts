import { Component, OnInit } from '@angular/core';
import { WorldbankService } from '../worldbank.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  sidebarData: any = null;

  constructor(private worldBankService: WorldbankService) {}

  ngOnInit(): void {}

  onMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.nodeName === 'path') {
      const countryName = target.id;
      this.fetchCountryData(countryName);
    }
  }

  fetchCountryData(countryName: string): void {
    this.worldBankService.getCountryData(countryName).subscribe(
      (data) => {
        if (data && data[1]) {
          this.sidebarData = {
            name: data[1][0].name,
            capitalCity: data[1][0].capitalCity,
            region: data[1][0].region.value,
            incomeLevel: data[1][0].incomeLevel.value,
            longitude: data[1][0].longitude,
            latitude: data[1][0].latitude,
          };
          // this.fetchCountryPopulation(countryName);
          console.log('sidebarData:', this.sidebarData);
        }
      },
      (error) => {
        console.log("Couldn't fetch country data", error);
      }
    );
  }
}

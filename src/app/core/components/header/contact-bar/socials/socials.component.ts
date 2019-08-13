import { Component, OnInit } from '@angular/core';
import { SocialsService } from 'src/app/core/services/socials.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {
  socials: Array<object>;
  lastLink: number;
  constructor(private socialsService: SocialsService) {}

  ngOnInit() {
    this.socialsService.getSocialLinks().subscribe(data => {
      this.socials = data;
      this.lastLink = this.socials.length - 1;
    });
  }
}
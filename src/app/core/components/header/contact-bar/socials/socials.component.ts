import { Component, OnInit } from '@angular/core';
import { SocialsService } from '@core/services/socials.service';
import { SocialIcon } from '@app/shared/interfaces/social-icon.interface';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  socials: SocialIcon[];
  lastLink: number;
  constructor(private socialsService: SocialsService) {}

  ngOnInit() {
    this.socialsService.getSocialLinks().subscribe(data => {
      this.socials = data;
      this.lastLink = this.socials.length - 1;
    });
  }
}

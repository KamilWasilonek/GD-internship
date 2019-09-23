import { Component, OnInit } from '@angular/core';

import { SocialIcon } from '@app/shared/interfaces/social-icon.interface';
import { SocialsService } from '@app/shared/services/socials.service';
import { trackElement } from '@app/shared/functions/track-element';
@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  socials: SocialIcon[];
  lastLink: number;

  trackSocials = trackElement;

  constructor(private readonly socialsService: SocialsService) {}

  ngOnInit(): void {
    this.socialsService.getSocialLinks().subscribe(data => {
      this.socials = data;
      this.lastLink = this.socials.length - 1;
    });
  }
}

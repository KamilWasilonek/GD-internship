import { Component } from '@angular/core';

import { JoinUserService } from '@app/shared/services/join-user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private readonly joinService: JoinUserService) {}

  onSubscribe(): void {
    this.joinService.sendClick();
  }
}

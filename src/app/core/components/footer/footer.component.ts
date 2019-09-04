import { Component, OnInit } from '@angular/core';
import { JoinUserService } from '@app/home-page/components/join-us/join-user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private joinService: JoinUserService) {}

  ngOnInit() {}

  onSubscribe() {
    this.joinService.sendClick();
  }
}

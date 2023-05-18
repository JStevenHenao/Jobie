import { Component } from '@angular/core';
import { ModalService } from '../modals/service/modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  bodyText = 'This text can be updated in modal 1';

  constructor(protected modalService: ModalService) { }
}

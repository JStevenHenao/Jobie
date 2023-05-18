import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'login-modal',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalLoginComponent implements OnInit, OnDestroy {
    @Input() id?: string;
    isOpen = false;
    private element: any;

    constructor(public modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        // add self (this modal instance) to the modal service so it can be opened from any component
        this.modalService.add(this);

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);


    }

    ngOnDestroy() {
        // remove self from modal service
        this.modalService.remove(this);

        // remove modal element from html
        this.element.remove();
    }

    open() {
        this.element.style.display = 'block';
        document.body.classList.add('login-modal-open');
        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('login-modal-open');
        this.isOpen = false;
    }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input('type') type!: string;
  @Input('user') user!: usuario;
  @Output() userUpdated = new EventEmitter();

  constructor() { }

  sendData(): void {
    this.userUpdated.emit(this.user);
  }
}

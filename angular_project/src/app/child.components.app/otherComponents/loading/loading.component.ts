import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  @Input('message') message!: string;
  @Input('m-t') marginTop!: string;
  @Input('f-s') fontSize!: string;
  
}

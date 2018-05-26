import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-emitter-output',
  templateUrl: './event-emitter-output.component.html',
  styleUrls: ['./event-emitter-output.component.css']
})
export class EventEmitterOutputComponent implements OnInit {
  @Output('dataReady') data3 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.data3.emit('hey');
  }

}

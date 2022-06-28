import { Component, Input, OnInit } from '@angular/core';
import { ISubtask } from '../../models/task.model';

@Component({
  selector: 'app-subtask-card',
  templateUrl: './subtask-card.component.html',
  styleUrls: ['./subtask-card.component.scss']
})
export class SubtaskCardComponent implements OnInit {

  @Input() subtask?: ISubtask;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from '../app.interface';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() step$: Observable<Step>;
  @Input() step: Step;

  constructor() { }

  ngOnInit() {
  }
}

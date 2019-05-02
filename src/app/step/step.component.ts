import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from '../app.interface';
import { Store, Select } from '@ngxs/store';
import { UpdateStep } from '../app.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() step: Step;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onUpdate() {
    this.store.dispatch(new UpdateStep());
  }
}

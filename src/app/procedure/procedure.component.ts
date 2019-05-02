import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../app.state';
import { Procedure } from '../app.interface';
import { Observable } from 'rxjs';
import { GetProcedure, UpdateProcedure } from '../app.action';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(AppState.procedure)
  procedure$: Observable<Procedure>;

  ngOnInit() {
    this.store.dispatch(new GetProcedure());
  }

  onUpdate() {
    this.store.dispatch(new UpdateProcedure());
  }

}

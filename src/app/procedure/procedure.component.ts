import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from '../app.state';
import { Procedure } from '../app.interface';
import { Observable } from 'rxjs';
import { GetProcedure } from '../app.action';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  constructor(private store: Store) { }

  procedure$: Observable<Procedure>;

  ngOnInit() {
    this.procedure$ = this.store.select(AppState.model);
    this.procedure$.subscribe((procedure) => console.log('Procedure Updated', procedure));
    this.store.dispatch(new GetProcedure());
  }

}

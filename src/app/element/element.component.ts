import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../app.interface';
import { Store, Selector, Select } from '@ngxs/store';
import { UpdateElement } from '../app.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Select(AppState.element)
  element$: Observable<Element>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onUpdate() {
    this.store.dispatch(new UpdateElement());
  }

}

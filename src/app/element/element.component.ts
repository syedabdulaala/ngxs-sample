import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../app.interface';
import { Store } from '@ngxs/store';
import { UpdateElement } from '../app.action';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element$: Observable<Element>;
  @Input() element: Element;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onUpdate() {
    this.store.dispatch(new UpdateElement());
  }

}

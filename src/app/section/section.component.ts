import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../app.interface';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { UpdateSection } from '../app.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Select(AppState.section)
  section$: Observable<Section>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onUpdate(index: number) {
    this.section$.subscribe((section) => console.log('Section', section));
    this.store.dispatch(new UpdateSection(index));
  }

}

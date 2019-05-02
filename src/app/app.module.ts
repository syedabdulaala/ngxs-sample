import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { SectionComponent } from './section/section.component';
import { StepComponent } from './step/step.component';
import { ElementComponent } from './element/element.component';
import { AppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    ProcedureComponent,
    SectionComponent,
    StepComponent,
    ElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

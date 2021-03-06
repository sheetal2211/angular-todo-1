import {NgModule} from '@angular/core';
import {TodoViewComponent} from './todo-view.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TodoViewService} from './todo-view.service';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgbDropdownModule,
    FormsModule
  ],
  exports: [
    TodoViewComponent
  ],
  bootstrap: [
    TodoViewComponent
  ],
  providers: [
    TodoViewService
  ],
  entryComponents: [
    TodoViewComponent
  ]
})
export class TodoViewModule {
}

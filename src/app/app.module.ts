import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NewTaskComponent } from './shared/components/new-task/new-task.component';
import { TaskListComponent } from './shared/components/task-list/task-list.component';
import { TaskCardComponent } from './shared/components/task-card/task-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './shared/store/reducers/data.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutosizeModule} from 'ngx-autosize';
import { SubtaskCardComponent } from './shared/components/subtask-card/subtask-card.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskCardComponent,
    SubtaskCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AutosizeModule,
    StoreModule.forRoot({ data: dataReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

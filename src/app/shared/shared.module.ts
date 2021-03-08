import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChartComponent } from './components/chart/chart.component';



@NgModule({
  declarations: [HeaderComponent, ToolbarComponent, ChartComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    ToolbarComponent,
    ChartComponent
  ]
})
export class SharedModule { }

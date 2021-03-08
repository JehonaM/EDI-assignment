import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlicesComponent } from './slices/slices.component';
import { SliceCardComponent } from './slices/slice-card/slice-card.component';
import { CreateNewSliceComponent } from './slices/create-new-slice/create-new-slice.component';
import { AddSliceButtonComponent } from './slices/add-slice-button/add-slice-button.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddChannelButtonComponent } from './channels/add-channel-button/add-channel-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    SlicesComponent, 
    SliceCardComponent, 
    CreateNewSliceComponent, 
    ChannelsComponent, 
    ChannelComponent, 
    DashboardComponent,
    AddSliceButtonComponent,
    AddChannelButtonComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild( 
      [{ path: '', component: DashboardComponent },
        {path: 'add', component: CreateNewSliceComponent}
      ])
  ],
  exports: [
    SliceCardComponent,
    SlicesComponent,
    DashboardComponent,
    AddChannelButtonComponent,
    AddSliceButtonComponent,
    ChannelComponent,
    ChannelsComponent,
    CreateNewSliceComponent
  ]
})
export class DashboardModule { }

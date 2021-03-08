import { Component, OnInit } from '@angular/core';
import { Channel} from '../../models/channel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

 
  channelsList: Channel;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.getAllChannels();
  }

  getAllChannels(){
    this.dataService.getAllChannels().subscribe(data => {
    this.channelsList = data;
 
  })
  }
}

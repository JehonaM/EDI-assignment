import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slice } from 'src/app/models/slice';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slices',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.scss']
})
export class SlicesComponent implements OnInit {
  slicesList: Slice ;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getAllSlices();
  }
  
  removeSlice(id){
    this.dataService.deleteSlice(id).subscribe(() => {
    this.getAllSlices();});
   }

  getAllSlices(){
    this.dataService.getAllSlices().subscribe(data => {
    this.slicesList = data;
  
  })
  }

  openCreateForm(){
    this.router.navigateByUrl('/add');
   
  }

}

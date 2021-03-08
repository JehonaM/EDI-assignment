import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-create-new-slice',
  templateUrl: './create-new-slice.component.html',
  styleUrls: ['./create-new-slice.component.scss']
})
export class CreateNewSliceComponent implements OnInit {
  isAddMode: boolean;
  id: string;

  constructor(
    private fb:FormBuilder, 
    private router: Router,  
    private route: ActivatedRoute, 
    private dataService: DataService) { }

    newSliceForm = this.fb.group({
      start: ["",Validators.required],
      end: ["",Validators.required],
      minstart: ["",Validators.required],
      minend:["",Validators.required]
    });
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.dataService.getSlice(this.id)
          .subscribe(x => this.newSliceForm.patchValue(x));
    }
  }

  onSubmit(){
    if (this.isAddMode) {
      this.createSlice();
    } else {
      this.updateSlice();
    }
  }


  private createSlice() {
    this.dataService.createSlice(this.newSliceForm.value)
      .subscribe({
          next: () => {
            this.router.navigateByUrl('/dashboard');
          },
          error: error => {
            console.log(error);
          }
      });
  }

  private updateSlice() {
    this.dataService.updateSlice(this.id, this.newSliceForm.value)
      .subscribe({
          next: () => {
            this.router.navigateByUrl('/dashboard');
          },
          error: error => {
            console.log(error);
          }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

import {JewelleryService} from '../shared/jewellery.service';
import {Jewellery} from '../shared/jewellery.model';

declare var M:any;

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css'],
  providers : [JewelleryService]
})
export class JewelleryComponent implements OnInit {

  constructor(public jewelleryService : JewelleryService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshJewelleryList();
  }


  resetForm(form?: NgForm){
    if(form)
      form.reset();
    
      this.jewelleryService.selectedJewellery={
        _id:"",
        name :"",
        type : null,
        size :"",
        color : "",
        price :null,
        
      }

  }

  onSubmit(form: NgForm){
    if(form.value._id==""){
      this.jewelleryService.postJewellery(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshJewelleryList();
        M.toast({html:'Save successfully',classes:'rounded'});
      });
    }
    else{
      this.jewelleryService.putJewellery(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshJewelleryList();
        M.toast({html:'Updated successfully',classes:'rounded'});
      });

    }
  }

  refreshJewelleryList(){
    this.jewelleryService.getJewelleryList().subscribe((res)=>{
      this.jewelleryService.jewellery=res as Jewellery[];
    });
  }

  onEdit(jewelleryemp:Jewellery){
    this.jewelleryService.selectedJewellery = jewelleryemp;

  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to detele this record ?')==true){
      this.jewelleryService.deleteJewellery(_id).subscribe((res)=>{
        this.refreshJewelleryList();
        this.resetForm(form);
        M.toast({html:'Deleted Successfully',classes:'rounded'})
  
      });
    }
  }

}

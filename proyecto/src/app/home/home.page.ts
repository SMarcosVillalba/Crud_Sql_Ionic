import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  curso:any;
  nombre:any;
  apellido:any;
  students:any=[];
  constructor(
    public _apiService:ApiService
  ) {
    this.getStudents();
  }
  addStudent(){
   // console.log(this.curso,this.nombre,this.apellido);

    let data={
      curso:this.curso,
      nombre:this.nombre,
      apellido:this.apellido
    }
    this._apiService.addStudent(data).subscribe((res:any)=>{
      console.log("SUCCESS ===",res);
      this.curso='';
      this.nombre='';
      this.apellido='';
      this.getStudents();
    },(error:any)=>{
      console.log("ERROR ===",error);
    })
  }


getStudents(){
  this._apiService.getStudents().subscribe((res:any)=>{
    console.log("SUCCESS ===",res);
    this.students=res;
  },(error:any)=>{
    console.log("ERROR ===",error);
  })
}

deleteStudent(id:any){

this._apiService.deleteStudents(id).subscribe((res:any)=>{
  console.log("Sucess");
  this.getStudents();
},(err:any)=>{
  console.log("Error");
})
}

}

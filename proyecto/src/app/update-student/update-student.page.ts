import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id:any;
  curso:any;
  nombre:any;
  apellido:any;
  constructor(

    private route:ActivatedRoute,
    private router:Router,
    private _apiService: ApiService
  ) { 

    this.route.params.subscribe((param:any)=>{
      this.id=param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }

  getStudent(id:any){
    this._apiService.getStudent(id).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      let student=res[0];
      this.curso=student.curso;
      this.nombre=student.nombre;
      this.apellido=student.apellido;
    },(err:any)=>{
      console.log("ERROR",err);
    })
  }


  UpdateStudent(){

    let data={
      curso:this.curso,
      nombre:this.nombre,
      apellido:this.apellido
    }
    this._apiService.updateStudent(this.id,data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/home');
   
    },(err:any)=>{
      console.log("ERROR",err);
    })
  }


  





}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http:HttpClient
  ) { }

  addStudent(data:any){
    return this.http.post('http://localhost/proyectos/create.php',data);
  }



  getStudents(){
    return this.http.get('http://localhost/proyectos/getEstudiante.php');
  }

  deleteStudents(id:any){
    return this.http.delete('http://localhost/proyectos/delete.php?id='+id);
  }


  getStudent(id:any){

    return this.http.get('http://localhost/proyectos/getSingleStudent.php?id='+id);

  }


  updateStudent(id:any,data:any){
    return this.http.put('http://localhost/proyectos/getSingleStudent.php?id='+id,data);
  }
}

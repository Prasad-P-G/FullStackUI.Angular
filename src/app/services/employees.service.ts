import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

    getAllEmployees():Observable<Employee[]>{
      console.warn('service called...');
      return this.http.get<Employee[]>('https://localhost:7131/api/employees');
      // .subscribe((result)=>{
      //   console.warn('service call returned...');        
      //     console.warn(result);
          
      // });
    }
    addEmployee(employee:Employee):Observable<Employee>{
      employee.id ='00000000-0000-0000-0000-000000000000';       
      return this.http.post<Employee>('https://localhost:7131/api/employees',employee);
    }

    getEmployee(id:string):Observable<Employee>{
      return this.http.get<Employee>('https://localhost:7131/api/employees/' + id);
    }

    updateEmployee(employee:Employee):Observable<Employee>{
     return this.http.put<Employee>('https://localhost:7131/api/employees',employee);
    }

    deleteEmployee(id:string):Observable<Employee>{
      return this.http.delete<Employee>('https://localhost:7131/api/employees/' + id);   

    }
}

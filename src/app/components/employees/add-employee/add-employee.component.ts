import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { walkUpBindingElementsAndPatterns } from 'typescript';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private router:Router , private service:EmployeesService){}

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    department: '',
    phone: 0,
    salary: 0
  }

  AddEmployee(){
    this.service.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) =>{
        console.warn('Employee added');  
        console.warn(employee);
        this.router.navigate(['/employees'])
      },
      error:(response)=>{
        console.warn(response);
      }
    })
  }

}

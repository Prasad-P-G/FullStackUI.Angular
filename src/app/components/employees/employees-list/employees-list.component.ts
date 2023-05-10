import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  deleteId: string | undefined

  deleteEmployeeTitle: string = 'Delete Employee'
  popOverMessage: string = 'Are you sure , want to delete employee?'
  cancelClicked: boolean = false;
  constructor(private employee: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    console.warn('Inside employee component...');
    this.getAllEmployee();   
  }

  getAllEmployee(){
    this.employee.getAllEmployees()
    .subscribe({
      next: (employees) => {
        // console.warn(employees);          
        this.employees = employees;
      },
      error: (response) => {
        console.warn(response);
      }
    })
  }
  deleteEmployee(id: string) {

   // console.warn(id);
    
    this.employee.deleteEmployee(id)
      .subscribe({
        next: (result) => {
          if(result){
            console.warn('deleted employee');            
           this.getAllEmployee();
          }
        },
        error : (response)=>{
          console.warn('In deleting error loop');          
        }      
        
      })
  }
}

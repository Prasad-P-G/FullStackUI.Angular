import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EmployeesService,
    private router:Router) { }

  EditEmployeeRequest: Employee = { 
    id: '',
    name: '',
    email: '',
    department: '',
    phone: 0,
    salary: 0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (result) => {
        var id = result.get('id')
        if (id) {
          this.service.getEmployee(id)
            .subscribe({
              next: (result) => {
                if (result) {
                  this.EditEmployeeRequest = result;
                }
              },
              error: (response) => {

              }
            })
        }
      },
      error: (response) => {

      }
    });
  }

  DeleteEmployee(id:string){
    
    this.service.deleteEmployee(id)
    .subscribe({
      next : (Response)=>{
          this.router.navigate(['/employees']);
      },
      error : (errorResult)=>{

      }

    })
  }

  SaveEmployee() {
    if(this.EditEmployeeRequest){
      this.service.updateEmployee(this.EditEmployeeRequest)
      .subscribe({
        next : (result)=>{
            if(result){
              this.router.navigate(['/employees'])
            }
        },
        error: (response)=>{

        }

      });      
    }
  }

}

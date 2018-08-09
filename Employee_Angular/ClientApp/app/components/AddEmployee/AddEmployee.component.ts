import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, Form, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDataComponent } from '../getemployee/getemployee.component';
import { EmployeeService } from '../../services/empservice.service';
@Component({
    selector: 'addemployee',
    templateUrl: './addemployee.component.html'
})
export class createemployee implements OnInit {
    employeeForm: FormGroup;
    title: string = "Create";
    id: number = 0;
    errorMessage: any;
    public deparments: DepartmentList[];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _router: Router) {

        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.employeeForm = this._fb.group({
            id: 0,
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            departmentId: ['', [Validators.required]],
            emailId: ['', [Validators.required, Validators.email]],
            address: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            department: []
        })
    }

    ngOnInit() {
        this.getDepartment();
        if (this.id > 0) {
            this.title = "Edit";
            this._employeeService.getEmployeeById(this.id)
                .subscribe(resp => this.employeeForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    getDepartment() {
        this._employeeService.getDepartment().subscribe(data => this.deparments = data)
        console.log(this.deparments);
    }
    save() {
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/get-employee']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/get-employee']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/get-employee']);
    }
    get firstName() { return this.employeeForm.get('firstName'); }
    get lastName() { return this.employeeForm.get('lastName'); }
    get departmentId() { return this.employeeForm.get('departmentId'); }
    get emailId() { return this.employeeForm.get('emailId'); }
    get address() { return this.employeeForm.get('address'); }
    get qualification() { return this.employeeForm.get('qualification'); }
}

interface DepartmentList {
    Id: number;
    deparmentName: string;
} 
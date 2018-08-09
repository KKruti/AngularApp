import { Component, OnInit } from "@angular/core";
import { FormGroup, Form, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { departmentData } from '../getdepartment/getdepartment.component';
import { EmployeeService } from "../../services/empservice.service";

@Component({
    selector: 'adddepartment',
    templateUrl: './adddepartment.component.html'
})
export class AddDepartment implements OnInit {
    departmentForm: FormGroup;
    title: string = "Create";
    id: number = 0;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.departmentForm = this._fb.group({
            id: 0,
            departmentName: ['', [Validators.required]]
        })
    }
    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._employeeService.getDepartmentById(this.id).subscribe(resp => this.departmentForm.setValue(resp),
                error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.departmentForm.valid)
            return;

        if (this.title == "Create") {
            this._employeeService.saveDepartment(this.departmentForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/get-department']);
                }, error => this.errorMessage = error)
        }
        if (this.title == "Edit") {
            this._employeeService.updateDepartment(this.departmentForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/get-department']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/get-department']);
    }
    get departmentName() { return this.departmentForm.get('departmentName'); }
}

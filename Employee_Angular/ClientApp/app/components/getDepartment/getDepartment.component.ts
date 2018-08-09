import {
    Component,
    Inject
} from '@angular/core';
import {
    Http,
    Headers
} from '@angular/http';

import {
    Router,
    ActivatedRoute
} from '@angular/router';

import { EmployeeService } from "../../services/empservice.service";

@Component({
    selector: 'getdepartment',
    templateUrl: './getdepartment.component.html'
})
export class departmentData {
    public departmentList: iDepartmentList[];

    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.getDepartment();
    }
    getDepartment() {
        this._employeeService.getDepartment().subscribe(data => this.departmentList = data)
    }
    deleteDepartment(id) {
        var ans = confirm("Do you want to delete Department with Id: " + id);
        if (ans) {
            this._employeeService.deleteDepartment(id).subscribe((data) => {
                this.getDepartment();
            }, error => console.error(error))
        }
    }
}
interface iDepartmentList {
    Id: number,
    DepartmentName: string
}
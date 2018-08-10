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
import { DepartmentService } from './department.service';

@Component({
    selector: 'get-department',
    templateUrl: './get-department.component.html'
})
export class GetDepartmentComponent {
    public departmentList: iDepartmentList[];

    constructor(public http: Http, private _router: Router, private _departmentService: DepartmentService) {
        this.getDepartment();
    }
    getDepartment() {
        this._departmentService.getDepartment().subscribe(data => this.departmentList = data)
    }
    deleteDepartment(id) {
        var ans = confirm("Do you want to delete Department with Id: " + id);
        if (ans) {
            this._departmentService.deleteDepartment(id).subscribe((data) => {
                this.getDepartment();
            }, error => console.error(error))
        }
    }
}
interface iDepartmentList {
    Id: number,
    DepartmentName: string
}
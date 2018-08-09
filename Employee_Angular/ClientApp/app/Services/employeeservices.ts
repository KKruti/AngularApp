import {
    Injectable,
    Inject
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import {
    Router
} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getEmployees() {
        return this._http.get(this.myAppUrl + 'api/Employees/GetEmployees').map((response: Response) => response.json()).catch(this.errorHandler);
    }
    getEmployeeById(EmployeeID: number) {
        return this._http.get(this.myAppUrl + "api/Employees/GetEmployeeDetail/" + EmployeeID).map((response: Response) => response.json()).catch(this.errorHandler)
    }
    deleteEmployee(EmployeeID: number) {
        return this._http.delete(this.myAppUrl + "api/Employees/DeleteEmployee/" + EmployeeID).map((response: Response) => response.json()).catch(this.errorHandler);
    }
    updateEmployee(employee: any) {
        return this._http.put(this.myAppUrl + 'api/Employees/EditEmployee', employee).map((response: Response) => response.json()).catch(this.errorHandler);
    }
    saveEmployee(employee: any) {
        return this._http.post(this.myAppUrl + 'api/Employees/AddEmployee', employee).map((response: Response) => response.json()).catch(this.errorHandler)
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}  
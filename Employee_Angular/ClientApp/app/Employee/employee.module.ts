import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { appRoutes } from "../app-routing.module";
import { NgModule } from "@angular/core";
import { GetEmployeeComponent } from "./get-employee.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddEmployeeComponent } from "./add-employee.component";
import { EmployeeService } from "./employee.service";

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [GetEmployeeComponent, AddEmployeeComponent],
    providers: [EmployeeService]
})

export class EmployeeModule { };
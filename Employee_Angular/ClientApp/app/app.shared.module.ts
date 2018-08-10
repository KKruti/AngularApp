import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Employee/add-employee.component';
import { GetDepartmentComponent } from './Department/get-department.component';
import { AddDepartmentComponent } from './Department/add-department.component';
import { GetEmployeeComponent } from './Employee/get-employee.component';
import { EmployeeService } from './Employee/employee.service';
import { DepartmentService } from './Department/department.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        GetEmployeeComponent,
        AddEmployeeComponent,
        GetDepartmentComponent,
        AddDepartmentComponent
    ],
    providers: [EmployeeService, DepartmentService]
})
export class AppModuleShared {
}

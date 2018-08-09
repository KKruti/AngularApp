import { NgModule } from '@angular/core';
import {
    EmployeeService
} from './services/empservice.service';
import {
    EmployeeDataComponent
} from './components/getemployee/getemployee.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { createemployee } from './components/addemployee/AddEmployee.component'
import { departmentData } from './components/getDepartment/getDepartment.component';
import { AddDepartment } from './components/addDepartment/addDepartment.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        EmployeeDataComponent,
        createemployee,
        departmentData,
        AddDepartment
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'add-employee', component: createemployee },
            { path: 'employee/edit/:id', component: createemployee },
            { path: 'department/edit/:id', component: AddDepartment },
            {
                path: 'get-employee',
                component: EmployeeDataComponent
            },
            {
                path: 'get-department',
                component: departmentData
            },
            {
                path: 'add-department',
                component: AddDepartment
            },
            { path: '**', redirectTo: 'home' },
        ])
    ],
    providers: [EmployeeService]
})
export class AppModuleShared {
}

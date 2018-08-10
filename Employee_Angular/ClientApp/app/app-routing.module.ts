import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { AddEmployeeComponent } from './Employee/add-employee.component';
import { AddDepartmentComponent } from './Department/add-department.component';
import { GetDepartmentComponent } from './Department/get-department.component';
import { GetEmployeeComponent } from './Employee/get-employee.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'add-employee', component: AddEmployeeComponent },
    { path: 'employee/edit/:id', component: AddEmployeeComponent },
    { path: 'department/edit/:id', component: AddDepartmentComponent },
    {
        path: 'get-employee', component: GetEmployeeComponent
    },
    {
        path: 'get-department', component: GetDepartmentComponent
    },
    {
        path: 'add-department', component: AddDepartmentComponent
    },
    { path: '**', redirectTo: 'home' },
];


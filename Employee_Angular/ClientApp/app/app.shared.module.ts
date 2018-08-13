import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DepartmentModule } from './Department/department.module';
import { EmployeeModule } from './Employee/employee.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        DepartmentModule,
        EmployeeModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
    ],
})
export class AppModuleShared {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app-routing.module';
import { GetDepartmentComponent } from './get-department.component';
import { AddDepartmentComponent } from './add-department.component';
import { DepartmentService } from './department.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [RouterModule, SharedModule, FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [GetDepartmentComponent, AddDepartmentComponent],
    providers: [DepartmentService]
})

export class DepartmentModule { };

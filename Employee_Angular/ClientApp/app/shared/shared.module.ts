import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app-routing.module';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [CommonModule],
    declarations: [],
    providers: []
})

export class SharedModule { };

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { notFoundPageComponent, noAccessComponent, loginComponent } from '.';
import { RouterModule } from '@angular/router';
import { coreModule } from '../common/core.module';
import { sharedLibModule } from '../common/shared.lib.module';
@NgModule({
    declarations: [
        noAccessComponent,
        notFoundPageComponent,
        loginComponent
    ],
    imports: [CommonModule, RouterModule, coreModule, sharedLibModule],
    exports: [
        noAccessComponent,
        notFoundPageComponent,
        loginComponent
    ]
})
export class generalModule { }
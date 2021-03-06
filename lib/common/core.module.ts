import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { haspermeationDirective } from './cus-directive/haspermeationn.directive';
import { chassisNumberPanel } from './cus-component/chassisNumberPanel';
import { inputCustompanel } from './cus-component/input.component';
import { titlePageComponent } from './layouts/titlePage/titlePage.component';
import { breadCrumbComponent } from './layouts/breadCrumb/breadCrumb.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedLibModule } from './shared.lib.module';
const declaration = [
    breadCrumbComponent,
    haspermeationDirective,
    chassisNumberPanel,
    titlePageComponent,
    inputCustompanel
];


export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return 'translation is not available';
    }
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '/resources.json');
}

@NgModule({
    declarations: [declaration],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        sharedLibModule,
        TranslateModule.forRoot({
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            //isolate: true this is just for child not root
        })
    ],
    exports: [TranslateModule, sharedLibModule, declaration],

})
export class coreModule { }
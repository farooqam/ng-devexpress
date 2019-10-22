import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DxDataGridModule, DxFormModule, DxPopupModule, DxFilterBuilderModule, DxTagBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { InMemoryHeroService } from './in-memory-hero-service';
import { AliasListComponent } from './alias-list/alias-list.component';
import { FilterEditorComponent } from './filter-editor/filter-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AliasListComponent,
    FilterEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryHeroService),
    DxDataGridModule,
    DxFormModule,
    DxPopupModule,
    DxFilterBuilderModule,
    DxTagBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

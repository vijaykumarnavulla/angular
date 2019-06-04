import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyServiceDataService } from './my-service-data.service';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { ImageHeartTextComponentComponent } from './image-heart-text-component/image-heart-text-component.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyUnsafePipe } from './my-unsafe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CardComponentComponent,
    ImageHeartTextComponentComponent,
    TableComponentComponent,
    MyUnsafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MyServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

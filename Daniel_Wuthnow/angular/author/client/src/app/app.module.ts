import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AuthorService } from './author.service';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorNewComponent,
    AuthorEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

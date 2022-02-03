import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './child.components.app/home/home.component';
import { UsersComponent } from './child.components.app/users/users.component';
import { LoadingComponent } from './child.components.app/otherComponents/loading/loading.component';
import { NotFoundComponent } from './child.components.app/otherComponents/not-found/not-found.component';
import { ModalComponent } from './child.components.app/otherComponents/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    LoadingComponent,
    NotFoundComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

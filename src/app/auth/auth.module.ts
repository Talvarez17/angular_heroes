import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { ListaComponent } from './pages/lista/lista.component';
import { GestorPermisosComponent } from './pages/gestor-permisos/gestor-permisos.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ListaComponent,
    GestorPermisosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    DialogModule,
    RadioButtonModule,
    TableModule,
    RatingModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    InputTextareaModule
  ]
})
export class AuthModule { }

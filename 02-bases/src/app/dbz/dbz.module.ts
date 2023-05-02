import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,
    AddCharactersComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

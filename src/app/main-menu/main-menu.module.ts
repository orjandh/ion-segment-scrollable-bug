import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [MainMenuComponent]
})
export class MainMenuModule { }

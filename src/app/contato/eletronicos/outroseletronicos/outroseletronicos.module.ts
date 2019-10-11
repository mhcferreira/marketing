import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OutroseletronicosPage } from './outroseletronicos.page';

const routes: Routes = [
  {
    path: '',
    component: OutroseletronicosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OutroseletronicosPage]
})
export class OutroseletronicosPageModule {}

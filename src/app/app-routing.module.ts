import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './contato/cadastro/cadastro.page';
import { ListarPage } from './contato/listar/listar.page';
import { FormsModule } from '@angular/forms';
import { PesquisaPage } from './contato/pesquisa/pesquisa.page';
import { TelevisaoPage } from './contato/eletronicos/televisao/televisao.page';
import { CelularPage } from './contato/eletronicos/celular/celular.page';
import { NotebookPage } from './contato/eletronicos/notebook/notebook.page';
import { RadioPage } from './contato/eletronicos/radio/radio.page';
import { PendrivePage } from './contato/eletronicos/pendrive/pendrive.page';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', component: CadastroPage },
  { path: 'listar', component: ListarPage },
  { path: 'pesquisa', component: PesquisaPage },
  { path: 'eletronicos', loadChildren: './contato/eletronicos/eletronicos.module#HomePageModule' },
  { path: 'televisao', component: TelevisaoPage},
  { path: 'celular', component: CelularPage},
  { path: 'notebook', component: NotebookPage},
  { path: 'radio', component: RadioPage},
  { path: 'pendrive', component: PendrivePage},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

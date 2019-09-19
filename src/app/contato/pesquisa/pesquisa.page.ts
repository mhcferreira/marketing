import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage {

  endereco: string

  constructor(private rota: Router) { }

  proximo() {
    this.rota.navigate([this.endereco]);

  }

}

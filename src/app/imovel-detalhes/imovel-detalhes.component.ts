import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imovel-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './imovel-detalhes.component.html',
  styleUrls: ['./imovel-detalhes.component.css']
})
export class ImovelDetalhesComponent {
  
  imovel: Imovel | undefined;
  
  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router,
    private location: Location
  ) {
    const id = this.route.snapshot.params['id'];
    this.imovel = this.imvService.buscarImovelPeloId(id);
  }

  abrirPaginaAluguel() {
    const url = `/detalhes/${this.imovel?.id}/aluguel`;
    this.rt.navigate([url]);
  }

  abrirPaginaFinanciamento() {
    const url = `/detalhes/${this.imovel?.id}/financiamento`;
    this.rt.navigate([url]);
  }

  goBack(): void {
    this.location.back();
  }
}

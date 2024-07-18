import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imovel-financiamento',
  standalone: true,
  imports: [],
  templateUrl: './imovel-financiamento.component.html',
  styleUrl: './imovel-financiamento.component.css'
})
export class ImovelFinanciamentoComponent {
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

  goBack(): void {
    this.location.back();
  }
}

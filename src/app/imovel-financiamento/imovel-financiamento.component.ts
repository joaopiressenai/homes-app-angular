import { Component } from '@angular/core'
import { Imovel } from '../imovel'
import { ImovelService } from '../imovel.service'
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule, Location } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt)

@Component({
  selector: 'app-imovel-financiamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './imovel-financiamento.component.html',
  styleUrls: ['./imovel-financiamento.component.css']
})
export class ImovelFinanciamentoComponent {
  imovel: Imovel | undefined
  valorEntrada: number | null = null
  prazoMeses = 0
  valorParcela = 0
  valorImovel = ""

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const id = this.route.snapshot.params['id']
    this.imovel = this.imvService.buscarImovelPeloId(id)

    if (this.imovel) {
      this.valorImovel = this.formatCurrency(this.imovel.valor)
    }
  }

  goBack(): void {
    this.location.back()
  }

  calcular(): void {
    if (this.imovel && this.valorEntrada !== null && this.prazoMeses > 0) {
      this.valorParcela = (this.imovel.valor - this.valorEntrada) / this.prazoMeses
    }
  }

  formatCurrency(value: number): string {
    if (value === undefined || value === null) return ''
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  
}

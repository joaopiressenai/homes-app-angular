import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    imoveisDB: Imovel[] = []

    constructor(private imovelService: ImovelService) {
        this.imoveisDB = this.imovelService.buscarTodosImoveis()
    }

    removerAcentos(str: String) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    favoritar(imovel: Imovel) {
        if (imovel.favorito == false) {
            imovel.favorito = true

            const audio = new Audio('som.mp3')
            audio.play()
        } else {
            imovel.favorito = false
        }
    }

    abrirMapa(imovel: Imovel) {
        const latidude = imovel.latitude
        const longitude = imovel.longitude
        const url = `https://www.google.com/maps?q=${latidude},${longitude}`;
        window.open(url, "_blank");
    }

    mostrarFavoritos() {
        const listaFiltrada: Imovel[] = []
        for (let i = 0; i < this.imoveisDB.length; i++) {
            const imovel = this.imoveisDB[i];

            if (imovel.favorito == true) {
                listaFiltrada.push(imovel)
            }
        }
        this.imoveisDB = listaFiltrada
    }

    mostrarTodos(desmarcarRadio = false) {
        this.imoveisDB = this.imovelService.buscarTodosImoveis()

        if (desmarcarRadio == true) {
            const inputCasa: any = document.getElementById('radioCasa')
            const inputRadio: any = document.getElementById('radioRadio')

            if (inputCasa || undefined && inputRadio || undefined) {
                inputCasa.checked = false
                inputRadio.checked = false
            }
        }
    }

    filtrarPorTipo(tipo: String) {
        this.mostrarTodos()
        const listaFiltrada: Imovel[] = []

        for (let i = 0; i < this.imoveisDB.length; i++) {
            const imovel = this.imoveisDB[i];

            if (imovel.tipo == tipo) {
                listaFiltrada.push(imovel)
            }

        }
        this.imoveisDB = listaFiltrada
    }

    listarImoveisComFiltro(texto: string) {
        this.imoveisDB = this.imovelService.buscarTodosImoveis();
    
        if (texto !== "") {
            const imoveisFiltrados: Imovel[] = [];
    
            const textoM = this.removerAcentos(texto.toUpperCase());
    
            for (let i = 0; i < this.imoveisDB.length; i++) {
                const imovel = this.imoveisDB[i];
    
                const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase());
                const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase());
    
                if (cidadeImovelM.includes(textoM) || estadoImovelM.includes(textoM)) {
                    imoveisFiltrados.push(imovel);
                }
            }
            this.imoveisDB = imoveisFiltrados;
        }
    }
    
    

}
import { Routes } from '@angular/router';
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "detalhes/:id",
        component: ImovelDetalhesComponent
    }
];

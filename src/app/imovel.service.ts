import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] = [
    {
      "id": 1,
      "url_foto": "1.jpg",
      "nome": "Casa 01",
      "cidade": "Saltinho",
      "estado": "Minas Gerais",
      "favorito": false,
      "tipo": "casa",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": 6
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        }
      ],
      "latitude": -20.2088,
      "longitude": -44.4487,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 700.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 45000.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 50000.00
        }
      ]
    },
    {
      "id": 2,
      "url_foto": "2.jpg",
      "nome": "Casa 02",
      "cidade": "Charqueada",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "adicionais": [
        {
          "chave": "Banheiro",
          "valor": 1
        }
      ],
      "latitude": -22.5095,
      "longitude": -47.7752,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 750.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 4000.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 60000.00
        }
      ]
    },
    {
      "id": 3,
      "url_foto": "3.jpg",
      "nome": "Casa 03",
      "cidade": "Americana",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "adicionais": [
        {
          "chave": "Quartos",
          "valor": 10
        },
        {
          "chave": "Quintal",
          "valor": "Muito grande"
        },
        {
          "chave": "Árvores",
          "valor": "Bastante"
        }
      ],
      "latitude": -22.7392,
      "longitude": -47.3335,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 600.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 2000.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 48000.00
        }
      ]
    },
    {
      "id": 4,
      "url_foto": "4.jpg",
      "nome": "Casa 04",
      "cidade": "Nova Odessa",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "adicionais": [
        {
          "chave": "Local",
          "valor": "Condomínio Fechado"
        },
        {
          "chave": "Segurança",
          "valor": "Incluso no condomínio"
        },
        {
          "chave": "Diversão",
          "valor": "Quadra, campo, playground"
        }
      ],
      "latitude": -22.7834,
      "longitude": -47.2991,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 900.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 3500.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 400000.00
        }
      ]
    },
    {
      "id": 5,
      "url_foto": "5.jpg",
      "nome": "Casa 05",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "adicionais": [
        {
          "chave": "Local",
          "valor": "Condomínio Fechado"
        },
        {
          "chave": "Wifi",
          "valor": "sim"
        }
      ],
      "latitude": -22.7143,
      "longitude": -47.6451,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 700.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 2800.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 320000.00
        }
      ]
    },
    {
      "id": 6,
      "url_foto": "6.jpg",
      "nome": "Casa 06",
      "cidade": "Cabreúva",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "adicionais": [
        {
          "chave": "Container",
          "valor": "Casa feita com containers"
        },
        {
          "chave": "Energia",
          "valor": "está incluso"
        }
      ],
      "latitude": -23.3002,
      "longitude": -47.1366,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 850.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 1500.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 380000.00
        }
      ]
    },
    {
      "id": 7,
      "url_foto": "7.jpg",
      "nome": "Casa 07",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "adicionais": [
        {
          "chave": "Quartos",
          "valor": 10
        },
        {
          "chave": "Quintal",
          "valor": "Muito grande"
        },
        {
          "chave": "Árvores",
          "valor": "Bastante"
        }
      ],
      "latitude": -22.8223,
      "longitude": -47.2671,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 750.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 2800.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 330000.00
        }
      ]
    },
    {
      "id": 8,
      "url_foto": "8.jpg",
      "nome": "Casa 08",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "adicionais": [],
      "latitude": -22.7143,
      "longitude": -47.6451,
      "aluguel": []
    },
    {
      "id": 9,
      "url_foto": "9.jpg",
      "nome": "Casa 09",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "adicionais": [],
      "latitude": -22.8223,
      "longitude": -47.2671,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 600.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 2400.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 280000.00
        }
      ]
    },
    {
      "id": 10,
      "url_foto": "10.jpg",
      "nome": "Casa 10",
      "cidade": "Charqueada",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "adicionais": [],
      "latitude": -22.5095,
      "longitude": -47.7752,
      "aluguel": [
        {
          "chave": "Aluguel diária",
          "valor": 800.00
        },
        {
          "chave": "Aluguel mensal",
          "valor": 3000.00
        },
        {
          "chave": "Aluguel anual",
          "valor": 350000.00
        }
      ]

    }
  ]

  buscarTodosImoveis(): Imovel[] {
    return this.imoveisDB
  }

  buscarImovelPeloId(id: number): Imovel | undefined {
    let imovel;

    for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];

      if (imovel.id == id) {
        break
      }
    }
    return imovel
  }

}

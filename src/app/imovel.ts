interface Propriedades {
    chave: String;
    valor: number|String;
}

export interface Imovel {
    id: number
    url_foto: String
    nome: String
    cidade: String
    estado: String
    tipo: String
    favorito: boolean
    adicionais: Propriedades[]
    latitude: number
    longitude: number
}
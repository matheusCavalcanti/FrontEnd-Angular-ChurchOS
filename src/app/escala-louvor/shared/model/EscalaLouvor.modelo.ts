import { Ministro } from 'src/app/ministro/shared/model/ministro.modelo';
import { Musica } from 'src/app/musica/shared/model/Musica.modelo';

export class EscalaLouvor {
    id: number;
    tipoCulto: string;
    descricao: string;
    data: Date;
    ministros: Ministro[] = [];
    musicas: Musica[] = [];
}

import { ServicoRealizado } from "./ServicoRealizado";

export interface Transacoes {
  tipo: 'entrada' | 'saida';
  data: Date;
  metodoPagamento: string;
  valor: number;
  servicosRealizados?: ServicoRealizado[];
}

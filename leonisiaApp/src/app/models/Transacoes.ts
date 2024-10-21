import { Servico } from "./Servico";

export interface Transacoes {
  tipo: 'entrada' | 'saida';
  data: Date;
  metodoPagamento: string;
  valor: number;
  servicosRealizados?: Servico[];
}

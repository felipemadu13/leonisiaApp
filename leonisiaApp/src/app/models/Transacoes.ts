export interface Transacoes {
  tipo: 'entrada' | 'saida';
  data: Date;
  metodoPagamento: string;
  valor: number;
}

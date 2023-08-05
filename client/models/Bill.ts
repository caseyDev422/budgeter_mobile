export interface Bill {
  id?: string;
  billName: string;
  amount: Amount;
  hasAutoDraft?: boolean;
  dueDate: Date;
}

export interface Amount {
  actualAmount: number;
  labelAmount: string;
}
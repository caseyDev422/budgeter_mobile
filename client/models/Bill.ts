export interface Bill {
  id?: string;
  billName: string;
  amount: string;
  hasAutoDraft: boolean;
  dueDate: Date;
}
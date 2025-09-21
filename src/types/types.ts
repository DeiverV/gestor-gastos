export interface Expense {
  id: string;
  description: string;
}

export interface MonthRecord {
  id: string;
  month: string;
  expenses: Expense[];
}

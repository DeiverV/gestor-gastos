import { useState } from "react";
import type { Expense, MonthRecord } from "../types/types";

export const useMonthForm = ({
  onSave,
}: {
  onSave: (record: MonthRecord) => void;
}) => {
  const [month, setMonth] = useState("");
  const [id, setId] = useState<string | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpenses([...expenses, { id: crypto.randomUUID(), description: "" }]);
  };

  const updateExpense = (id: string, value: string) => {
    setExpenses(
      expenses.map((exp) =>
        exp.id === id ? { ...exp, description: value } : exp
      )
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!month) return;

    const hasEmptyExpenses = expenses.some((exp) => !exp.description);
    if (hasEmptyExpenses) return;

    const newRecord: MonthRecord = {
      id: id ?? crypto.randomUUID(),
      month,
      expenses,
    };

    onSave(newRecord);
    setMonth("");
    setId(null);
    setExpenses([]);
  };

  return {
    month,
    setMonth,
    expenses,
    addExpense,
    updateExpense,
    handleSave,
    setExpenses,
    setId,
  };
};

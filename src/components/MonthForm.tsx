/* eslint-disable react-hooks/exhaustive-deps */
import type { MonthRecord } from "../types/types";
import { useMonthForm } from "../hooks/useMonthForm";
import { useEffect } from "react";
import { getFromStorage } from "../utils/storage";
import { CustomButton } from "./Button";

interface Props {
  onSave: (record: MonthRecord) => void;
  id?: string | null;
}

export const MonthForm = ({ onSave, id }: Props) => {
  const {
    addExpense,
    expenses,
    handleSave,
    month,
    setMonth,
    updateExpense,
    setExpenses,
    setId,
  } = useMonthForm({ onSave });

  useEffect(() => {
    if (id) {
      const savedRecords = getFromStorage<MonthRecord[]>("records", []);
      const record = savedRecords.find((r) => r.id === id);
      if (record) {
        setMonth(record.month);
        setId(id);
        setExpenses(record.expenses);
      }
    }
  }, [id]);

  return (
    <form onSubmit={handleSave} className="p-4 w-[300px] md:w-[500px]">
      <h2 className="font-bold text-xl md:text-3xl mb-3">
        Agregar registro de mes
      </h2>
      <hr />
      <h4 className="mt-4">Mes </h4>

      <input
        type="text"
        placeholder="Mes (Ej: Septiembre 2025)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="border p-2 rounded w-full my-2"
      />

      <h4>Gastos</h4>
      <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto mt-2">
        {expenses.map((exp, index) => (
          <input
            key={exp.id}
            type="text"
            placeholder={`Gasto ${index + 1}`}
            value={exp.description}
            onChange={(e) => updateExpense(exp.id, e.target.value)}
            className="border p-2 rounded w-full focus:outline-0"
          />
        ))}
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <CustomButton onClick={addExpense} variant="normal">
          + Agregar gasto
        </CustomButton>

        <CustomButton variant="success" type="submit">
          Guardar mes
        </CustomButton>
      </div>
    </form>
  );
};

export default MonthForm;

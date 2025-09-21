import type { MonthRecord } from "../types/types";
import { CustomButton } from "./Button";

interface Props {
  record: MonthRecord;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const MonthCard = ({ record, onEdit, onDelete }: Props) => {
  return (
    <div className="bg-[#0F828C] shadow-2xl min-w-[300px] p-4 rounded-lg grid gap-5">
      <h3 className="font-bold">Mes: {record.month}</h3>

      <ul className="list-disc pl-6 text-lg max-h-[100px] overflow-y-auto" aria-label="Gastos del mes">
        {record.expenses.map((exp) => (
          <li key={exp.id}>{exp.description}</li>
        ))}
      </ul>

      <div className="flex justify-end self-end gap-2 mt-2">
        <CustomButton onClick={() => onEdit(record.id)} variant="warning">
          Editar
        </CustomButton>
        <CustomButton onClick={() => onDelete(record.id)} variant="danger">
          Eliminar
        </CustomButton>
      </div>
    </div>
  );
};

export default MonthCard;

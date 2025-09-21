import UserNameForm from "../components/UserNameForm";
import MonthForm from "../components/MonthForm";
import MonthCard from "../components/MonthCard";
import { useExpenseManager } from "../hooks/useExpenseManager";
import { useState } from "react";
import { Modal } from "../components/Modal";
import type { MonthRecord } from "../types/types";
import { CustomButton } from "../components/Button";

export const HomePage = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState<string | null>(null);

  const { handleDelete, handleSaveRecord, records, setUsername, username } =
    useExpenseManager();

  const saveRecord = (record: MonthRecord) => {
    handleSaveRecord(record);
    setIsOpenCreate(false);
    setIdToUpdate(null);
  };

  return (
    <main className="grid place-items-center py-5">
      <h1 className="font-bold mb-4 text-center text-2xl lg:text-4xl">
        Gestor de gastos De Deiber
      </h1>

      {!username ? (
        <UserNameForm onSave={setUsername} />
      ) : (
        <>
          <h2 className="mb-4">
            Bienvenido, <strong>{username}</strong>
          </h2>

          <CustomButton
            onClick={() => setIsOpenCreate(true)}
            variant="success"
          >
            + Agregar Registro
          </CustomButton>

          <Modal
            isOpen={isOpenCreate || !!idToUpdate}
            onClose={() => {
              setIsOpenCreate(false);
              setIdToUpdate(null);
            }}
          >
            <MonthForm onSave={saveRecord} id={idToUpdate} />
          </Modal>

          <section
            aria-description="Lista de registros"
            className="mt-4 flex gap-4 flex-wrap w-full justify-center"
          >
            {records.map((record) => (
              <MonthCard
                key={record.id}
                record={record}
                onEdit={() => setIdToUpdate(record.id)}
                onDelete={handleDelete}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default HomePage;

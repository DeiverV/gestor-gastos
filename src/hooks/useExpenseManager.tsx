import { useEffect, useState } from "react";
import type { MonthRecord } from "../types/types";
import { getFromStorage, saveToStorage } from "../utils/storage";

type TypeUsername = string | null;
type TypeRecords = MonthRecord[];

export const useExpenseManager = () => {
  const [username, setUsername] = useState<TypeUsername>(null);
  const [records, setRecords] = useState<TypeRecords>([]);

  useEffect(() => {
    const savedName = getFromStorage<TypeUsername>("username", null);
    const savedRecords = getFromStorage<TypeRecords>("records", []);
    setUsername(savedName);
    setRecords(savedRecords);
  }, []);

  const handleSaveRecord = (record: MonthRecord) => {
    const savedRecords = getFromStorage<TypeRecords>("records", []);
    const existsRecord = savedRecords.find((r) => r.id === record.id);
    
    if (existsRecord){
      const newRecords = savedRecords.map((r) => r.id === record.id ? record : r);
      setRecords(newRecords);
      saveToStorage("records", newRecords);
      return
    }

    const newRecords = [...records, record];
    setRecords(newRecords);
    saveToStorage("records", newRecords);
  };

  const handleDelete = (id: string) => {
    const newRecords = records.filter((r) => r.id !== id);
    setRecords(newRecords);
    saveToStorage("records", newRecords);
  };

  return { username, setUsername, records, handleSaveRecord, handleDelete };
};

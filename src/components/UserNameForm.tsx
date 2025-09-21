import { useState } from "react";
import { saveToStorage } from "../utils/storage";
import { CustomButton } from "./Button";

interface Props {
  onSave: (name: string) => void;
}

const UserNameForm = ({ onSave }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    saveToStorage("username", name);
    onSave(name);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Escribe tu nombre..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <CustomButton variant="success" type="submit">
        Guardar
      </CustomButton>
    </form>
  );
};

export default UserNameForm;

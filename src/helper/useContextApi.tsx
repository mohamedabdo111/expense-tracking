import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
export type FormState = {
  trackerName: string;
  category: string;
  amount: number;
};

type DataContextType = {
  formData: FormState[];
  addFormData: (newData: FormState) => void;
  handleDelete: (index: number) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormState[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
    setFormData(storedData);
  }, []);

  const addFormData = (newData: FormState) => {
    const updatedData = [...formData, newData];
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  const handleDelete = (index: number) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    toast.success("data deleted");
  };
  return (
    <DataContext.Provider value={{ formData, addFormData, handleDelete }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

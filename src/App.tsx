import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Toaster } from "react-hot-toast";
import { DataProvider } from "./helper/useContextApi";

const App = () => {
  return (
    <section className=" container mx-auto">
      <h1 className="font-semibold text-3xl text-center my-10 capitalize">
        Expense Tracker App
      </h1>
      <DataProvider>
        <ExpenseForm />
        <ExpenseList />
      </DataProvider>

      <Toaster></Toaster>
    </section>
  );
};

export default App;

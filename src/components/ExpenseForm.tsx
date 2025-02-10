import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { useData } from "../helper/useContextApi";

const ExpenseForm = () => {
  const [formState, setFormState] = useState({
    trackerName: "",
    category: "",
    amount: 0,
  });
  const { addFormData } = useData();

  console.log(formState.trackerName);

  const schema = z.object({
    trackerName: z
      .string({
        required_error: "tracker name is required",
        invalid_type_error: "tracker name must be a string",
        message: "tracker name must be at least 3 characters",
      })
      .min(3),

    category: z
      .string({
        required_error: "category is required",
        invalid_type_error: "category must be a string",
        description: "category must be at least 3 characters",
      })
      .nonempty()
      .min(3),
    amount: z
      .number({
        required_error: "amount is required",
        invalid_type_error: "amount must be a number",
      })
      .int(),
  });
  const handleChange = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = await schema.safeParse(formState);
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      return;
    }

    setFormState({
      ...formState,
    });

    addFormData(formState);
    setFormState({
      trackerName: "",
      category: "",
      amount: 0,
    });
    toast.success("data saved");
  };

  console.log(formState);
  return (
    <form onSubmit={handleChange} className="p-4 ">
      <h1 className="font-semibold text-xl my-2  capitalize">
        Add New Expense
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5 w-full  col-span-3 sm:col-span-1 outline-0"
          placeholder="expense name..."
          required
          value={formState.trackerName}
          onChange={(e) =>
            setFormState({ ...formState, trackerName: e.target.value })
          }
        />
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5 w-full  col-span-3 sm:col-span-1 outline-0"
          placeholder="Enter category..."
          required
          value={formState.category}
          onChange={(e) =>
            setFormState({ ...formState, category: e.target.value })
          }
        />
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5 w-full  col-span-3 sm:col-span-1 outline-0"
          placeholder="Enter amount..."
          required
          value={formState.amount}
          onChange={(e) =>
            setFormState({ ...formState, amount: parseInt(e.target.value) })
          }
        />
      </div>
      <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-gray-600 rounded-lg border border-gray-500 hover:bg-gray-700 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 w-full my-4 capitalize cursor-pointer">
        submit
      </button>
    </form>
  );
};

export default ExpenseForm;

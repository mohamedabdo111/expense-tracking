import { useEffect, useState } from "react";
import { FormState, useData } from "../helper/useContextApi";

const ExpenseList = () => {
  const timer = 1000;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<FormState[] | null>();
  const { formData } = useData();

  const { handleDelete } = useData();
  useEffect(() => {
    if (search.length === 0) setResult(formData);
    const data = setTimeout(() => {
      const searchvalue = formData.filter((item) =>
        item.category.includes(search)
      );
      setResult(searchvalue);
    }, timer);
    return () => clearTimeout(data);
  }, [search, formData]);
  const onsearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-2">
      <h1 className="text-xl font-semibold my-3">Expense List</h1>
      <input
        type="text"
        placeholder="search by category"
        className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full sm:w-2xs outline-0"
        value={search}
        onChange={onsearch}
      ></input>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Tracker name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {result && result?.length > 0 ? (
              result?.map((item, index) => (
                <tr
                  className="bg-gray-50 rounded-md text-gray-700 hover:bg-gray-100"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium 0whitespace-nowrap"
                  >
                    {item.trackerName}
                  </th>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.amount}</td>
                  <td
                    className="px-6 py-4 cursor-pointer font-semibold text-red-600"
                    onClick={() => handleDelete(index)}
                  >
                    DELETE
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-gray-50 rounded-md text-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium 0whitespace-nowrap"
                ></th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium 0whitespace-nowrap text-end"
                >
                  No data
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium 0whitespace-nowrap"
                ></th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium 0whitespace-nowrap"
                ></th>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="font-semibold bg-gray-200 text-gray-700">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">
                {result?.reduce((a, b) => a + b.amount, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;

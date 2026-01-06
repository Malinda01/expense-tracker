import { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  // 1. Fetch Expenses from Backend
  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/expenses');
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // 2. Add Expense Function
  const addExpense = async (expense) => {
    try {
      const res = await axios.post('http://localhost:5000/api/expenses', expense);
      setExpenses([res.data, ...expenses]); // Update UI instantly
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  // 3. Delete Expense Function
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(expenses.filter((exp) => exp._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">💰 Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
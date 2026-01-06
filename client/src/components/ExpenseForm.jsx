import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        
        // 1. Debugging: See what the form is actually trying to send
        console.log("Form Data:", { title, amount, category });

        // 2. Visual Feedback: Tell the user if something is missing
        if (!title || !amount || !category) {
            alert("Please fill in all fields (Title, Amount, and Category)");
            return;
        }
        
        // Send data to parent (Convert amount to number just to be safe)
        onAddExpense({ title, amount: Number(amount), category });
        
        // Reset form
        setTitle('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                    type="text" 
                    placeholder="Expense Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <input 
                    type="number" 
                    placeholder="Amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 rounded w-full"
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                </select>
            </div>
            <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                Add Expense
            </button>
        </form>
    );
};

export default ExpenseForm;
const ExpenseList = ({ expenses, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">History</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No expenses recorded yet.</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense._id} className="flex justify-between items-center border-b py-2 last:border-none">
                            <div>
                                <p className="font-semibold">{expense.title}</p>
                                <p className="text-sm text-gray-500">{expense.category} - {new Date(expense.date).toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-red-500">-${expense.amount}</span>
                                <button 
                                    onClick={() => onDelete(expense._id)} 
                                    className="text-red-500 hover:text-red-700 text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpenseList;
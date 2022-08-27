import React, {} from 'react';
import './ExpenseItems.css';
function ExpenseItems() {
    const ExpenseDate = new Date(20, 8, 2022);
    const Car = 'Bought A Car';
    const CarPrice = 250.00;

        return (
            <div className="ExpenseContainer">
                <div className="ExpenseDate">{ExpenseDate.toDateString(20, 8, 2022)}</div>
                <div className="ExpenseData">
                    <div className='car'>{Car}</div>
                    <div className='price'>${CarPrice}</div>
                </div>
            </div>
        );
}
 
export default ExpenseItems;
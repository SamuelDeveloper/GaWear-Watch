import React, { useState } from 'react';

const DiscountTab = () => {
    const [showTab, setShowTab] = useState(true);

    const handleClose = () => {
        setShowTab(false);
        

    }

    return (
        <div className={`discount-tab ${showTab ? "" : "d-none"}`}>
            <div className="discount-tab-content">
                <span className="discount-tab-text">10% discount for buyers from January 1st to July 14th</span>
                <button className="discount-tab-close-btn" onClick={handleClose}>x</button>
            </div>
        </div>
    );
}

export default DiscountTab;
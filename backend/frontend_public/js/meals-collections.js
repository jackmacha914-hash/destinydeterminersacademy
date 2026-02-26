window.onload = function() {
    (function MealsCollectionsModule() {

        // --------------------
        // Meal Modal
        // --------------------
        const mealModalMC = document.getElementById('meal-modal');
        const addMealBtnMC = document.getElementById('add-meal-btn');
        const closeMealBtnMC = document.getElementById('close-meal-modal');
        const mealFormMC = document.getElementById('meal-payment-form');
        const mealsTableBodyMC = document.querySelector('#meals-table tbody');

        if (mealModalMC && addMealBtnMC && closeMealBtnMC && mealFormMC && mealsTableBodyMC) {
            addMealBtnMC.addEventListener('click', () => mealModalMC.style.display = 'block');
            closeMealBtnMC.addEventListener('click', () => mealModalMC.style.display = 'none');

            mealFormMC.addEventListener('submit', (e) => {
                e.preventDefault();
                const mealData = Object.fromEntries(new FormData(mealFormMC).entries());
                mealData.receiptNumber = `MEAL-${Date.now()}-${Math.floor(Math.random()*1000)}`;
                appendRowToTable(mealsTableBodyMC, mealData, true);
                mealModalMC.style.display = 'none';
                mealFormMC.reset();
                console.log('Meal Payment added:', mealData);
            });
        }

        // --------------------
        // Other Charges Modal
        // --------------------
        const otherChargeModalMC = document.getElementById('other-charge-modal');
        const addOtherChargeBtnMC = document.getElementById('add-other-charge-btn');
        const closeOtherChargeBtnMC = document.getElementById('close-other-charge-modal');
        const otherChargeFormMC = document.getElementById('other-charge-form');
        const otherChargesTableBodyMC = document.querySelector('#other-charges-table tbody');

        if (otherChargeModalMC && addOtherChargeBtnMC && closeOtherChargeBtnMC && otherChargeFormMC && otherChargesTableBodyMC) {
            addOtherChargeBtnMC.addEventListener('click', () => otherChargeModalMC.style.display = 'block');
            closeOtherChargeBtnMC.addEventListener('click', () => otherChargeModalMC.style.display = 'none');

            otherChargeFormMC.addEventListener('submit', (e) => {
                e.preventDefault();
                const otherData = Object.fromEntries(new FormData(otherChargeFormMC).entries());
                otherData.receiptNumber = `CHG-${Date.now()}-${Math.floor(Math.random()*1000)}`;
                appendRowToTable(otherChargesTableBodyMC, otherData, false);
                otherChargeModalMC.style.display = 'none';
                otherChargeFormMC.reset();
                console.log('Other Charge added:', otherData);
            });
        }

        // --------------------
        // Close modals when clicking outside
        // --------------------
        window.addEventListener('click', (event) => {
            if (event.target === mealModalMC) mealModalMC.style.display = 'none';
            if (event.target === otherChargeModalMC) otherChargeModalMC.style.display = 'none';
        });

        // --------------------
        // Helper to append rows
        // --------------------
        function appendRowToTable(tableBody, data, isMeal = true) {
            const row = document.createElement('tr');
            if (isMeal) {
                row.innerHTML = `
                    <td>${data.studentName}</td>
                    <td>${data.mealType}</td>
                    <td>${data.date}</td>
                    <td>${data.frequency}</td>
                    <td>${data.amount}</td>
                    <td>${data.receiptNumber}</td>
                `;
            } else {
                row.innerHTML = `
                    <td>${data.studentName}</td>
                    <td>${data.chargeType}</td>
                    <td>${data.date}</td>
                    <td>${data.amount}</td>
                    <td>${data.receiptNumber}</td>
                `;
            }
            tableBody.appendChild(row);
        }

    })();
};

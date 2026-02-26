document.addEventListener('DOMContentLoaded', function () {

    (function MealsCollectionsModule() {

        // --------------------
        // Meal Modal
        // --------------------
        const mealModalMC = document.getElementById('meal-modal');
        const addMealBtnMC = document.getElementById('add-meal-btn');
        const closeMealBtnMC = document.getElementById('close-meal-modal');
        const mealFormMC = document.getElementById('meal-payment-form');
        const mealsTableBodyMC = document.querySelector('#meals-table tbody');

        addMealBtnMC.addEventListener('click', () => mealModalMC.style.display = 'block');
        closeMealBtnMC.addEventListener('click', () => mealModalMC.style.display = 'none');

        // --------------------
        // Other Charges Modal
        // --------------------
        const otherChargeModalMC = document.getElementById('other-charge-modal');
        const addOtherChargeBtnMC = document.getElementById('add-other-charge-btn');
        const closeOtherChargeBtnMC = document.getElementById('close-other-charge-modal');
        const otherChargeFormMC = document.getElementById('other-charge-form');
        const otherChargesTableBodyMC = document.querySelector('#other-charges-table tbody');

        addOtherChargeBtnMC.addEventListener('click', () => otherChargeModalMC.style.display = 'block');
        closeOtherChargeBtnMC.addEventListener('click', () => otherChargeModalMC.style.display = 'none');

        // --------------------
        // Click outside to close modals
        // --------------------
        window.addEventListener('click', (event) => {
            if (event.target === mealModalMC) mealModalMC.style.display = 'none';
            if (event.target === otherChargeModalMC) otherChargeModalMC.style.display = 'none';
        });

        // --------------------
        // Utility: Generate Unique Receipt Number
        // --------------------
        function generateReceiptNumber(prefix = 'MC') {
            const timestamp = Date.now(); // milliseconds
            const random = Math.floor(Math.random() * 1000); // 0-999
            return `${prefix}-${timestamp}-${random}`;
        }

        // --------------------
        // Helper: Append row to table
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

        // --------------------
        // Meal Form Submission
        // --------------------
        mealFormMC.addEventListener('submit', (e) => {
            e.preventDefault();
            const mealData = Object.fromEntries(new FormData(mealFormMC).entries());
            mealData.receiptNumber = generateReceiptNumber('MEAL');

            console.log('Meal Payment:', mealData);

            // Append to table dynamically
            appendRowToTable(mealsTableBodyMC, mealData, true);

            // TODO: Send to Node.js API / MongoDB
            // fetch('/api/payments', {...})

            mealModalMC.style.display = 'none';
            mealFormMC.reset();
        });

        // --------------------
        // Other Charges Form Submission
        // --------------------
        otherChargeFormMC.addEventListener('submit', (e) => {
            e.preventDefault();
            const otherData = Object.fromEntries(new FormData(otherChargeFormMC).entries());
            otherData.receiptNumber = generateReceiptNumber('CHG');

            console.log('Other Charge Payment:', otherData);

            // Append to table dynamically
            appendRowToTable(otherChargesTableBodyMC, otherData, false);

            // TODO: Send to Node.js API / MongoDB
            // fetch('/api/payments', {...})

            otherChargeModalMC.style.display = 'none';
            otherChargeFormMC.reset();
        });

    })();

});

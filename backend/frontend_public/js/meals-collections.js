// Meals & Collections - Stable Version (No onload override)

document.addEventListener("DOMContentLoaded", function () {

    // ---------- Meal Modal ----------
    const mealModal = document.getElementById('mc-meal-modal');
    const addMealBtn = document.getElementById('mc-add-meal-btn');
    const closeMeal = document.getElementById('mc-close-meal');
    const mealForm = document.getElementById('mc-meal-form');
    const mealsTable = document.querySelector('#mc-meals-table tbody');

    if (addMealBtn) {
        addMealBtn.addEventListener("click", function () {
            if (mealModal) mealModal.style.display = "block";
        });
    }

    if (closeMeal) {
        closeMeal.addEventListener("click", function () {
            if (mealModal) mealModal.style.display = "none";
        });
    }

    if (mealForm) {
        mealForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(mealForm).entries());
            data.receiptNumber = `MEAL-${Date.now()}-${Math.floor(Math.random()*1000)}`;
            appendRow(mealsTable, data, true);
            mealModal.style.display = "none";
            mealForm.reset();
        });
    }

    // ---------- Other Charges Modal ----------
    const otherModal = document.getElementById('mc-other-modal');
    const addOtherBtn = document.getElementById('mc-add-other-btn');
    const closeOther = document.getElementById('mc-close-other');
    const otherForm = document.getElementById('mc-other-form');
    const otherTable = document.querySelector('#mc-other-table tbody');

    if (addOtherBtn) {
        addOtherBtn.addEventListener("click", function () {
            if (otherModal) otherModal.style.display = "block";
        });
    }

    if (closeOther) {
        closeOther.addEventListener("click", function () {
            if (otherModal) otherModal.style.display = "none";
        });
    }

    if (otherForm) {
        otherForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(otherForm).entries());
            data.receiptNumber = `CHG-${Date.now()}-${Math.floor(Math.random()*1000)}`;
            appendRow(otherTable, data, false);
            otherModal.style.display = "none";
            otherForm.reset();
        });
    }

    // ---------- Click Outside ----------
    window.addEventListener("click", function (e) {
        if (e.target === mealModal) mealModal.style.display = "none";
        if (e.target === otherModal) otherModal.style.display = "none";
    });

    // ---------- Helper ----------
    function appendRow(tableBody, data, isMeal = true) {
        if (!tableBody) return;

        const row = document.createElement("tr");

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

});

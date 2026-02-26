(function MealsCollectionsModule() {
    // --------------------
    // Modals
    // --------------------
    const mealModalMC = document.getElementById('meal-modal');
    const otherChargeModalMC = document.getElementById('other-charge-modal');

    const addMealBtnMC = document.getElementById('add-meal-btn');
    const addOtherChargeBtnMC = document.getElementById('add-other-charge-btn');

    const closeMealBtnMC = document.getElementById('close-meal-modal');
    const closeOtherChargeBtnMC = document.getElementById('close-other-charge-modal');

    addMealBtnMC.onclick = () => mealModalMC.style.display = 'block';
    addOtherChargeBtnMC.onclick = () => otherChargeModalMC.style.display = 'block';

    closeMealBtnMC.onclick = () => mealModalMC.style.display = 'none';
    closeOtherChargeBtnMC.onclick = () => otherChargeModalMC.style.display = 'none';

    window.onclick = (event) => {
        if (event.target === mealModalMC) mealModalMC.style.display = 'none';
        if (event.target === otherChargeModalMC) otherChargeModalMC.style.display = 'none';
    };

    // --------------------
    // Form submissions
    // --------------------
    const mealFormMC = document.getElementById('meal-payment-form');
    const otherChargeFormMC = document.getElementById('other-charge-form');

    mealFormMC.onsubmit = (e) => {
        e.preventDefault();
        const mealData = Object.fromEntries(new FormData(mealFormMC).entries());
        console.log('Meals & Collections - Meal Payment Data:', mealData);
        mealModalMC.style.display = 'none';

        // TODO: Send mealData to your Node.js API for MongoDB
    };

    otherChargeFormMC.onsubmit = (e) => {
        e.preventDefault();
        const otherData = Object.fromEntries(new FormData(otherChargeFormMC).entries());
        console.log('Meals & Collections - Other Charge Data:', otherData);
        otherChargeModalMC.style.display = 'none';

        // TODO: Send otherData to your Node.js API for MongoDB
    };
})();

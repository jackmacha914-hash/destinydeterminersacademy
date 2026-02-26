document.addEventListener("click", function(e) {

    const mealModal = document.getElementById("mc-meal-modal");
    const otherModal = document.getElementById("mc-other-modal");
    const mealsTable = document.querySelector("#mc-meals-table tbody");
    const otherTable = document.querySelector("#mc-other-table tbody");

    // ---------- OPEN ----------
    if (e.target.closest("#mc-add-meal-btn")) mealModal?.classList.add("mc-show");
    if (e.target.closest("#mc-add-other-btn")) otherModal?.classList.add("mc-show");

    // ---------- CLOSE ----------
    if (e.target.closest("#mc-close-meal") || e.target.id === "mc-meal-modal") mealModal?.classList.remove("mc-show");
    if (e.target.closest("#mc-close-other") || e.target.id === "mc-other-modal") otherModal?.classList.remove("mc-show");

});

// ---------- Form Submission ----------
document.getElementById("mc-meal-form")?.addEventListener("submit", function(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    data.receiptNumber = `MEAL-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.studentName}</td>
        <td>${data.mealType}</td>
        <td>${data.date}</td>
        <td>${data.frequency}</td>
        <td>${data.amount}</td>
        <td>${data.receiptNumber}</td>
    `;
    document.querySelector("#mc-meals-table tbody").appendChild(row);
    this.reset();
    document.getElementById("mc-meal-modal")?.classList.remove("mc-show");
});

document.getElementById("mc-other-form")?.addEventListener("submit", function(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    data.receiptNumber = `CHG-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.studentName}</td>
        <td>${data.chargeType}</td>
        <td>${data.date}</td>
        <td>${data.amount}</td>
        <td>${data.receiptNumber}</td>
    `;
    document.querySelector("#mc-other-table tbody").appendChild(row);
    this.reset();
    document.getElementById("mc-other-modal")?.classList.remove("mc-show");
});

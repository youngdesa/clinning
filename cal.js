const prices = {
    standardApartment: 100,
    deepApartment: 150,
    standardOffice: 125,
    deepOffice: 150,
    windowSingle: 110,
    windowMulti: 200,
    carpetCleaning: 60,
    furnitureCleaning: 120
};


function calculateTotal() {
    let total = 0;

    for (const service in prices) {
        const input = document.getElementById(service);
        const area = parseFloat(input.value) || 0;
        total += area * prices[service];
    }

    document.getElementById('totalCost').textContent = total.toFixed(2);
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});

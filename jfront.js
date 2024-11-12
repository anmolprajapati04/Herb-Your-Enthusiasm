document.getElementById('meal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mealType = document.getElementById('meal-type').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(checkbox => checkbox.value);
    const instructions = document.getElementById('special-instructions').value;

    const summaryText = `
        Meal Type: ${mealType}\n
        Ingredients: ${ingredients.join(', ')}\n
        Special Instructions: ${instructions}
    `;

    document.getElementById('summary-text').textContent = summaryText;
    document.getElementById('order-summary').classList.remove('hidden');
});

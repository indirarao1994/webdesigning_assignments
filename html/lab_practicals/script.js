document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const dietSelect = document.getElementById('dietSelect');
    const cookingTimeInput = document.getElementById('cookingTimeInput');
    const resultsContainer = document.getElementById('results');
  
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      const diet = dietSelect.value;
      const cookingTime = cookingTimeInput.value.trim();
  
      searchRecipes(searchTerm, diet, cookingTime);
    });
  
    async function searchRecipes(searchTerm, diet, cookingTime) {
      try {
        const apiKey = 'd5a90ec09d3a4a2576017bd51f3ab6db'; // Replace with your actual API key
        const apiUrl = `https://api.edamam.com/api/recipes/v2?search=${searchTerm}&diet=${diet}&cookingTime=${cookingTime}&apiKey=${apiKey}`;
  
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        displayResults(data.results);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  
    function displayResults(results) {
      resultsContainer.innerHTML = '';
  
      if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No recipes found.</p>';
        return;
      }
  
      results.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
  
        const title = document.createElement('h2');
        title.textContent = recipe.title;
  
        const image = document.createElement('img');
        image.src = recipe.image;
  
        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
  
        const cookingTime = document.createElement('p');
        cookingTime.textContent = `Cooking Time: ${recipe.cookingTime} minutes`;
  
        recipeCard.appendChild(title);
        recipeCard.appendChild(image);
        recipeCard.appendChild(ingredients);
        recipeCard.appendChild(cookingTime);
  
        resultsContainer.appendChild
  
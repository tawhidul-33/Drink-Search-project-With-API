# 🍸 Drink Search & Cart Project

A simple JavaScript web app that allows users to search for drinks from the [TheCocktailDB API], view details in a modal, and add them to a shopping cart with a limit of 6 items.

---

## 🧪 Features

- 🔍 **Search Drinks**: Type any drink name and press the "Search" button to fetch matching items.
- 📦 **Add to Cart**: Each drink has an "Add to Cart" button. Once added, the button changes to "Already Added".
- ❌ **Duplicate Prevention**: Prevents adding the same item more than once.
- 🔢 **Cart Limit**: You can add a maximum of **6** drinks.
- ℹ️ **Drink Details**: View drink information in a modal popup.
- 🎨 **Clean UI**: Responsive and styled using basic CSS and Bootstrap.

---

## 🚀 How It Works

### 🔍 Search Functionality
- On clicking the "Search" button, it checks if the input field is empty.
- If valid, it fetches drinks using the **CocktailDB API** based on the entered keyword.

### 🛒 Cart Logic
- On "Add to Cart", the drink is shown in the cart section (right column).
- The button text changes to `"Already Added"` and the button is styled with **light pink** (`#FFB6C1`).
- Prevents further clicks after it's added.
- If the cart has 6 items already, shows an alert `"You limit cross to Add"`.

---

## 📦 Tech Stack

| Tech        | Purpose                       |
|-------------|-------------------------------|
| HTML        | Page structure                |
| CSS         | Basic styling                 |
| Bootstrap   | Modal and layout support      |
| JavaScript  | DOM handling, API fetch, logic|
| TheCocktailDB API | Drink data source       |

---

## 🖼️ UI Layout

- Left Side: Drink search results.
- Right Side: Cart with selected drinks and count.
- Modal: Shows detailed instructions of a selected drink.

---


## 🚀 Live Preview

🔗 **Live Site:**  
[https://tawhidul-33.github.io/Drink-Search-project-With-API/](https://tawhidul-33.github.io/Drink-Search-project-With-API/)


---

## 🛠️ Technologies Used

- ✅ HTML5  
- ✅ CSS3  
- ✅ JavaScript (ES6)  
- ✅ Bootstrap (for modal only)  
- ✅ [TheCocktailDB API](https://www.thecocktaildb.com/)

---

## 🧠 Author

- **Name**: Tawhidul Islam (Siyam)  
- **GitHub**: https://github.com/tawhidul-33
- **Email**: tawhidul2442@gmail.com

---

## 📦 How to Use

1. Clone this repository:

```bash
git clone https://github.com/tawhidul-33/drink-search-app.git

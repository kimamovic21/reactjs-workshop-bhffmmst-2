# Student Exercises - React Workshop

## 🎯 Practice Exercises

Work through these exercises to reinforce what you've learned. Start with Step 1 and work your way up!

---

## Step 1: Basic Components & JSX

### Exercise 1.1: Personal Card
Create a component that displays your personal information:
- Your name in an h2
- Your favorite hobby
- Your favorite color
- An emoji that represents you

### Exercise 1.2: Multiple Elements
Create a component that displays:
- A welcome message
- A list of 3 of your favorite things (movies, books, games, etc.)
- A footer with your name

**Hint**: Remember to wrap everything in a single parent element!

### Exercise 1.3: Nested Components
Create two components:
- `Header` - displays a title and subtitle
- `Welcome` - uses the Header component and adds a paragraph below it

---

## Step 2: Props

### Exercise 2.1: Product Card
Create a `ProductCard` component that accepts these props:
- name (product name)
- price (product price)
- inStock (true/false)
- imageUrl (optional - you can use an emoji instead)

Then create 3 different product cards with different values.

### Exercise 2.2: Song Component
Create a `Song` component with props:
- title
- artist
- duration
- genre

Create a list of at least 3 songs.

### Exercise 2.3: Alert Component
Create an `Alert` component that accepts:
- type (success, warning, error, info)
- message

Style it differently based on the type (use inline styles or className).

**Bonus**: Use the type to display different emoji icons!

---

## Step 3: Styling

### Exercise 3.1: Button Styles
Create 4 different styled buttons:
- Primary (blue background)
- Secondary (gray background)
- Success (green background)
- Danger (red background)

Make them reusable with a `Button` component that accepts a `variant` prop.

### Exercise 3.2: Card Layout
Create a styled card component with:
- Rounded corners
- Shadow
- Padding
- Border
- Hover effect (changes color or size)

### Exercise 3.3: Theme Colors
Create a set of CSS variables for a color theme and use them throughout your components:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --text-color: #your-color;
  --background-color: #your-color;
}
```

---

## Step 4: Lists & Mapping

### Exercise 4.1: Favorite Movies
Create an array of your favorite movies (at least 5) with:
- id
- title
- year
- rating

Map them to create a MovieCard for each.

### Exercise 4.2: Shopping List
Create a shopping list app that displays:
- Item name
- Quantity
- Category (fruits, vegetables, dairy, etc.)

Use map to render each item.

### Exercise 4.3: Contact List
Create a contact list with:
- Name
- Phone number
- Email
- Avatar (can be an emoji or initials)

**Bonus**: Add a search/filter feature!

---

## Step 5: State

### Exercise 5.1: Theme Toggler
Create a button that toggles between light and dark theme:
- Use useState for theme state
- Change background and text colors based on theme
- Button text changes between "Dark Mode" and "Light Mode"

### Exercise 5.2: Simple Calculator
Create a calculator with:
- Two number inputs
- Buttons for +, -, ×, ÷
- Display the result
- Use state for both numbers and the result

### Exercise 5.3: Character Counter
Create a text input that:
- Shows how many characters you've typed
- Shows how many characters remain (limit: 280)
- Changes color when getting close to limit
- Prevents typing over the limit

**Bonus**: Add a "Clear" button!

---

## Step 6: Events

### Exercise 6.1: Color Picker
Create a simple color picker:
- 5-6 colored buttons
- When clicked, change the background of a div to that color
- Display the current color name

### Exercise 6.2: Form Validation
Create a registration form with:
- Name input (required, min 3 characters)
- Email input (required, must contain @)
- Password input (required, min 6 characters)
- Submit button
- Show error messages for invalid inputs
- Display success message when valid

### Exercise 6.3: Image Gallery
Create a simple image gallery:
- Array of image URLs (or emojis)
- Display one image at a time
- "Previous" and "Next" buttons
- Show current image number (e.g., "3 of 5")

**Bonus**: Add keyboard navigation (arrow keys)!

---

## Step 7: Final Projects

Choose one of these projects to build:

### Project A: Expense Tracker
Build a simple expense tracker:
- Add expenses with name and amount
- Display total expenses
- Delete individual expenses
- Filter by category
- Show remaining budget (set a budget first)

**Features to include:**
- State management
- Forms and inputs
- List rendering
- Event handling
- Conditional rendering
- Calculations

---

### Project B: Quiz App
Build a simple quiz application:
- Array of questions with multiple choice answers
- Show one question at a time
- "Next" button to go to next question
- Track score
- Show final score at the end
- "Restart" button

**Features to include:**
- State for current question, score, quiz completion
- Event handlers for answer selection
- Conditional rendering for questions/results
- Map for rendering answer choices

---

### Project C: Recipe Manager
Build a recipe management app:
- Add new recipes (name, ingredients, instructions)
- Display list of recipes
- Click to view recipe details
- Delete recipes
- Mark recipes as favorites
- Filter by favorites

**Features to include:**
- Multiple state variables
- Forms with multiple inputs
- Filtering and conditional rendering
- List operations (add, delete, update)
- Styling for different states

---

### Project D: Shopping Cart
Build a simple shopping cart:
- Display products with prices
- Add to cart button
- Display cart items
- Increase/decrease quantity
- Remove from cart
- Calculate total price
- Clear cart button

**Features to include:**
- Complex state management
- Array operations
- Calculations
- Event handling
- Conditional rendering (empty cart message)

---

## 🎓 Challenge Exercises

These are advanced exercises for when you're comfortable with the basics:

### Challenge 1: Tic-Tac-Toe
Build the classic game with:
- 3x3 grid
- X and O turns
- Winner detection
- Reset game
- Display current player

### Challenge 2: Weather Dashboard
Create a weather display (use static data):
- Current temperature
- Weather condition
- 5-day forecast
- Toggle between Celsius and Fahrenheit
- Different icons for weather conditions

### Challenge 3: Habit Tracker
Build a habit tracking app:
- Add habits
- Mark as done for each day
- Streak counter
- Weekly view
- Monthly statistics

---

## 💡 Tips for Success

1. **Start Simple**: Get basic functionality working first, then add features
2. **Console.log**: Use it liberally to debug
3. **Break It Down**: Divide complex problems into smaller steps
4. **Read Errors**: Error messages often tell you exactly what's wrong
5. **Ask for Help**: Don't struggle alone - ask questions!
6. **Experiment**: Try things! Breaking code is part of learning
7. **Comment Your Code**: Explain what you're doing
8. **Test Often**: Run your code frequently to catch errors early

---

## 📚 Resources

- React Official Docs: [react.dev](https://react.dev)
- Practice: [codepen.io](https://codepen.io) or [codesandbox.io](https://codesandbox.io)
- Help: Search on [Stack Overflow](https://stackoverflow.com)

---

## ✅ Checklist: Can You...

Before moving on, make sure you can:
- [ ] Create a functional component
- [ ] Use JSX correctly
- [ ] Pass and use props
- [ ] Style components with CSS
- [ ] Map an array to components
- [ ] Use useState to manage state
- [ ] Handle click events
- [ ] Handle form inputs
- [ ] Update arrays in state
- [ ] Use conditional rendering
- [ ] Build a complete small app

---

**Remember**: Learning to code takes practice. Don't get discouraged if things don't work the first time. Every error is a learning opportunity! 🚀

Good luck with your exercises! 💪

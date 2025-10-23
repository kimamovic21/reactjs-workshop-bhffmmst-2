# Quick Start Guide

## For Teachers 👨‍🏫

### Before the Workshop
1. **Clone/Download this project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open in browser**: Navigate to the URL shown (usually http://localhost:5173)

### Workshop Flow
1. Start at Step 1 and work through each step
2. Explain concepts using the info boxes
3. Live code examples
4. Have students experiment
5. Use the navigation buttons to move between steps

### Files to Know
- `src/App.jsx` - Main navigation component
- `src/steps/` - All 7 lesson steps
- `TEACHER_GUIDE.md` - Detailed teaching instructions
- `STUDENT_EXERCISES.md` - Practice exercises for students

---

## For Students 👩‍🎓

### Setup
1. Make sure Node.js is installed (v18 or higher)
2. Open this folder in VS Code or your preferred editor
3. Open terminal and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open your browser to the URL shown

### How to Use
- **Navigate through steps** using the numbered buttons at the top
- **Read the explanations** carefully
- **Look at the examples** - they show working code
- **Try modifying** the examples to experiment
- **Use the console** (F12 in browser) to see errors and logs

### Getting Help
- Read the error messages in the browser console
- Check the example code in each step
- Ask your instructor
- Look at the STUDENT_EXERCISES.md for extra practice

---

## Project Structure
```
react-radionica-25/
├── src/
│   ├── steps/              # 7 learning steps
│   │   ├── Step1_BasicComponent.jsx
│   │   ├── Step2_Props.jsx
│   │   ├── Step3_Styling.jsx
│   │   ├── Step3_Styling.css
│   │   ├── Step4_Lists.jsx
│   │   ├── Step5_State.jsx
│   │   ├── Step6_Events.jsx
│   │   ├── Step7_FinalProject.jsx
│   │   └── Step7_FinalProject.css
│   ├── App.jsx             # Main app with navigation
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
├── README.md               # Workshop overview
├── TEACHER_GUIDE.md        # Detailed teaching guide
├── STUDENT_EXERCISES.md    # Practice exercises
└── QUICK_START.md          # This file!
```

---

## Keyboard Shortcuts (in browser)
- **F12** - Open developer console
- **Ctrl+Shift+I** (or Cmd+Shift+I on Mac) - Open developer tools
- **Ctrl+S** (or Cmd+S on Mac) - Save file (auto-reload in browser)

---

## Troubleshooting

### Problem: Port 5173 already in use
**Solution**: Vite will automatically suggest another port, or you can kill the process using that port.

### Problem: Changes not showing
**Solution**: 
1. Make sure you saved the file
2. Check the terminal for errors
3. Refresh the browser

### Problem: Module not found error
**Solution**: Make sure you ran `npm install`

### Problem: Blank screen
**Solution**: 
1. Open browser console (F12)
2. Look for red error messages
3. Check if the URL is correct

---

## Tips for Learning
1. **Type the code yourself** - don't just copy/paste
2. **Experiment** - change values and see what happens
3. **Break things** - errors are learning opportunities
4. **Ask questions** - no question is too small
5. **Practice** - build your own projects after the workshop

---

Happy coding! 🚀

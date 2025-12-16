# 📝 Notes App (React)

A fully-featured Notes application built with **React** that allows users to create, manage, and organize notes efficiently with persistent storage and theme support.

---

## 🚀 Live Demo
🔗 https://react-smart-notes-app.vercel.app/

## 💻 Source Code
🔗 https://github.com/Umair-Ali369/React-Smart-Notes-App

---

## ✨ Features

### 📝 Notes Management
- Create new notes
- Edit existing notes
- Notes are saved even after page refresh (Local Storage)

### ⭐ Favorites
- Add notes to Favorites with one click
- Dedicated Favorites page
- Remove notes from Favorites anytime

### 🗑️ Trash System
- Deleted notes move to Trash (not removed immediately)
- Restore notes from Trash
- Permanently delete notes from Trash

### 🧭 Navigation
- Sidebar navigation with:
  - All Notes
  - Favorites
  - Trash

### 🌗 Theme Toggle
- Light mode & Dark mode
- Theme preference saved across refresh

---

## 🛠️ Tech Stack

- **React**
- **React Hooks** (useState, useEffect, useContext)
- **Local Storage**
- **CSS / Tailwind CSS**
- **Vite**

---

## 🧠 App Logic Overview

- Notes are stored in **Local Storage** to persist data
- Separate state management for:
  - Notes
  - Favorites
  - Trash
- Sidebar handles page navigation
- Theme state stored & synced with Local Storage
- Clean UI state updates without page reloads

- ### ✅ App Behavior Check
✔️ Notes stay after refresh  
✔️ Favorite toggle works  
✔️ Trash → Restore works  
✔️ Permanent delete works  
✔️ Theme persists after reload  
✔️ No console errors  

---

### ✅ UI / UX Polish
- Add **empty state messages**
  - “No notes yet”
  - “No favorites added”
  - “Trash is empty”
- Confirm modal for **permanent delete**
- Active sidebar highlight
- Smooth hover transitions



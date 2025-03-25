# 📱 LearnMobile – A Hands-On Mobile Development Playground

Welcome to **LearnMobile**, a fully responsive and theming-aware React Native app built with **Expo**, **TypeScript**, and **Material Design 3 (MD3)**.  
This project is my personal learning lab for mastering **mobile development** while experimenting with UI/UX principles, state management, dark mode, and clean architecture.

---

## ✨ Features

- 🔁 **Light/Dark Mode Toggle** with full theme integration
- 🎨 **Custom Material Design 3 Color System**
- 🧱 **Reusable components** with clean styling via `react-native-paper`
- 📐 **Responsive design** powered by `react-native-responsive-screen`
- 📚 Structured with **Expo Router** and **Context API**
- ☁️ Simulated weather card, motivational quotes, and more UI experimentation
- ⚡ Built with performance and scalability in mind

---

## 🧠 Project Goals

- Deepen understanding of **React Native + Expo**
- Apply **design systems** using MD3 and custom themes
- Explore **navigation, layout**, and **device responsiveness**
- Experiment with **API integration, animations**, and advanced patterns (coming soon)

---

## 🔧 Stack

| Tech                 | Description                        |
|----------------------|------------------------------------|
| [Expo](https://expo.dev/)                 | Fast build/deploy environment           |
| [React Native Paper](https://callstack.github.io/react-native-paper/) | Material Design 3 UI Toolkit            |
| [Expo Router](https://expo.github.io/router/docs)         | File-based routing for React Native     |
| TypeScript           | Static typing                      |
| Context API          | Light state management             |
| Responsive Screen    | Percentage-based responsive layout |

---

## 🗂️ Folder Structure (simplified)


learnMobile/
├─ app/
│  ├─ (tabs)/
│  │  ├─ color/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ meme/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ movie/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ trivia/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ weather/
│  │  │  ├─ _layout.tsx
│  │  │  └─ index.tsx
│  │  ├─ _layout.tsx
│  │  ├─ index.tsx
│  │  └─ settings.tsx
│  └─ _layout.tsx
├─ assets/
│  └─ images/
├─ components/
│  └─ triviaFilter.tsx
├─ constants/
│  ├─ color.ts
│  └─ theme.ts
├─ contexts/
│  ├─ api/
│  │  ├─ color.tsx
│  │  ├─ meme.tsx
│  │  ├─ movie.tsx
│  │  ├─ trivia.tsx
│  │  └─ weather.tsx
│  └─ themeContext.tsx
├─ hooks/
│  ├─ useFrameworkReady.ts
│  ├─ useGreeting.ts
│  └─ useTrivia.ts

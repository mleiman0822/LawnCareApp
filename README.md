# 🌱 Lawn Care Marketplace

A React TypeScript application showcasing a lawn care marketplace where users can browse local technicians, filter by services and ratings, and book appointments.

## ✨ Features

- **Technician Browsing**: View a list of lawn care technicians with ratings and service offerings
- **Smart Filtering**: Filter technicians by service type and minimum rating
- **Interactive Booking**: Select technicians and book services with time slot selection
- **Reusable Components**: Custom components built with Mantine UI
- **State Management**: Context API with useReducer for scalable state management
- **Responsive Design**: Mobile-friendly layout using Mantine Grid system
- **TypeScript**: Full type safety throughout the application

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router v7** for client-side routing
- **Mantine UI** for component library and theming
- **Tabler Icons** for consistent iconography
- **React Context + useReducer** for state management

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── CustomCard.tsx
│   │   ├── CustomBadge.tsx
│   │   └── CustomButton.tsx
│   ├── TechnicianList.tsx    # Main technician browsing component
│   ├── BookingSelector.tsx   # Service booking component
│   └── Navigation.tsx        # App navigation with routing
├── pages/
│   ├── HomePage.tsx         # Landing page
│   ├── TechniciansPage.tsx  # Technician browsing page
│   └── BookingPage.tsx      # Service booking page
├── context/
│   └── AppContext.tsx        # Global state management
├── data/
│   └── mockData.ts          # Mock data for technicians and services
├── types/
│   └── index.ts             # TypeScript type definitions
└── App.tsx                  # Main application with router setup
```

## 🎯 Requirements Implemented

### 1. Technician List Component ✅
- Display technicians with name, rating, and service types
- Filter by service type and minimum rating  
- Uses Mantine Card, Badge, Rating, Group, Text components
- Conditional rendering for "No technicians found" state
- Highlights top-rated technicians with special badges

### 2. Booking Selector Component ✅
- Select number of hours and preferred time slots
- Dynamic summary display with cost calculation
- Uses Mantine NumberInput, Select, Button components
- Real-time state updates with interactive UI

### 3. Conditional & Interactive Rendering ✅
- "No technicians found" message with clear filter option
- Top-rated technician highlighting with yellow badges
- Dynamic UI updates based on user interactions
- Selected technician highlighting with border

### 4. Reusable Components ✅
- `CustomCard` - Used in technician list and booking sections
- `CustomBadge` - Used for service types and top-rated indicators  
- `CustomButton` - Used throughout the app for consistent styling
- All components accept props for customization

### 5. Styling & Layout ✅
- Mantine Grid system for responsive design
- Stack and Group components for organized layouts
- Consistent spacing and theming throughout
- Mobile-friendly responsive breakpoints

### 6. Advanced Patterns (Bonus) ✅
- React Context + useReducer for shared state management
- Custom hooks pattern with `useAppContext`
- Scalable state management for filters and booking data
- Type-safe action dispatching

### 7. React Router v7 Implementation ✅
- **Client-side routing** with BrowserRouter
- **Multiple routes**: Home (`/`), Technicians (`/technicians`), Booking (`/booking`)
- **Navigation component** with active route highlighting
- **404 handling** with redirect to home page
- **Link components** for seamless navigation

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Choices

- **Component Architecture**: Focused on reusability and composition
- **State Management**: Context + Reducer pattern for scalability
- **UI Framework**: Mantine for consistent, accessible components
- **TypeScript**: Strict typing for better developer experience
- **Mock Data**: Hardcoded realistic data for demonstration purposes
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

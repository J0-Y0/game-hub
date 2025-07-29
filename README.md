# GameHub 🎮

A modern, responsive game discovery platform built with React, TypeScript, and Material-UI. GameHub allows users to explore thousands of games across different platforms and genres using the RAWG Video Games Database API.

## ✨ Features

- **🎯 Game Discovery**: Browse and discover games from a vast database
- **🔍 Advanced Filtering**: Filter games by genre, platform, and sorting options
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Theme**: Toggle between dark and light modes
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎨 Modern UI**: Beautiful Material-UI components with custom styling
- **📊 Game Details**: View game ratings, platforms, and release information
- **🔄 Real-time Updates**: Dynamic content loading with smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material-UI Icons & React Icons
- **HTTP Client**: Axios
- **Routing**: React Router DOM v6
- **API**: RAWG Video Games Database

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/J0-Y0/game-hub.git
   cd game-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── GameCard.tsx       # Individual game card component
│   ├── GameCardSkeleton.tsx # Skeleton loader for game cards
│   ├── GameGrid.tsx        # Grid layout for games
│   ├── GamePlatformIcon.tsx # Platform icons display
│   ├── GenresList.tsx      # Genre filtering sidebar
│   ├── Hero.tsx            # Landing page hero section
│   ├── MetaCircle.tsx      # Metacritic score display
│   ├── OrderingMenu.tsx    # Sorting options dropdown
│   ├── PlatformMenu.tsx    # Platform filtering dropdown
│   └── Reaction.tsx        # Emoji reactions component
├── hooks/              # Custom React hooks
│   ├── UseData.ts        # Generic data fetching hook
│   ├── UseGames.ts       # Hook for fetching games
│   ├── UseGenres.ts      # Hook for fetching genres
│   └── usePlatform.ts    # Hook for platform data
├── services/           # API and utility services
│   ├── api-client.ts     # Axios configuration
│   └── resize-image.ts   # Image optimization utility
├── assets/             # Static assets
│   └── images/          # Image assets
└── App.tsx            # Main application component
```

## 🎮 Key Components

### GameGrid
Displays games in a responsive grid layout with loading skeletons and smooth animations.

### Hero Section
Landing page with theme toggle, branding, and quick navigation to games section.

### Filtering & Sorting
- **Genre Filter**: Sidebar with genre categories (GenresList)
- **Platform Filter**: Dropdown menu for gaming platforms (PlatformMenu)
- **Sorting Options**: Various sorting criteria via dropdown (OrderingMenu)

### Game Cards
Individual game cards (GameCard) showing:
- Game artwork with optimized loading
- Title and release date
- Platform icons (GamePlatformIcon)
- Metacritic rating (MetaCircle)
- Hover effects and animations
- Emoji reactions (Reaction)

### Loading States
Skeleton loaders (GameCardSkeleton) for smooth loading experience

### Data Handling
- Custom hooks for data fetching (UseGames, UseGenres, usePlatform)
- Generic data fetching hook (UseData)

## 🔧 Configuration

### API Configuration
The app uses the RAWG API. The API key should be stored in the `.env` file at the root of the project:

```ini
VITE_RAWG_API_KEY=your_api_key_here
VITE_BASE_URL=https://api.rawg.io/api

```

The API client is configured in `src/services/api-client.ts` to use this environment variable:

```typescript
export default axios.create({
    baseURL:import.meta.env.VITE_BASE_URL ,
    headers: { "Content-Type": "application/json"},
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
    },
})
```

### Theme Customization
The app supports both light and dark themes with custom Material-UI theme configuration in `App.tsx`.

## 📱 Responsive Design

- **Mobile**: Collapsible sidebar with floating action button
- **Tablet**: Optimized grid layout and touch-friendly interactions
- **Desktop**: Full sidebar navigation with hover effects

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient themes for both light and dark modes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Custom Components**: Styled Material-UI components with consistent design language
- **Loading States**: Skeleton loaders for better perceived performance

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel/Netlify

1. Connect your repository to your preferred hosting platform
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Deploy!

import React from 'react';
import { useApp } from '../context/AppContext';
import NavBar from './components/NavBar';
import Landing from './screens/Landing';
import Onboarding from './screens/Onboarding';
import ProfileResult from './screens/ProfileResult';
import TextInput from './screens/TextInput';
import Processing from './screens/Processing';
import RoomSelection from './screens/RoomSelection';
import Exploration from './screens/Exploration';
import Recall from './screens/Recall';
import Dashboard from './screens/Dashboard';

const SCREENS = {
  landing: Landing,
  onboarding: Onboarding,
  profile: ProfileResult,
  input: TextInput,
  processing: Processing,
  roomselect: RoomSelection,
  palace: Exploration,
  recall: Recall,
  dashboard: Dashboard,
};

export default function AppShell() {
  const { screen, goTo } = useApp();
  const ScreenComponent = SCREENS[screen] || Landing;
  const showNav = screen !== 'landing';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0d18',
        color: '#e8edf5',
        position: 'relative',
      }}
    >
      <style>{`
        @keyframes screenIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {showNav && <NavBar screen={screen} goTo={goTo} />}

      <div
        key={screen}
        style={{
          animation: 'screenIn 0.3s ease forwards',
        }}
      >
        <ScreenComponent />
      </div>
    </div>
  );
}

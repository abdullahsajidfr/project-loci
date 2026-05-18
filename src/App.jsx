import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import WebsiteLayout from './website/WebsiteLayout';

const AppShell = lazy(() => import('./app/AppShell'));

function AppLoadingFallback() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'var(--cream)',
        backgroundColor: 'var(--ink)',
      }}
    >
      Loading...
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} />
          <Route
            path="/app"
            element={
              <AppProvider>
                <Suspense fallback={<AppLoadingFallback />}>
                  <AppShell />
                </Suspense>
              </AppProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

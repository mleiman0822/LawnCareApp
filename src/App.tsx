import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AppProvider } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { TechniciansPage } from './pages/TechniciansPage';
import { BookingPage } from './pages/BookingPage';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <AppProvider>
        <BrowserRouter>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              minHeight: '100vh',
              padding: '1rem',
              width: '100vw',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column' }}>
              <Navigation />
              
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/technicians" element={<TechniciansPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AppProvider>
    </MantineProvider>
  );
}

export default App;

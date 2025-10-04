import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { Technician, BookingSelection } from '../types';

interface AppState {
  selectedFilters: {
    serviceType: string;
    minRating: number;
  };
  booking: BookingSelection;
  selectedTechnician: Technician | null;
}

type AppAction =
  | { type: 'SET_SERVICE_FILTER'; payload: string }
  | { type: 'SET_RATING_FILTER'; payload: number }
  | { type: 'SET_BOOKING_HOURS'; payload: number }
  | { type: 'SET_BOOKING_TIME_SLOT'; payload: string }
  | { type: 'SET_BOOKING_SERVICE_TYPE'; payload: string }
  | { type: 'SET_SELECTED_TECHNICIAN'; payload: Technician | null }
  | { type: 'RESET_FILTERS' }
  | { type: 'RESET_BOOKING' };

const initialState: AppState = {
  selectedFilters: {
    serviceType: '',
    minRating: 0,
  },
  booking: {
    technicianId: null,
    hours: 1,
    timeSlot: '',
    serviceType: '',
  },
  selectedTechnician: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_SERVICE_FILTER':
      return {
        ...state,
        selectedFilters: { ...state.selectedFilters, serviceType: action.payload },
      };
    case 'SET_RATING_FILTER':
      return {
        ...state,
        selectedFilters: { ...state.selectedFilters, minRating: action.payload },
      };
    case 'SET_BOOKING_HOURS':
      return {
        ...state,
        booking: { ...state.booking, hours: action.payload },
      };
    case 'SET_BOOKING_TIME_SLOT':
      return {
        ...state,
        booking: { ...state.booking, timeSlot: action.payload },
      };
    case 'SET_BOOKING_SERVICE_TYPE':
      return {
        ...state,
        booking: { ...state.booking, serviceType: action.payload },
      };
    case 'SET_SELECTED_TECHNICIAN':
      return {
        ...state,
        selectedTechnician: action.payload,
        booking: { ...state.booking, technicianId: action.payload?.id || null },
      };
    case 'RESET_FILTERS':
      return {
        ...state,
        selectedFilters: initialState.selectedFilters,
      };
    case 'RESET_BOOKING':
      return {
        ...state,
        booking: initialState.booking,
        selectedTechnician: null,
      };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

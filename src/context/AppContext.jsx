import { createContext, useReducer, useContext, useEffect, useCallback, useMemo } from 'react';

const AppContext = createContext(null);

const STORAGE_KEY = 'loci_screen';

const initialState = {
  screen: localStorage.getItem(STORAGE_KEY) || 'landing',
  profile: null,
  inputText: '',
  subject: 'CSS - Constitutional History',
  selectedRoom: 'home',
  campusType: 'lums',
  visited: [],
  recallResults: [],
  recallPhase: 'playing',
  targetIdx: 0,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'GO_TO':
      return { ...state, screen: action.payload };

    case 'SET_PROFILE':
      return { ...state, profile: action.payload };

    case 'SET_INPUT':
      return {
        ...state,
        inputText: action.payload.text,
        subject: action.payload.subject ?? state.subject,
      };

    case 'SELECT_ROOM':
      return {
        ...state,
        selectedRoom: action.payload.roomId,
        campusType: action.payload.campusType ?? state.campusType,
      };

    case 'VISIT_CONCEPT':
      return {
        ...state,
        visited: state.visited.includes(action.payload)
          ? state.visited
          : [...state.visited, action.payload],
      };

    case 'RECORD_RECALL':
      return {
        ...state,
        recallResults: [
          ...state.recallResults,
          { id: action.payload.id, correct: action.payload.correct },
        ],
      };

    case 'ADVANCE_RECALL':
      return { ...state, targetIdx: state.targetIdx + 1 };

    case 'FINISH_RECALL':
      return { ...state, recallPhase: 'result' };

    case 'RESET_SESSION':
      return {
        ...initialState,
        screen: 'landing',
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Persist screen to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, state.screen);
  }, [state.screen]);

  const goTo = useCallback(
    (screen) => dispatch({ type: 'GO_TO', payload: screen }),
    [],
  );

  const setProfile = useCallback(
    (profile) => dispatch({ type: 'SET_PROFILE', payload: profile }),
    [],
  );

  const setInput = useCallback(
    (text, subject) => dispatch({ type: 'SET_INPUT', payload: { text, subject } }),
    [],
  );

  const selectRoom = useCallback(
    (roomId, campusType) =>
      dispatch({ type: 'SELECT_ROOM', payload: { roomId, campusType } }),
    [],
  );

  const visitConcept = useCallback(
    (id) => dispatch({ type: 'VISIT_CONCEPT', payload: id }),
    [],
  );

  const recordRecall = useCallback(
    (id, correct) =>
      dispatch({ type: 'RECORD_RECALL', payload: { id, correct } }),
    [],
  );

  const advanceRecall = useCallback(
    () => dispatch({ type: 'ADVANCE_RECALL' }),
    [],
  );

  const finishRecall = useCallback(
    () => dispatch({ type: 'FINISH_RECALL' }),
    [],
  );

  const resetSession = useCallback(
    () => dispatch({ type: 'RESET_SESSION' }),
    [],
  );

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
      goTo,
      setProfile,
      setInput,
      selectRoom,
      visitConcept,
      recordRecall,
      advanceRecall,
      finishRecall,
      resetSession,
    }),
    [state, goTo, setProfile, setInput, selectRoom, visitConcept, recordRecall, advanceRecall, finishRecall, resetSession],
  );

  return <AppContext value={value}>{children}</AppContext>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
}

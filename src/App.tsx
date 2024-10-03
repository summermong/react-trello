import ReduxClock from './pages/ReduxClock';
import UseReduxClock from './pages/UseReduxClock';
import { Provider as ReduxProvider } from 'react-redux';

import { useStore } from './store';

export default function App() {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReduxClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  );
}

import ClickTest from './pages/ClickTest';
import FileDrop from './pages/FileDrop';
import ForwardRefTest from './pages/ForwardRefTest';
import InputFocusTest from './pages/InputFocusTest';
import InputValueTest from './pages/InputValueTest';

export default function App() {
  return (
    <main>
      <ClickTest />
      <FileDrop />
      <InputFocusTest />
      <InputValueTest />
      <ForwardRefTest />
    </main>
  );
}

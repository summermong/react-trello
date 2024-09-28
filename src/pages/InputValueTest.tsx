import { useCallback, useEffect, useRef } from 'react';
import { Title } from '../components';
import { Button } from '../theme/daisyui';

export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  const getValue = useCallback(
    () => alert(`input value: ${inputRef.current?.value}`),
    []
  );

  useEffect(() => inputRef.current?.focus(), []);
  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <input
          ref={inputRef}
          className="input input-primary"
          placeholder="enter some text"
        />
        <Button className="mt-4 btn-primary" onClick={getValue}>
          GET VALUE
        </Button>
      </div>
    </section>
  );
}

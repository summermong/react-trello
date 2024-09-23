import { useCallback, useState } from 'react';
import { Title } from '../components';
import { Icon } from '../theme/daisyui';

export default function NumberState() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon
            name="add"
            className="btn-primary btn-lg"
            iconClassName="text-4xl"
            onClick={increment}
          />
          <p className="text-3xl font-bold text-primary">{count}</p>
          <Icon
            name="remove"
            className="btn-accent btn-lg"
            iconClassName="text-4xl"
            onClick={decrement}
          />
        </div>
      </div>
    </section>
  );
}

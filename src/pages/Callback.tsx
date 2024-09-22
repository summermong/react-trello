import { useMemo, useCallback } from 'react';
import { Title } from '../components';
import { Button } from '../theme/daisyui';
import * as D from '../data';

export default function Callback() {
  const onClick = useCallback(() => alert('Button Clicked'), []);

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button className="btn-primary btn-wide btn-xs" key={index} onClick={onClick}>
            {name}
          </Button>
        )),
    [onClick]
  );

  return (
    <section className="mt-4">
      <Title className="text-5xl font-bold text-center">Callback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </section>
  );
}

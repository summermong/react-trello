import { ChangeEvent, useState } from 'react';
import { Title } from '../components';

export default function InputTest() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <input
          type="text"
          value={value}
          onChange={onChangeValue}
          className="input-primary input-sm"
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeChecked}
          className="ml-4 checkbox checkbox-primary input-sm"
        />
      </div>
    </section>
  );
}

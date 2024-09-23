import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Subtitle, Title } from '../components';
import * as D from '../data';

export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []);
  const [selectedJobTitle, setSelectedJobTitle] = useState(jobTitles[0]);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedJobTitle(e.target.value);
  }, []);

  const radioInput = useMemo(
    () =>
      jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
          <input
            type="radio"
            name="jobs"
            className="mr-4 radio radio-primary"
            checked={value === selectedJobTitle}
            onChange={onChange}
            value={value}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitles, onChange, selectedJobTitle]
  );

  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">seleced job: {selectedJobTitle}</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInput}</div>
        </div>
      </div>
    </section>
  );
}

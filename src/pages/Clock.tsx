import { Div, Subtitle, Title } from '../components';

export type ClockProps = {
  today: Date;
};

const Clock = ({ today }: ClockProps) => {
  return (
    <Div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  );
};
export default Clock;

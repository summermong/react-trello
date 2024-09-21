import { Button } from '../../theme/daisyui';

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">Basic</h2>
      <div className="flex mt-4 justify-evenly">
        <button className="btn btn-primary">DaysiUI</button>
        <Button className=" btn-primary">BUTTON</Button>
      </div>
    </section>
  );
}

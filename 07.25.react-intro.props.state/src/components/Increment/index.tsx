type IncrementButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const Increment = ({ setCount }: IncrementButtonProps) => {
  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
};

export default Increment;

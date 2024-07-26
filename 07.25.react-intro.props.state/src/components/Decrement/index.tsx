type DecrementButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Decrement = ({ setCount }: DecrementButtonProps) => {
  return <button onClick={() => setCount((c) => c - 1)}>Decrement</button>;
};

export default Decrement;

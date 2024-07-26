import  { useState } from "react";

const Toggle = () => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setStatus(!status)}>toggle</button>
      {status && <h1>Hello World</h1>}
    </>
  );
};

export default Toggle;

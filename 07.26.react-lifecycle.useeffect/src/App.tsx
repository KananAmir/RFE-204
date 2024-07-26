import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CustomersTable from "./components/CustomersTable";

function App() {
  const [cardStatus, setCardStatus] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setCardStatus(!cardStatus)}>Toogle Card</button>
      {cardStatus && <Card />}

      <hr />

      <CustomersTable />
    </>
  );
}

export default App;

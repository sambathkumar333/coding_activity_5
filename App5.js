import "./styles.css";
import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [deposit, setDeposit] = useState();
  const [isDeposit, setIsDeposit] = useState();

  const BtnClicked = (e) => {
    e.preventDefault();
    if (isDeposit === "Deposit") {
      setTotal(Number(deposit) + total);
    } else {
      const ibb = total - Number(deposit);
      if (ibb < 0) {
        alert("Insufficient Balance....");
      } else {
        setTotal(ibb);
      }
    }
  };

  return (
    <div className="App">
      <h1>ATM Mechine</h1>
      <h2>Account Balance ${total}</h2>
      <label>Choose your option:</label>
      <select
        onChange={(e) => {
          setIsDeposit(e.target.value);
        }}
      >
        <option value="Deposit">Deposit</option>
        <option value="Withdraw">Withdraw</option>
      </select>
      <br />
      <h3>{isDeposit}</h3>
      <br />
      <input
        type="number"
        value={deposit}
        onChange={(e) => {
          setDeposit(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit" onClick={BtnClicked}>
        Enter
      </button>
    </div>
  );
}

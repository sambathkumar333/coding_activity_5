import "./styles.css";
import { useState } from "react";
export default function App3() {
  const [balance, setBalance] = useState([]);
  const [deposite, setDeposite] = useState(0);
  var temp;
  const sam = (e) => {
    e.preventDefault();
    temp = Number(balance) + deposite;
    alert(`deposite${deposite}`);
    setDeposite(temp);
    setBalance("");
  };

  const parthi = (e) => {
    e.preventDefault();
    temp = deposite - Number(balance);
    setDeposite(temp);
    setBalance("");
  };
  return (
    <form>
      <div className="App">
        <h1>Atm deposite</h1>
        <h2> Balance is {deposite}</h2>
        <label> Enter the amount </label>
        <input
          type="Number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <button onClick={sam}>Deposit</button>
        <button onClick={parthi}>Withdraw</button>
      </div>
    </form>
  );
}

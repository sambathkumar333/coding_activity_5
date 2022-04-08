import { useState } from "react";
import "./styles.css";

export default function App() {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState("");
  let status = `Account Balance ${balance}`;
  function handleSubmit(e) {
    e.preventDefault();
    setBalance(value + balance);
    setValue("");
    /*balance = balance + Number(deposit);
    let text = `Account Balnce $ ${balance}`;
    document.getElementById("atm").innerHTML = text;
    document.getElementById("deposit").value = " ";*/
  }
  function handleChange(e) {
    setValue(Number(e.target.value));
    //deposit = Number(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1> ATM Deposit </h1>
      <h2> {status} </h2>
      <ATMDeposit value={value} onChange={handleChange}>
        Deposit
      </ATMDeposit>
    </form>
  );
}
function ATMDeposit({ onChange, value }) {
  return (
    <label className="label">
      Enter the Amount
      <input type="number" value={value} onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
}

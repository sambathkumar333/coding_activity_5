import "./styles.css";

export default function App() {
  let balance = 0;
  let deposit = 0;
  function handleSubmit(e) {
    e.preventDefault();
    balance = balance + Number(deposit);
    let text = `Account Balnce $ ${balance}`;
    document.getElementById("atm").innerHTML = text;
    document.getElementById("deposit").value = " ";
  }
  function handlechange(e) {
    deposit = Number(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1> ATM Deposit </h1>
      <h2 id="atm"> Account Balance $(balance) </h2>
      <label> Enter the Amount </label>
      <input type="number" id="deposit" onchange={handlechange} />
      <input type="submit"></input>
    </form>
  );
}

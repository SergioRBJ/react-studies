import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>Our menu</h2>
      <Pizza />
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  else alert("We're close!");

  return (
    <footer>
      {new Date().toLocaleDateString()} {"We're currently open!"}
    </footer>
  );
}
``;

function Pizza() {
  return (
    <>
      <h1>Pizza</h1>
      <img src="pizzas/spinaci.jpg" alt="Spinaci pizza" />
      <div>Tomato, mozarella, spinach, and ricotta cheese</div>
    </>
  );
}

export default App;

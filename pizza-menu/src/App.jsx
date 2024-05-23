import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  else alert("We're close!");

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} {"We're currently open!"}
    </footer>
  );
}

function Pizza() {
  return (
    <>
      <h3>Pizza</h3>
      <img src="pizzas/spinaci.jpg" alt="Spinaci pizza" />
      <div>Tomato, mozarella, spinach, and ricotta cheese</div>
    </>
  );
}

export default App;

import { Outlet, Link } from "react-router";

export default function MainLayout() {
  function toggleTheme() {
    const current = ui("mode");
    const next = current === "dark" ? "light" : "dark";
    ui("mode", next);
  }

  return (
    <div>
      <nav className="m l left surface-container">
        <Link to="/">
          <i>home</i>
          <span>Home</span>
        </Link>

        <Link to="/about">
          <i>info</i>
          <span>Info</span>
        </Link>
        <Link to="/demo">
          <i>folder</i>
          <span>Projects</span>
        </Link>
        <Link to="/contact">
          <i>mail</i>
          <span>Contact</span>
        </Link>
      </nav>

      <header className="fixed responsive max surface-container-low">
        <nav className="right-align">
          <button className="transparent circle" onClick={toggleTheme}>
            <i>dark_mode</i>
          </button>
          <button className="transparent circle">
            <i>help</i>
          </button>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

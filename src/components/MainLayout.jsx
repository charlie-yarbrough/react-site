import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <nav className="m l left">
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
          <span>Demo</span>
        </Link>
        <Link to="/contact">
          <i>mail</i>
          <span>Contact</span>
        </Link>
      </nav>

      <header className="fixed responsive max grey3 black-text">
        <nav className="right-align">
          <button className="transparent circle">
            <i>palette</i>
          </button>
          <button className="transparent circle">
            <i>database</i>
          </button>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

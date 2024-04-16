import { Jarre } from './components/Jarre.jsx';
import { Bouteille } from './components/Bouteille.jsx';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

function LaNavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={'/'}>
              Tableau de bord
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/contact'}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/calendar'}>
              Calendrier
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="container mainDiv">
        <LaNavBar />
        <div className="container text-center">
          <div className="row">
            <h1>Kombucha</h1>
          </div>
          <div className="row">
            <h2>Tableau de bord</h2>
          </div>
        </div>
        <div className="row">
          <Jarre className="col-3" />
          <Bouteille className="col-3" number="1" />
          <Bouteille className="col-3" number="2" />
          <Bouteille className="col-3" number="3" />
        </div>
      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div>
        <LaNavBar />

        <div>le contact</div>
      </div>
    ),
  },
  {
    path: '/calendar',
    element: (
      <div className="container">
        <LaNavBar />

        <div className="container text-center">
          <div className="row">
            <h1>Kombucha</h1>
          </div>
          <div className="row">
            <h2>Historique détaillé</h2>
          </div>
        </div>
        <div className="row">
          <Jarre className="col-3" />
          <Bouteille className="col-3" number="1" />
          <Bouteille className="col-3" number="2" />
          <Bouteille className="col-3" number="3" />
        </div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

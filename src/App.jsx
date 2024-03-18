import { Jarre } from './components/Jarre.jsx';
import { Bouteille } from './components/Bouteille.jsx';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="container">
        <nav>
          <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
        <h1>Kombucha - Tableau de bord</h1>
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
        <nav>
          <NavLink to={'/'}>Tableau de bord</NavLink>
        </nav>
        <div>le contact</div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

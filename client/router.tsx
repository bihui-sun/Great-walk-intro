/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home.tsx'
import NorthIsland from './components/NorthIsland.tsx'
import SouthIsland from './components/SouthIsland.tsx'
import NorthDetail from './components/Northdetail.tsx'
import SouthDetail from './components/Southdetail.tsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/Great-walk-intro/" element={<App />}>
      <Route path="/Great-walk-intro/" element={<Home />}>
        <Route
          path="/Great-walk-intro/northisland/"
          element={<NorthIsland />}
        />
        ,
        <Route
          path="/Great-walk-intro/southisland/"
          element={<SouthIsland />}
        />
        ,
      </Route>
      <Route
        path="/Great-walk-intro/northisland/:code"
        element={<NorthDetail />}
      />
      <Route
        path="/Great-walk-intro/southisland/:code"
        element={<SouthDetail />}
      />
    </Route>,
  ])
)

export default router

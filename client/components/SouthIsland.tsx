import data from '../../data/southwalks.ts'
import { Link } from 'react-router-dom'

function SouthIsland() {
  return (
    <div>
      <h2>South Island Great Walks</h2>
      <ul>
        {data.map((walk) => (
          <li key={walk.code}>
            <Link to={`./southisland/${walk.code}`}>{walk.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SouthIsland

import data from '../../data/northwalks.ts'
import { Link } from 'react-router-dom'

function NorthIsland() {
  return (
    <div>
      <h2>North Island Great Walks</h2>
      <ul>
        {data.map((walk) => (
          <li key={walk.code}>
            <Link to={`./northisland/${walk.code}`}>{walk.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NorthIsland

import image from '../../Images/nz.png'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>The Great New Zealand Great Walk Guide</h1>
      <img className="nz" src={image} alt="" />
      <p>
        Welcome to your one-stop guide to New Zealand&apos;s Great Walks!
        Whether you&apos;re a seasoned tramper or an adventurous first-timer,
        we&apos;ve got you covered. Dive into reviews, stunning photos, and
        insider tips for all ten of these iconic trails. Let us help you find
        your perfect match, plan your dream hike, and experience the best of New
        Zealand&apos;s breathtaking scenery.
      </p>
      <p>
        <Link to="./northisland">North Island</Link>
      </p>
      <p>
        <Link to="./southisland">South Island</Link>
      </p>

      <Outlet />
    </div>
  )
}

export default Home

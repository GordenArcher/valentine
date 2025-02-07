import { Link } from "react-router-dom"

const NotFound = () => {
  return (
        <div className="not-found-container">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-text">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
          <p className="not-found-emoji">😢</p>
          <Link to="/" className="back-home">Go Home</Link>
        </div>
  )
}

export default NotFound

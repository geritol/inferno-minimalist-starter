import {Link} from 'inferno-router';

export default function MenuBar( props ){
  return (
    <header class="header">
      <nav class="inner">
        <Link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo"></img>
        </Link>
        <Link to="/top">Top</Link>
        <Link to="/new">New</Link>
        <Link to="/show">Show</Link>
        <Link to="/ask">Ask</Link>
        <div class="right">
          <Link to="/register">Register</Link>
        </div>
      </nav>

    </header>
  )
}

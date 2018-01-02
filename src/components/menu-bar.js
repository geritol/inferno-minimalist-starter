import {Link} from 'inferno-router';

export default function MenuBar( props ){
  return (
    <header class="header">
      <nav class="inner">
        <Link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo"></img>
        </Link>
        <Link to="/about">About</Link>
        <div class="right">
          <Link to="/register">Register</Link>
        </div>
      </nav>

    </header>
  )
}

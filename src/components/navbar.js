


const Navbar = () => {
  
  return (
    
        
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand ">GaWear Watch</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#productSection">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#detailSection">Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;

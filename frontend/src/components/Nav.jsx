function Nav() {
  return (
    <div className="nav-container">
      <div className="input-search">
        <input type="text" placeholder="RECHERCHEZ UN FILM" />
      </div>
      <div className="filter-note">
        <div className="left-part">
          <h5>
            NOTE<span className="arrow">&#8593;</span>
          </h5>
        </div>
        <div className="right-part">
          <h5>
            NOTE<span className="arrow">&#8595;</span>
          </h5>
        </div>
      </div>
      <div className="filter-nav">
        <p>Tous les films</p>
        <p>Favoris</p>
        <p>Prochainement</p>
      </div>
    </div>
  );
}

export default Nav;

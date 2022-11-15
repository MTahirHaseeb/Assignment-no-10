import Image from "next/image"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">  <Image

src="/../public/logo.png"
alt="Picture of the author"
width={78}
height={78}
/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">



              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hypeindustry
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hype Offers
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shipping
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>


              <li className="nav-item" ><a href="" className="nav-link">Seller Request Form</a></li>


            </ul>
          </div>
          {/* <div className="nav-bar">
            <ul className="navbar-nav" >
              <li className="nav-item" ><i className="fa-light fa-folder-user"></i><a href="#">Login</a></li>
            </ul>
          </div> */}

          <button type="button" className="btn btn-light" >
            <i className="bi bi-box-arrow-in-right">Login</i>
          </button>

         
            <form className="d-flex" role="search">
            < input className="form-control me-2" type="search" placeholder="Brand,Models.." aria-label="Search" /> 

            </form>
         

        </div>
      </nav>

    </div>
  );
}

export default Navbar;
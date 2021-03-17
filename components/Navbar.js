import Link from 'next/link'; 

const Navbar = () => ( 
    <nav className="d-none navbar navbar-expand-lg navbar-dark bg-dark mb-5 position-fixed">
        <div className="container">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        Hiver Studios <small>music</small>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                        <li className="nav-item">
                            <Link href="/blog">
                                <a className="nav-link" >Audio</a>
                            </Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>
    </nav> 
)

export default Navbar;

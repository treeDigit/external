import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink'
import SidebarModal from '../SidebarModal/SidebarModal'

class Navbar extends Component {
  // Sidebar Modal
  state = {
    sidebarModal: false,
  }
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    })
  }

  // Search Form
  state = {
    searchForm: false,
  }
  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      }
    })
  }

  // Navbar
  _isMounted = false
  state = {
    display: false,
    collapsed: true,
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  componentDidMount() {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    let { products } = this.props
    const { collapsed } = this.state
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show'
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right'
    return (
      <>
        <div id='navbar' className='navbar-area'>
          <div className='main-nav'>
            <div className='container'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <Link href='/index5'>
                  <a className='navbar-logo'>
                    <img
                      src='/images/logo1.png'
                      alt='logo'
                      height={60}
                      width={60}
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='icon-bar top-bar'></span>
                  <span className='icon-bar middle-bar'></span>
                  <span className='icon-bar bottom-bar'></span>
                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                    <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                        </li>
                                            

 
                                              

    <li className="nav-item">
    <Link href="/about">
        <a className="nav-link">
            About Us <i className="fas fa-chevron-down"></i>
        </a>
    </Link>

    <ul className="dropdown-menu">
        <li className="nav-item">
            <Link href="/about#digital" activeClassName="active">
                <a className="nav-link"> Digital Explorer</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/about#our-mission" activeClassName="active">
                <a className="nav-link">Core Competencies</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/about#our-benefits" activeClassName="active">
                <a className="nav-link">Value Proposition</a>
            </Link>
        </li>
    </ul>
</li>

                                               

<li className="nav-item">
    <Link href="\services2">
        <a className="nav-link">
            Services {' '}<i className="fas fa-chevron-down"></i>
        </a>
    </Link>

    <ul className="dropdown-menu">
        <li className="nav-item">
            <Link href="\services2#it-services-section" activeClassName="active">
                <a className="nav-link">
Business Strategy and Planning</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="\services2#Innovative-Solutions-Websites" activeClassName="active">
                <a className="nav-link">Website Design & Development</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="\services2#cloud-storage" activeClassName="active">
                <a className="nav-link">Cloud Storage & Support Services</a>
            </Link>
        </li>

        <li className="nav-item">
            <Link href="\services2#Migration-Testing-Maintainance" activeClassName="active">
                <a className="nav-link">
Migration, Testing & Maintainance</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="\services2#Content-Support-Services" activeClassName="active">
                <a className="nav-link">
Content Support Services</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="\services2#Quality-Knowledge" activeClassName="active">
                <a className="nav-link">Quality & Knowledge</a>
            </Link>
        </li>
    </ul>
</li>


                                       
                                            <li className="nav-item">
                                            <Link href="/careers" activeClassName="active">
                                                <a className="nav-link">Careers</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/life" activeClassName="active">
                                                <a className="nav-link">Life At TreeDigit</a>
                                            </Link>
                                        </li>

                    {/*   <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/projects" activeClassName="active">
                                                        <a className="nav-link">Projects Style One</a>
                                                    </Link>
                                               
                                                <li className="nav-item">
                                                    <Link href="/projects2" activeClassName="active">
                                                        <a className="nav-link">Projects Style Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/projects3" activeClassName="active">
                                                        <a className="nav-link">Projects Style Three</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/projects4" activeClassName="active">
                                                        <a className="nav-link">Projects Style Four</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/project-details" activeClassName="active">
                                                        <a className="nav-link">
                                                            Project Details
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                    {/*     <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Shop <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/shop" activeClassName="active">
                                                        <a className="nav-link">Shop</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/single-product" activeClassName="active">
                                                        <a className="nav-link">Single product</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Blog <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/blog2" activeClassName="active">
                                                        <a className="nav-link">Blog Right Sidebar</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>*/}

                    <li className='nav-item'>
                      <Link href='/contact' activeClassName='active'>
                        <a className='nav-link'>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>


                                {/* <div className="others-options">
                                    <div className="cart-items">
                                        <Link href="/cart">
                                            <a>
                                                <i className="fas fa-shopping-cart"></i> 
                                                <span>{products.length}</span>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn flaticon-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn flaticon-close ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i> 
                                                    </button>  
                                                </form> 
                                            </div>  
                                        </div>  
                                    </div> 

                                    <div className="burger-menu" onClick={this.toggleModal}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div> 
                                </div> */}
                            </nav> 
                        </div> 
                    </div>
                </div> 

                {/* Right Sidebar Modal 
                <SidebarModal 
                    onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} 
                /> */}
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
} 

export default connect(mapStateToProps)(Navbar)

// export default Navbar;

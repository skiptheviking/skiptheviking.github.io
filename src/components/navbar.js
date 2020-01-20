import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const linkStyles = {
    marginLeft: '0rem',
    marginRight: '1rem',
    fontSize: 16
}
const Navbar = () => (
   <div>
       <Link to={`/contact`} style={linkStyles}>Professional Services</Link>
       {/*<Link to={`/code`} style={linkStyles}>Viking Code</Link>*/}
       {/*<Link to={'/apps'} style={linkStyles}>Example Apps</Link>*/}
   </div>
);

export default Navbar

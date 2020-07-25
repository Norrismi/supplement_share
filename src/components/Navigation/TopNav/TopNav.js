import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavBar = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Home
        </Link>

        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);

// const NavBar = () => {
//   return (
//     <nav className="App sticky-top">
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         bg="dark"
//         variant="dark"
//         position="sticky"
//       >
//         <Navbar.Brand href="#home">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto "></Nav>
//           <Nav>
//           <Link exact to="/SignIn">
//               <Nav.Link href="#SignIn">
//                 <li>Sign In</li>
//               </Nav.Link>
//             </Link>
//           <Link exact to="/SignUp">
//               <Nav.Link href="#SignUp">
//                 <li>Sign Up</li>
//               </Nav.Link>
//             </Link>
//           <Link exact to="/SignOut">
//               <Nav.Link href="#SignOut">
//                 <li>Sign Out</li>
//               </Nav.Link>
//             </Link>
//             <Link exact to="/">
//               <Nav.Link href="#CommunityShare">
//                 <li>Community Share</li>
//               </Nav.Link>
//             </Link>

//             <Link exact to="/MyPage">
//               <Nav.Link href="#MyPage">
//                 <li>My Page</li>
//               </Nav.Link>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </nav>
//   );
// };

// export default NavBar;

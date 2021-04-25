import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav ,Container} from 'react-bootstrap'

const Header = ()=>{
    return(
        <>
         <Navbar bg="light" variant="light">
            <Container className="py-2"> 
                 <LinkContainer to="/" > 
                     <Navbar.Brand   >easybank</Navbar.Brand>
                 </LinkContainer>
               
               
                    <Nav className="mr-auto">  
                    <LinkContainer to="/home">
                        <Nav.Link class="nav">Home</Nav.Link>
                    </LinkContainer>      
                      <LinkContainer to="/about">
                      <Nav.Link class="nav">About</Nav.Link>
                      </LinkContainer>

                      <LinkContainer to="/contact">
                      <Nav.Link class="nav">Contact</Nav.Link>
                    
                      </LinkContainer>

                      <LinkContainer to="/news">
                      <Nav.Link class="nav">Financial News</Nav.Link>
                      </LinkContainer>
                        
                    </Nav>
                    </Container>  
                </Navbar>
        </>
    )
}
export default Header
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h3 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Save time, save money!
      </h3>
      {/* <Link to="/home">Home</Link> */}
      <h5 style={{color:"white",textAlign: "center"}}>Sign up and we'll send the best deals to you</h5>
      <div className="sub">
       <form action="https://formspree.io/f/mrgvklkn" method="POST">
       <input type="email" name="Email" className="sub-butt" placeholder="@UserEmail" required></input>
                  <input type="submit" value="Submit" className="sub-b" style={{"cursor":"pointer"}}></input>
                  
       {/* <button type="button" value="Submit" className="btn btn-primary">Submit</button> */}
       </form>
        
   </div><br></br>
   <hr></hr><br></br>
      <Container className="container">
        <Row>
          <Column>
            <Heading><u><SupportAgentIcon/> Customer Care</u></Heading>
            <Link to="/contact"><FooterLink>Contact Us</FooterLink></Link>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </Column>
          <Column>
            <Heading><u><PersonPinIcon/> My Account </u></Heading>
            <FooterLink href="/signup">Sign in/Register</FooterLink>
            <FooterLink href="#">My Wishlist</FooterLink>
            <FooterLink href="#">My Cart</FooterLink>
          </Column>
          <Column>
            <Heading><u><AddIcCallSharpIcon/> More Help </u></Heading>
            <FooterLink href="#">Our Team</FooterLink>
            <FooterLink href="#">Admin</FooterLink>
          </Column>
          <Column>

            <Heading><u><ConnectWithoutContactIcon/>Social Media</u></Heading>
            <FooterLink href="https://in.linkedin.com/">
              <LinkedInIcon/> LinkedIn
            </FooterLink>
            <FooterLink href="https://github.com/">
              <GitHubIcon/> GitHub
            </FooterLink>
            <FooterLink href="https://twitter.com/">
             <TwitterIcon/> Twitter
            </FooterLink>
            <FooterLink href="https://www.facebook.com/">
                    <FacebookIcon/> Facebook
            </FooterLink>
            
          </Column>
        </Row>
      </Container>
      <hr></hr>
     <div> <h5 style={{marginLeft:"700px",color:"lightblue"}}>Copyright@2023 All Rights Reserved</h5></div>
    </Box>
  );
};
export default Footer;
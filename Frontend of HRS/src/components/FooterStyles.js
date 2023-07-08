import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  width: 100%;
  ${'' /* display: flex; */}
  
   
  @media (max-width: 1000px) {
    padding: none 0px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    marginTop:;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
`;
   
export const Row = styled.div`
  display: grid;
  ${'' /* display: flex; */}
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  ${'' /* display: flex; */}
  &:hover {
      color: #c9932f;
      transition: 200ms ease-in;
      
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  textAlign:center;
  ${'' /* display: flex; */}
`;
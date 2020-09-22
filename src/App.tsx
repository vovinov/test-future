import React from 'react';
import styled from 'styled-components/macro'; 

import TableContainer from "./components/Table/TableContainer"

function App() {

  return (
    <StyledWrapper>
      <Container>
        <TableContainer></TableContainer>
      </Container>
    </StyledWrapper>
  );

}

export default App;


const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

`;

const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
`;
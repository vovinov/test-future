import styled from 'styled-components';

export const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 960px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    @media (max-width: 970px) {
        min-width: 500px;
    }

    @media (max-width: 510px) {
        min-width: 300px;
    }
`

export const StyledHead = styled.thead`
    background-color: #009879;
    color: #ffffff;
`



export const StyledTableBody = styled.tbody``

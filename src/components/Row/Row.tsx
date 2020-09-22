import React from 'react';

import {StyledRow, StyledCell} from './styles';

import {RowType} from '../../types';

type PropsType = {
    item: RowType
}


const Row: React.FC<PropsType> = ({item}) => {
    return (
        <StyledRow>
            <StyledCell>{item.id}</StyledCell>
            <StyledCell>{item.firstName}</StyledCell>
            <StyledCell>{item.lastName}</StyledCell>
            <StyledCell>{item.email}</StyledCell>
            <StyledCell>{item.phone}</StyledCell>
        </StyledRow>
    )
}

export default Row;

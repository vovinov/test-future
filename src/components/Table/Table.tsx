import React from 'react'
import {StyledHead, StyledTable, StyledTableBody} from './styles';
import {RowType} from '../../types';

import Row from '../Row/Row';

const headerData = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone'
}

export type MapPropsType = {
    data: Array<RowType>
}

export type DispatchPropsType = {

}


const Table: React.FC<MapPropsType & DispatchPropsType> = ({data}) => {
    return (
        <StyledTable>
            <StyledHead>
                <Row item={headerData}></Row>
            </StyledHead>
            <StyledTableBody>
                {data.map((item)  => <Row item={item} />)}
            </StyledTableBody>
        </StyledTable>
        
    )
}

export default Table;

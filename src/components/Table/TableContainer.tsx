import React from 'react';
import Table from './Table';

import {connect} from 'react-redux';
import {MapPropsType, DispatchPropsType} from './Table';
import {AppStateType} from '../../store';

class TableContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Table {...this.props} />
    }
    
}

const mapStateToProps = (state: AppStateType) => {
    return {
        data: state.tablePage.data
    }
}

export default connect(mapStateToProps, {})(TableContainer)

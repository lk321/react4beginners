import React from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';

import * as actions from '../actions/test';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Hola Mundo</h1>
            <Button type="primary">Cool</Button>
        </div>);
    }
}

/**
 * Mapear Estados a propiedades
 * @param {*} state
 */
const mapStateToProps = (state) => {
    return {
        error: state.test.error,
        success: state.test.success,
        initialValues: state.test.data
    };
};
/**
 * Conectar acciones con componente.
 */
export default connect(mapStateToProps, actions)(Hello);
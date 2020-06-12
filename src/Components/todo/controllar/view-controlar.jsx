import React from 'react'
import PropTypes from 'prop-types'
import { Label, CustomInput } from 'reactstrap'


const ViewControl = ({ view, changeView }) => (
    <div className='d-flex'>
        <Label for='table-view' className='mr-4'>
            <CustomInput
                type='radio'
                name='view'
                value='table'
                id='table-view'
                onChange={changeView}
                className='d-inline-block'
                checked={view === 'table'}
            />
            Table View
        </Label>
        <Label for='list-view' className='mr-4'>
            <CustomInput
                type='radio'
                name='view'
                value='list'
                id='list-view'
                onChange={changeView}
                className='d-inline-block'
                checked={view === 'list'}
            />
            List View
        </Label>

    </div>
);


ViewControl.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}

export default ViewControl;
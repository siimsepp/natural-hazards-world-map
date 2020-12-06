import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const SelectionBox = ({ valiNatEventId }) => {
  return (
    <div className='selection-box'>
      <DropdownButton variant='success' title='Category' onSelect={e => valiNatEventId(e)}>
        <Dropdown.Item eventKey='8'>Wildfires</Dropdown.Item>
        <Dropdown.Item eventKey='10'>Severe Storms</Dropdown.Item>
        <Dropdown.Item eventKey='12'>Volcanoes</Dropdown.Item>
        <Dropdown.Item eventKey='15'>Icebergs</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default SelectionBox

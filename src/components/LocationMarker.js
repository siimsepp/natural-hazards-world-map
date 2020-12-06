import { WiVolcano } from 'react-icons/wi'
import { RiTyphoonLine } from 'react-icons/ri'
import { GiWildfires, GiIceberg } from 'react-icons/gi'

const LocationMarker = props => {
  return (
    <div onClick={props.onClick}>
      {props.natEventId === '8' && <GiWildfires className='location-icon' style={{ color: 'orangered' }} />}
      {props.natEventId === '10' && <RiTyphoonLine className='location-icon' style={{ color: 'mediumblue' }} />}
      {props.natEventId === '12' && <WiVolcano className='location-icon' style={{ color: 'firebrick' }} />}
      {props.natEventId === '15' && <GiIceberg className='location-icon' style={{ color: 'dodgerblue' }} />}
    </div>
  )
}

export default LocationMarker

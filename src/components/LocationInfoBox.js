import Button from 'react-bootstrap/Button'

const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info loc-info-click'>
      <ul className='loc-info-click'>
        <li className='loc-info-click'>
          <strong className='loc-info-click'>{info.title}</strong>
        </li>
        <li className='loc-info-click'>
          <Button className='loc-info-click' variant='warning' onClick={() => window.open(info.url, '_blank')}>
            Info
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default LocationInfoBox

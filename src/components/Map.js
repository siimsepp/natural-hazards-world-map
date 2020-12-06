import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import SelectionBox from './SelectionBox'
import AboutButtonBox from './AboutButtonBox'
import AboutBox from './AboutBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null) // Klikitud markeri info
  const [natEventId, setNatEventId] = useState(12) // Valitud nähtuse id
  const [aboutBoxVisibility, setAboutBoxVisibility] = useState(false)

  useEffect(() => {
    window.addEventListener('mousedown', mouseClickHandle)
  })

  // Kui kasutaja klikib väljaspool about kasti või infokasti, siis vastavad kastid suletakse.
  const mouseClickHandle = e => {
    !e.target.classList.contains('loc-info-click') && setLocationInfo(null)
    !e.target.classList.contains('about-box-click') && setAboutBoxVisibility(false)
  }

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === +natEventId && ev.geometries[0].type === 'Point') {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[ev.geometries.length - 1].coordinates[1]}
          lng={ev.geometries[ev.geometries.length - 1].coordinates[0]}
          natEventId={natEventId}
          onClick={() => setLocationInfo({ title: ev.title, url: ev.sources[0].url })}
        />
      )
    } else if (ev.categories[0].id === +natEventId && ev.geometries[0].type === 'Polygon') {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[0][0][1]}
          lng={ev.geometries[0].coordinates[0][0][0]}
          natEventId={natEventId}
          onClick={() => setLocationInfo({ title: ev.title, url: ev.sources[0].url })}
        />
      )
    }
    return null
  })

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo !== null && <LocationInfoBox info={locationInfo} />}
      <SelectionBox valiNatEventId={value => setNatEventId(value)} />
      <AboutButtonBox aboutToggle={() => setAboutBoxVisibility(prevState => !prevState)} />
      {aboutBoxVisibility && <AboutBox />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 37.7,
    lng: 15.0
  },
  zoom: 6
}

export default Map

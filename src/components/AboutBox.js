import React from 'react'

const AboutBox = () => {
  return (
    <div className='about-box about-box-click'>
      <h5 className='about-box-click'>Currently Active Natural Hazards on a World Map</h5>
      <p className='about-box-click'>
        The app is based on the data provided by NASA. The API can be found{' '}
        <a
          className='about-box-click'
          href='https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
        . It provides information about the recent locations of currently active wildfires, severe storms, icebergs and
        active volcanoes.
      </p>
      <p className='about-box-click'>
        The author of the app is Siim Sepp. The code is available on{' '}
        <a
          className='about-box-click'
          href='https://github.com/siimsepp/natural_hazards_world_map'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
        . The app is inspired and the code is partly based on the{' '}
        <a
          className='about-box-click'
          href='https://www.youtube.com/watch?v=ontX4zfVqK8&t=1104s'
          target='_blank'
          rel='noreferrer'
        >
          video by Brad Traversy
        </a>{' '}
        published on Youtube.
      </p>
    </div>
  )
}

export default AboutBox

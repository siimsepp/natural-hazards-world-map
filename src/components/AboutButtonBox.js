import Button from 'react-bootstrap/Button'

const AboutButtonBox = props => {
  return (
    <div className='about-button-box about-box-click'>
      <Button className='about-box-click' variant='primary' onClick={props.aboutToggle}>
        About
      </Button>
    </div>
  )
}

export default AboutButtonBox

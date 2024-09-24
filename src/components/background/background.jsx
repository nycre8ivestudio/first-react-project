import './background.css'
import video1 from '../../assets/video/video1.mp4'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'

const Background = ({playStatus, heroCount}) => {
  if (playStatus) {
    return (
        <video className='background' autoPlay muted loop playsInline>
          <source src={video1} type='video/mp4' />
        </video>
    )
  }
  else if (heroCount === 0) {
    return (
      <img src={image1} alt='background' className='background' />
    )
  }
  else if (heroCount === 1) {
    return (
      <img src={image2} alt='background' className='background' />
    )
  }
  else if (heroCount === 2) {
    return (
      <img src={image3} alt='background' className='background' />
    )
  }
}

export default Background
import Facebook from '../assets/facebook.png'
import LinkedIn from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import GitHub from '../assets/github-image.png'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500 text-white'
        href='https://github.com/kennedyowusu'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='GitHub' src={GitHub} className='w-7 h-7' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/kennedy-owusu/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src={LinkedIn} className='h-7 w-7' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://twitter.com/_iamkobby'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='twitter-link' src={Twitter} className='w-7 h-7' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.facebook.com/Kennediowusu/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='facebook-link' src={Facebook} className='w-7 h-7' />
      </a>

    </div>
  )
}

export default SocialMediaIcons

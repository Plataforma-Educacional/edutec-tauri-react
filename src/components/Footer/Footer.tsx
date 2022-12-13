import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto bg-ctp-base transition-all">
      <p className='pb-3 text-center text-ctp-subtext0 font-light text-lg'>
        {'Copyright Portal Educacional© '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  )
}

export default Footer

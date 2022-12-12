import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto bg-white dark:bg-slate-600 transition-all">
      <p className='pb-3 text-center text-gray-800 dark:text-white font-bold text-lg'>
        {'Copyright Portal Educacional© '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  )
}

export default Footer


const IconCart = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-shopping-cart'
      {...props}
    >
      <circle cx={9} cy={21} r={1} />
      <circle cx={20} cy={21} r={1} />
      <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
    </svg>
  )
}
const IconClose = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-x'
      {...props}
    >
      <path d='M18 6 6 18M6 6l12 12' />
    </svg>
  )
}
const IconDelete = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-trash'
      {...props}
    >
      <path d='M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
    </svg>
  )
}
const IconMenu = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-menu'
      {...props}
    >
      <path d='M3 12h18M3 6h18M3 18h18' />
    </svg>
  )
}
const IconMinus = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-minus'
      {...props}
    >
      <path d='M5 12h14' />
    </svg>
  )
}

const IconNext = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-chevron-right'
      {...props}
    >
      <path d='m9 18 6-6-6-6' />
    </svg>
  )
}
const IconPlus = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-plus'
      {...props}
    >
      <path d='M12 5v14M5 12h14' />
    </svg>
  )
}
const IconPrevious = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-chevron-left'
      {...props}
    >
      <path d='m15 18-6-6 6-6' />
    </svg>
  )
}

export {
  IconCart,
  IconClose,
  IconDelete,
  IconMenu,
  IconMinus,
  IconNext,
  IconPlus,
  IconPrevious
}

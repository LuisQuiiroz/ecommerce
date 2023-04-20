export function PrimaryButton ({ children, ...props }) {
  return (
    <button
      className='bg-cus-orange w-full rounded-xl py-4 text-cus-white flex items-center justify-center'
      {...props}
    >
      {children}
    </button>
  )
}

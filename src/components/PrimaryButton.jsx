export function PrimaryButton ({ children, ...props }) {
  return (
    <button
      className='bg-cus-primary w-full rounded-xl py-4 text-white flex items-center justify-center hover:opacity-70'
      {...props}
    >
      {children}
    </button>
  )
}

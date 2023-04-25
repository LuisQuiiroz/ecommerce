import './index.css'
export function Loading () {
  return (
    <div className='flex justify-center items-center '>
      <div className='mx-auto'>
        <div className='lds-roller'><div /><div /><div /><div /><div /><div /><div /><div /></div>
      </div>
    </div>
  )
}

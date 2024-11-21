import Image from 'next/image'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className='px-2 w-full'>
      <div className='flex flex-col justify-center items-center gap-4 py-4 mx-auto'>
        <h2 className='text-2xl'>Page Not Found</h2>
        <Image
          className='m-0 rounded-xl'
          src='/images/4040.png'
          width={300}
          height={300}
          sizes='300px'
          alt='Page Not Found'
          priority={true}
          title='Page Not Found'
        />
      </div>
    </div>
  )
}

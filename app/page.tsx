import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-black bg-home-img'>
      <main className='flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh'>
        <div className='flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white'>
          <h1 className='text-3xl font-bold'>
            OxFUND Computer
            <br />
            Repairs Shop
          </h1>
          <address>
            555 Gateway Lane
            <br />
            Kansas City,KS 55555
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href='tel:08121146164' className='hover:underline'>
            08121146164
          </Link>
        </div>
      </main>
    </div>
  )
}

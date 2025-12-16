
export default function Contact() {
    const config = {
        email:'parthibanshanmugam00@gmail.com',
        phone:'9976878392, 9080658795'
    }

    return <section className='flex flex-col bg-primary px-5 py-32' id='contact' >
        <div className=' flex flex-col items-center text-white '>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold'>Contact</h1>
                <p className='pb-5 text-justify'> If you want to discuss more in detail, please Contact me. </p>
                <p className='py-2'><span className='font-bold'>Email : </span>{config.email} </p>
                <p className='py-2'><span className='font-bold'>Phone : </span>{config.phone} </p>

        </div>
    </section>
}
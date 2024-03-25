

export default function Socials() {
    return (
        <div id='socials' className="mb-8">
            <p className="text-5xl">Social Media</p>

            <br />

            <div className='flex gap-10 px-10'>
                <a href='https://github.com/hoalex21' target='_blank' rel='noreferrer'>
                    <img src='/github-mark-white.svg' alt='GitHub Logo' className='h-36' />
                </a>
                <a href='https://www.linkedin.com/in/alex-ho-phl/' target='_blank' rel='noreferrer'>
                    <img src='/linkedin.png' alt='Linkedin Logo' className='h-36' />
                </a>
            </div>
        </div>
    );
}
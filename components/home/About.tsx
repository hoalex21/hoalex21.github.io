export default function About() {
    return (
        <div id='about'>
            <p className="text-5xl">About Me</p>
            
            <br />

            <div className="md:grid md:grid-flow-col auto-cols px-10">
                <div className="flex justify-center items-center">
                    <img src="/1655484593486.jpg" className="rounded-full" />
                </div>

                <br />

                <div className='text-center px-10 flex items-stretch'>
                    <p className='text-xl self-center'>
                        I&apos;m Alex and I&apos;m currently a B.S. Computer Science student at Drexel University and will be graduating in June 2024.
                        I have a passion for technology and expressing myself creatively through software.
                        Whether it be a great web browsing experience or a quirky game, I hope there is something that I can provide you through my work. &hearts;
                    </p>
                </div>
            </div>

        </div>
    );
}
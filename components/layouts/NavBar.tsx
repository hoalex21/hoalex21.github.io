export default function NavBar() {
    return (
        <nav className="bg-white text-black p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between">

                <div>
                    <a href="/" className="hover:text-sky-300">Home</a>
                </div>

                <div className="flex justify-center items-center gap-8 md:visible invisible">
                    <a href="/#about" className="hover:text-gray-300">About</a>
                    <a href="/#experience" className="hover:text-gray-300">Experience</a>
                    <a href="/#projects" className="hover:text-gray-300">Projects</a>
                    <a href="/#socials" className="hover:text-gray-300">Socials</a>
                </div>

                <div></div>
            </div>
        </nav>
    );
}
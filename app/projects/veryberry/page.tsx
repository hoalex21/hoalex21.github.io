export default function VeryBerry() {
    return (
        <>
            <div className="flex justify-center p-3">
                <p className="text-6xl self-center">Very Berry</p>
            </div>

            <br />

            <div className='container mx-auto'>
                <div className="flex justify-center">
                    <iframe src="https://i.simmer.io/@Xx_Bubbles_xX/very-berry" width='960' height='600'></iframe>
                </div>

                <div>
                    <b>Controls</b>
                    <p>W - move up</p>
                    <p>A - move left</p>
                    <p>S - move down</p>
                    <p>D - move right</p>
                    <p>spacebar - shoot</p>
                </div>
            </div>
        </>
    );
}
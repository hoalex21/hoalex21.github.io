export default function BlubbyDodge() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-25 p-3 flex justify-center">
                    <img src='/blubbydodgeicon.png' />
                </div>
            </div>
            <div className='container mx-auto bg-white text-black p-4'>
                <p className="text-4xl pb-2">Description</p>
                <p>
                    Your reflexes and quick thinking will be put to the ultimate test!
                    Challenge yourself to beat your high score with each run.
                    The objective is simple yet exhilarating: dodge and weave through a barrage of pillars raining down from above.
                    As Blubby dashes along, players will immerse themselves in a colorful, cartoon-inspired setting with a touch of whimsy.
                    View on the <a href="https://play.google.com/store/apps/details?id=com.aleton100100.blubbydodge" target="_blank" className="text-blue-500">Google Play Store</a>
                    &nbsp;and <a href="https://aleton.itch.io/blubby-dodge" target="_blank" className="text-blue-500">Itch.io</a>.
                </p>

                <hr className="hr my-4" />

                <p className="text-4xl pb-2">Privacy Policy</p>

                <p className="text-2xl">Data Collection</p>
                <p>
                    We do not collect or store any personal information from our users.
                    Game data is saved locally to your device.
                </p>
                
                <p className="text-2xl">Advertisements</p>
                <p>
                    We may display advertisements within our game.
                    The ads are provided by Unity Ads which has their own <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy">privacy policy</a>.
                    Our ad partners may collect certain information to show relevant ads.
                </p>
            </div>
        </>
    );
}
import IntroBackground from "../intro/IntroBackground";
import Back from '../main/Back';
import Title from "../main/Title";

// Media
import blubbydodge from '../media/blubbydodgeicon.png';

export default function BlubbyDodge() {
    return (
        <>
            <IntroBackground />
            <Back />
            <Title title="Blubby Dodge" />
            <div class="d-flex justify-content-center">
                <div class="w-25 p-3 d-flex justify-content-center">
                    <img src={blubbydodge} />
                </div>
            </div>
            <div className='container bg-light'>
                <br />
                <h2>Description</h2>
                <p>
                    Challenge yourself to beat your high score with each run.
                    Your reflexes and quick thinking will be put to the ultimate test.
                    The objective is simple yet exhilarating: dodge and weave through a barrage of pillars raining down from above.
                    As Blubby dashes along, players will immerse themselves in a colorful, cartoon-inspired setting with a touch of whimsy.
                    View on the <a href="https://play.google.com/store/apps/details?id=com.aleton100100.blubbydodge">Google Play Store</a>
                </p>

                <hr class="hr" />

                <h2>Privacy Policy</h2>
                <h4>Data Collection</h4>
                <p>
                    We do not collect or store any personal information from our users.
                    Game data is saved locally to your device.
                </p>
                <h4>Advertisements</h4>
                <p>
                    We may display advertisements within our game.
                    The ads are provided by Unity Ads which has their own <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy">privacy policy</a>.
                    Our ad partners may collect certain information to show relevant ads.
                </p>
                <br />
            </div>
        </>
    );
}

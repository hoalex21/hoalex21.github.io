import IntroBackground from "../intro/IntroBackground";
import Back from '../main/Back';
import Title from "../main/Title";

// Media
import caltrak from '../media/caltrak1024x500.png';

export default function CaloTrak() {
    return (
        <>
            <IntroBackground />
            <Back />
            <Title title="CaloTrak" />
            <div class="d-flex justify-content-center">
                <img class="w-50" src={caltrak} />
            </div>
            <div className='container bg-light'>
                <br />
                <h2>Description</h2>
                <p>
                    A simple lightweight calorie tracking app.
                    Calories in, calories out.
                    No macro or micronutrient information is provided.
                    Useful for quickly logging your meals and snacks without needing the details.
                    Calories do not reset after each day.
                    No registration is required.
                    The data is saved to your local device.
                    View on the <a href="https://play.google.com/store/apps/details?id=com.aleton.CalorieTracker">Google Play Store</a>
                </p>
                <h2>Privacy Policy</h2>
                <p>
                    CaloTrak is built using <a href="https://expo.dev/" target="_blank">expo</a>.
                    The only data collected are <a href="https://docs.expo.dev/regulatory-compliance/data-and-privacy-protection/" target="_blank">required by expo</a>.
                    Information that you provide on the app is not accessible by us.
                    The data is saved locally to your device.
                    There is a max storage size of 6MB.
                    The data will continue to remain on your device until you manually delete it or uninstall the application.
                </p>
                <br />
            </div>
        </>
    );
}
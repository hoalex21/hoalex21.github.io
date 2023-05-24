import IntroBackground from "../intro/IntroBackground";
import Back from '../main/Back';
import Title from "../main/Title";

export default function CalTrak() {
    return (
        <>
            <IntroBackground />
            <Back />
            <Title title="CalTrak" />
            <div className='container bg-light'>
                <br />
                <h2 class='white'>Privacy Policy</h2>
                <p>
                    CalTrak is built using <a href="https://expo.dev/" target="_blank">expo</a>.
                    The only data collected are required by expo and your tracked calories.
                    We do not share data with any third parties.
                    The data is saved locally to your device.
                    There is a max storage size of 6MB.
                    The data will continue to remain on your device after uninstalling the application.
                    To remove your data, you must go to settings, and select "delete all".
                </p>
                <br />
            </div>
        </>
    );
}
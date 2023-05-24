import IntroBackground from "../intro/IntroBackground";
import Back from '../main/Back';
import Title from "../main/Title";

export default function CalTrakr() {
    return (
        <>
            <IntroBackground />
            <Back />
            <Title title="CalTrakr" />
            <div className='container bg-light'>
                <br />
                <h2 class='white'>Privacy Policy</h2>
                <p>
                    CalTrak is built using <a href="https://expo.dev/" target="_blank">expo</a>.
                    The only data collected are <a href="https://docs.expo.dev/regulatory-compliance/data-and-privacy-protection/" target="_blank">required by expo</a>.
                    Information that you provide on the app is not given accessible by us.
                    The data is saved locally to your device.
                    There is a max storage size of 6MB.
                    The data will continue to remain on your device until you manually delete it or uninstall the application.
                </p>
                <br />
            </div>
        </>
    );
}
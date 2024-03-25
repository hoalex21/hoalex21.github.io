export default function CaloTrak() {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-xl p-3 flex justify-center">
                    <img src='/calotrak1024x500.png' />
                </div>
            </div>

            <div className="flex justify-center">
                <p className="text-6xl self-center">CaloTrak</p>
            </div>

            <br />

            <div className='container mx-auto bg-white text-black p-4 rounded-md'>
                <p className="text-4xl pb-2">Description</p>
                <p>
                A simple lightweight calorie tracking app.
                    Calories in, calories out.
                    No macro or micronutrient information is provided.
                    Useful for quickly logging your meals and snacks without needing the details.
                    Calories do not reset after each day.
                    No registration is required.
                    The data is saved to your local device.
                    View on the <a href="https://play.google.com/store/apps/details?id=com.aleton.CalorieTracker" target="_blank" className="text-blue-500">Google Play Store</a>
                    &nbsp;and <a href="https://expo.dev/@aleton/CalorieTracker" target="_blank" className="text-blue-500">Expo</a>.
                </p>

                <hr className="hr my-4" />

                <p className="text-4xl pb-2">Privacy Policy</p>

                <p>
                    CaloTrak is built using <a href="https://expo.dev/" target="_blank" className="text-blue-500">expo</a>.
                    The only data collected are <a href="https://docs.expo.dev/regulatory-compliance/data-and-privacy-protection/" target="_blank" className="text-blue-500">required by expo</a>.
                    Information that you provide on the app is not accessible by us.
                    The data is saved locally to your device.
                    There is a max storage size of 6MB.
                    The data will continue to remain on your device until you manually delete it or uninstall the application.
                </p>
            </div>
        </>
    );
}
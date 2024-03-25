import ExperienceCard from "../cards/ExperienceCard";

export default function Projects() {
    return (
        <div>
            <p className="text-5xl">Personal Projects</p>

            <br />

            <div className="grid grid-cols-3 gap-10 px-10">
                <ExperienceCard
                    title="Blubby Dodge"
                    img="blubbydodgeicon.png"
                    alt="Blubby Dodge Icon"
                    description="Your reflexes and quick thinking will be put to the ultimate test! Challenge yourself to beat your high score with each run. The objective is simple yet exhilarating: dodge and weave through a barrage of pillars raining down from above. As Blubby dashes along, players will immerse themselves in a colorful, cartoon-inspired setting with a touch of whimsy."
                    time="Published: August 31, 2023"
                />

                <ExperienceCard
                    title="CaloTrak"
                    img="calotrak1024x500.png"
                    alt="CaloTrak Logo"
                    description="A simple, easy-to-use lightweight calorie tracking app. Calories in, calories out. No macro or micronutrient information is provided. Useful for quickly logging your meals and snacks without needing the details. Calories do not reset after each day. No registration is required. The data is saved to your local device."
                    time="Published: May 30, 2023"
                />

                <ExperienceCard
                    title="Very Berry"
                    img="VeryBerry.png"
                    alt="Very Berry player sprite"
                    description="A class project involving a group of 4. This is a space-shooter bullet hell type game where you operate a strawberry vessel and survive an onslaught of endless blueberry drones. The boss - evil emoji guy - will appear if you survive long enough."
                    time="Published: June 2020"
                />
            </div>
        </div>
    );
}
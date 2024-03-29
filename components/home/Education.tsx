export default function Education() {
    return (
        <>
            <div id="education">
                <p className="text-5xl">Education</p>

                <br />

                <div className="md:grid md:grid-flow-col auto-cols px-10 gap-10">
                    <div className="flex justify-between self-center items-stretch">
                        <p>
                            Drexel University
                            <br />
                            <i>B.S. in Computer Science</i>
                        </p>
                        <p className="flex place-content-end">
                            September 2019 - June 2024
                            <br />
                            GPA: 3.47
                        </p>
                    </div>

                    <img src="/Drexel-logo.png" className="flex justify-center h-24 items-center" />
                </div>
            </div>
        </>
    );
}
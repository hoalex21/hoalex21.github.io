interface Props {
    title: string;
    img: string;
    alt: string;
    bullets?: string[];
    description?: string;
    time: string;
}

export default function ExperienceCard(props: Props) {
    return (
        <div className='rounded-md border-solid border-2 border-white relative'>
            <div className='flex justify-center bg-white p-8'>
                <img src={props.img} alt={props.alt} className="max-h-36" />
            </div>

            <div className="px-4 py-2 mb-10">
                <p className='text-2xl m-2'>{props.title}</p>
                {
                    props.bullets?
                    <ul className="list-disc mx-4">
                        {props.bullets.map(bullet => <li className="mb-2">{bullet}</li>)}
                    </ul>
                    :
                    null
                }

                {
                    props.description?
                    <p className="mx-4 mb-2">
                        {props.description}
                    </p>
                    :
                    null
                }
            </div>

            <div className="bg-white text-black py-2 px-4 absolute bottom-0 w-full">
                <p>{props.time}</p>
            </div>
        </div>
    );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import contentMgmtImg from "./img/content-management.png"
import customFeaturesImg from "./img/customization-features.png"
import realTimeResults from "./img/real-time-results.png"

export default function HowItWorks(){
    const sections = [
        {
            imageRef: contentMgmtImg,
            imageAlt:'peices of paper',
            title:'Content Management',
            description:'Test out the demo blog, news, and events pages to see how easy it is to keep your content fresh and engaging.',
            linkText:'View CMS Demos',
            link:'/cms-experience',
        },
        {
            imageRef: customFeaturesImg,
            imageAlt:'toggle switches',
            title:'Customization Features',
            description:'Experiment with dark mode, different carousel styles, and other interactive elements to find what suits your vision.',
            linkText:'View Feature Demos',
            link:'/interactive-features',
        },
        {
            imageRef: realTimeResults,
            imageAlt:'peices of paper',
            title:'Real-Time Results',
            description:"Make changes and see the results instantly—no coding required. To do this, you'll need your own login, which I can provide upon request.",
            linkText:'Try Out CMS',
            link:'/get-started',
        },

    ]

    return (
        <section className="flex flex-col pb-[2rem]">
            <h1 className="pb-[2rem] text-center lg:text-left">How It Works</h1>
            <div className="flex flex-col lg:flex-row  items-center justify-between gap-[2rem]">
                {sections.map((s)=>(
                    <div key={s.title} className="flex flex-col gap-[0.5rem] max-w-[500px] lg:max-w-[350px]">
                        <div className="bg-bluegray rounded-lg flex justify-center items-center">
                            <Image src={s.imageRef} alt={s.imageAlt} width={270} height={270} className="w-[175px] p-[10px]"/>
                        </div>
                        <h2 className="font-bold uppercase">{s.title}</h2>
                        <p className="pb-[0.5rem]">{s.description}</p>
                        <Link className="p-[10px] border border-b-dark-blue text-center rounded-md hover:bg-dark-blue hover:text-off-white" href={s.link}>{s.linkText}</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
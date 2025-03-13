import Markdown from 'markdown-to-jsx';
import Image from "next/image";

const q4aMarkdown = `
**Question 4a:** Create and embed a 3-7 minute video on why Core Web Vitals are
important to an Enterprise customer at Vercel`

const q4bMarkdown = `
**Question 4b:** Interpret the Core Web Vitals of a popular retail
website and give a high level overview of specific items to
concentrate on to improve their overall Lighthouse score.`



const a4bMarkdown = `
Going into a bit more depth than what was covered in the video: ebay’s INP score is currently low. If you scroll down on the PageSpeed Insights, you can see exactly what is recommended to improve responsiveness, which will improve the INP score, leading to better Core Web Vitals and a higher Google Search ranking.

For instance, as shown in the screenshot above: we can see that the some of the top suggestions to improve ebay’s INP are to reduce JS execution time, to minimize the main-thread work, and to reduce the impact of third-party code.
`



export default function question4(){
    return(
        <>
            <div className='email-container'>
                <Markdown>{q4aMarkdown}</Markdown>
            </div>
            <video className='q4-media' width="800" height="600" controls>
                <source src="/videos/core-web-vitals.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='email-container'>
                <Markdown>{q4bMarkdown}</Markdown>
            </div>
            <div className="q4-media">
                <Image
                    src="/images/ebay-core-web-vitals.png"
                    alt="core-web-vitals"
                    width={500}
                    height={300}
                />
            </div>
            <div className='email-container'>
                <Markdown>{a4bMarkdown}</Markdown>
            </div>
        </>
    )
}

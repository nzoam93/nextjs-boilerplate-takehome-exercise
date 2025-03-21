import Markdown from 'markdown-to-jsx';
import Image from "next/image";

const q4aMarkdown = `
**Question 4a:** Create and embed a 3-7 minute video on why Core Web Vitals are
important to an Enterprise customer at Vercel.`

const q4bMarkdown = `
**Question 4b:** Interpret the Core Web Vitals of a popular retail
website and give a high level overview of specific items to
concentrate on to improve their overall Lighthouse score.`



const a4bMarkdown = `
As shown in the first screenshot, Under Armour’s core web vitals stats are poor and are currently failing.

If you scroll down on the PageSpeed Insights webpage (second screenshot), you can see exactly what is recommended to improve these Core Web Vitals, which will lead to a better user experience and will be rewarded with a higher Google Search ranking. We can see that the some of the top suggestions are to reduce main thread work, improve loading time of the largest contentful paint, and to avoid an excessive DOM size.

A developer can improve their Lighthouse score by addressing any of these issues. For instance, to improve the excessive DOM size: load your webpage, manually take note of which nodes are necessary for the initial load, and remove those that aren’t, only creating them after a user interaction like clicking on a button.
`



export default function question4(){
    return(
        <>
            <div className='email-container'>
                <Markdown>{q4aMarkdown}</Markdown>
            </div>
            <video className='q4-media' width="800" height="600" controls>
                <source src="/videos/core-web-vitals-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='email-container'>
                <Markdown>{q4bMarkdown}</Markdown>
            </div>
            <div className="q4-images">
                <Image
                    src="/images/core-web-vitals-underarmour-1.png"
                    alt="core-web-vitals"
                    width={500}
                    height={300}
                />
                <Image
                    src="/images/core-web-vitals-underarmour-2.png"
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

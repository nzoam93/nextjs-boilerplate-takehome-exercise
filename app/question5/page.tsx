import Markdown from 'markdown-to-jsx';

const q5Markdown = `
**Question 5:** How could we improve or alter this familiarization exercise?`

const a5Markdown = `
Overall, I thought this exercise was great. It was refreshing to work on a realistic-feeling assignment for a take-home exercise. It provided real-life examples that I would have to deal with as a customer success manager as well as gave me a chance to learn more about the product itself.

One suggestion is to provide a guide for how long responses are expected to be. In a customer email, conciseness is important as you do not want the customer to disengage from the email if it’s too long. In this interview setting however, I also want to convey that my subject matter expertise, which lends itself to writing more lengthy responses. It was a challenge to strike the appropriate balance between conciseness while still ensuring my knowledge was showcased to the hiring managers.  
`



export default function question5(){
    return(
        <>
            <div className='email-container'>
                <Markdown>{q5Markdown}</Markdown>
            </div>
            <div className='email-container'>
                <Markdown>{a5Markdown}</Markdown>
            </div>
        </>
    )
}

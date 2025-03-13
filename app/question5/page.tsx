import Markdown from 'markdown-to-jsx';

const q5Markdown = `
**Question 5:** How could we improve or alter this familiarization exercise?`

const a5Markdown = `
Honestly, I thought this exercise was great. It was refreshing to work on a realistic-feeling assignment for a take-home exercise. It both provided a good blend of real-life examples that I would have to deal with as a customer success manager as well as gave me a chance to learn more about the product itself.

The one aspect I would alter is simply to provide a guide for how long responses are expected to be. In a customer email, conciseness is important as you do not want the customer to disengage from the email if it’s too long. In this setting though, I also want to convey that I am knowledgeable about the subject matter, which lends itself to writing responses that are longer than ideal. It was a challenge to strike the appropriate balance between conciseness and wanting to ensure my knowledge is shown off by providing extra information in the response.
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

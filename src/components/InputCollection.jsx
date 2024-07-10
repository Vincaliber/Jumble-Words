// eslint-disable-next-line react/prop-types
export default function InputCollection({ data, setAnswer }) {
    return (
        <div>
            {
                // eslint-disable-next-line react/prop-types
                data.answer.split('').map(d => {
                    return (
                        // eslint-disable-next-line react/prop-types
                        <input type="text" maxLength={1} id={'input' + data.id} onChange={e => setAnswer(e)}
                            // eslint-disable-next-line react/prop-types
                            className={data.highlight.includes(d) ? 'answerWord' : ''} key={d} style={{margin:'0 10px', borderRadius: `${data.highlight.includes(d) ? '10px' : ''}`, borderColor:`${data.highlight.includes(d) ? 'red' : ''}` }} />
                    )
                })
            }
        </div>
    )
}

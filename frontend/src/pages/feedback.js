
import React, { useState, useEffect } from "react";
import './feedback.css';
const icons = {
    'sad': '<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm99.875 314.263c-1.487-2.339-37.171-57.263-100.873-57.263s-99.385 54.924-100.873 57.263c-5.93 9.319-3.183 21.68 6.136 27.61 9.319 5.931 21.681 3.184 27.61-6.136.247-.387 25.138-38.737 67.127-38.737s66.88 38.35 67.127 38.737c5.93 9.319 18.291 12.066 27.61 6.136 9.32-5.93 12.067-18.291 6.136-27.61zm-187.875-189.263c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>',
    'smile': '<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>',
    'neutral': '<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm100 293c0-11.046-8.954-20-20-20h-160c-11.046 0-20 8.954-20 20s8.954 20 20 20h160c11.046 0 20-8.954 20-20zm-188-167c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>',
}




export default function Feedbackfunc() {
  return (
    <div >
      <Feedback
        title="Feedback"
        description="What do you think of my site?"
        style={{
          margin: '16pt auto'
        }}
        />
    </div>
  );
}










const classNames = (obj) => {
    let classes = ''

    for(let name in obj) {
        if(obj[name])
            classes += name + ' '
    }

    return classes.trim()
}

const Icon = (props) => {
    return (
        <div
            className="icon"
            role="icon"
            dangerouslySetInnerHTML={{__html: icons[props.icon]}}>
        </div>
    )
}

const Feedback = (props) => {
    const [selected, setSelected] = useState(null)
    const [done, setDone] = useState(false)
    const [confirmTimeOut, setConfirmTimeOut] = useState(null)

    const changeSelected = (value = null) =>
        setSelected(value === selected ? null : value)

    useEffect(() => {
        clearTimeout(confirmTimeOut)

        // eject if nothing selected
        if(selected === null) return
        
        setConfirmTimeOut(setTimeout(() => {
            setDone(true)
            console.log(selected + ' then!')
        }, 5000))
    }, [selected])

    return (
        <div
            className={classNames({
                'feedback': true,
                'done': done,
                'done-negative': done && selected === 'negative',
                'done-neutral': done && selected === 'neutral',
                'done-positive': done && selected === 'positive',
            })} style={ props.style }
            >
            <header>
                <h1>{ props.title }</h1>
                <div className="message">
                    <p>{ props.description }</p>
                    <span className="done-message">Thank You!</span>
                </div>
            </header>

            <div className="icons">
                <button
                    className={classNames({
                        'negative': true,
                        'selected': selected === 'negative'
                    })}
                    onClick={ () => changeSelected('negative') }>
                  {<Icon icon="sad" />}
                </button>

                <button
                    className={classNames({
                        'neutral': true,
                        'selected': selected === 'neutral'
                    })}
                    onClick={ () => changeSelected('neutral') }>
                  {<Icon icon="neutral" />}
                </button>

                <button
                    className={classNames({
                        'positive': true,
                        'selected': selected === 'positive'
                    })}
                    onClick={ () => changeSelected('positive') }>
                  {<Icon icon="smile" />}
                </button>
            </div>
        </div>
    )
}





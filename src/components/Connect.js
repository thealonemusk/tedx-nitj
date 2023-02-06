import React, { useState, useEffect } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
export const Connect = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <div className='connect'>
            <div className='connect__left'>
                <h1 className='connect__left_staticText'>We cultivate</h1>
                <h1>
                    <span>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Roboto, sans-serif',
                                color: '#E62B1E',
                                fontWeight: 800,
                                fontSize: '1.2em',
                            }}
                            startDelay={2000}
                            cursorColor="#E62B1E"
                            multiText={[
                                'ideas',
                                'lorem',
                                'ipsum',

                            ]}
                            multiTextDelay={2000}
                            typeSpeed={20}
                            multiTextLoop = {true}

                        />
                    </span>
                </h1>
            </div>
            <div className='connect__right'>
                <p className='connect__right_text'>Be the first to hear about our upcoming events, early bird ticket sales and ideas worth sharing. Sign Up</p>
                <div className='email__section'>
                    <input type="email" placeholder="Enter your email" />
                    <button>INSPIRE ME</button>
                </div>

            </div>
        </div>
    )
}

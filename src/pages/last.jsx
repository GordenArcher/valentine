import { useEffect, useState } from 'react';
import confetti from "canvas-confetti";
import Heyy from '../assets/videos/yayyyy.png'

const Last = () => {

    const confettiArray = Array.from({ length: 50 });
    const [name, setName] = useState("");

    useEffect(() => {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 },
        });
      }, []);

      useEffect(() => {
        const getName = localStorage.getItem("name")

        if(getName){
            setName(getName)
        }

      }, [])

  return (
    <>
            {confettiArray.map((_, index) => {
                const randomX = Math.random() * 100; 
                const randomSize = Math.random() * 15 + 5; 
                const randomDelay = Math.random() * 5;
                const randomDuration = Math.random() * 3 + 2; 
                const colors = ["#ff4d4d", "#ff9f1a", "#ffff1a", "#66ff66", "#66b3ff", "#c266ff"];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];

                return (
                <div
                    key={index}
                    className="confetti"
                    style={{
                    left: `${randomX}vw`,
                    width: `${randomSize}px`,
                    height: `${randomSize}px`,
                    backgroundColor: randomColor,
                    animationDuration: `${randomDuration}s`,
                    animationDelay: `-${randomDelay}s`,
                    }}
                ></div>
                );
            })}

    <div className='celebration'>
        <div className="happy_vid">
            <img  src={Heyy} />
        </div>

        <div className="happy_mess">
            Hurray!! {name} <br />
            You&apos;re now my girlfriend for the day ...
        </div>
    </div>
    </>
    
  )
}

export default Last

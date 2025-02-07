import { useEffect, useState } from 'react';
import AskVid from '../assets/videos/me.mp4'
import { useNavigate } from 'react-router-dom';
export const Ask = () => {

    const [name, setName] = useState("");

    const [size, setSize] = useState(1);
    const navigate = useNavigate()

    const handleNoClick = () => {
        setSize((prevSize) => prevSize + 0.2);
      };

      const nextPage = () => {
        navigate("/last")
      }

      useEffect(() => {
        const getName = localStorage.getItem("name")

        if(getName){
            setName(getName)
        }

      }, [])

  return (
    <div>
        <div className="ask_quest">
            <div className="wrapper_ask">
                <div className="ask_vide">
                    <video src={AskVid} autoPlay loop></video>
                </div>

                <div className="main_ask">
                    <h4>{name}, this Valentine’s Day wouldn’t be the same without you! Will you be my Valentine? ❤️✨</h4>
                </div>

                <div className="options">
                    <div className="no opt">
                        <button onClick={handleNoClick} >No</button>
                    </div>

                    <div className="yes opt">
                        <button
                        style={{
                            transform: `scale(${size})`,
                            transition: "transform 0.3s ease",
                          }}
                          onClick={nextPage}
                        >Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

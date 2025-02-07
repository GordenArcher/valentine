import HeroVideo from '../assets/videos/thinking.mp4'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Main = ({ userName, setUserName }) => {
    const navigate = useNavigate()

    const nextPage = () => {
        if(!userName){
            return toast.error("Will you enter your name already")
        }

        navigate("/ask")
        
    }


  return (
    <div>
        <div className="home">
            <div className="vide_display">
                <video src={HeroVideo} autoPlay loop muted aria-label="A welcome video"></video>
            </div>

            <div className="main">
                <section className="hero">
                    <h3 className="hero_txt">Hey there! What&apos;s your name?</h3>
            
                    <div className="name_imput">
                        <input type="text" id="user_name" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    
                </section>
            
                <div className="hero_btn">
                    <button onClick={nextPage} id="next">Next <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
        
    </div>
  )
}


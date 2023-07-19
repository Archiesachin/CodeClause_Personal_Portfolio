import {useTypewriter, Cursor} from 'react-simple-typewriter';

export default function Landing(props){

  const [typeEffect] = useTypewriter({
    words: ['A Web Developer.', 'A Civil Engineer.','An AL/ML Enthusiast.', 'A Dancer.'],
    loop:{},
    typeSpeed: 150,
    deleteSpeed:100
  })

  return(
    
    <div>
      <main className={props.darkMode? "darkMode": "main"}>
        <div className="container">
        <section>
        <img src={`/images/dev-pic-final.png`} className="dev-pic"></img>
        {/* <div className='color-block'></div> */}

        </section>
          <div className="dev-info">
            <h1 className="dev-text"><span className='hello'>-- HELLO</span> , I AM ARCHIE</h1>
            <h1 className="typewriter"style={{marginLeft:'50px', position:'absolute',marginTop: '10px'}}>
            {typeEffect}
            <Cursor />
            </h1>
            <div>
            <h3 className='more-info'>An Engineering student.</h3>
            <h3 className="more-info-two">Passionate about creating innovative and high-performing websites that help businesses thrive in the digital world.</h3>
            <a href='https://drive.google.com/file/d/1935tuR_ZMwtfLtJvbCJizSF4OUsq0Qy1/view'>
            <button className='resume'>Download Resume</button>
            </a>
          </div>
            </div>
        </div>

      </main>
    </div>
  )
}
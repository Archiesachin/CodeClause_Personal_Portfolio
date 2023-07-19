import {skills} from '../pages/Skills'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Education from '../pages/Education'

export default function About(props){

  return(
    <main className={props.darkMode? "darkMode": "main"}>
      <div className='about-main-container'>
      <div className='about'>
        <h1 className="about-text">
          ABOUT <span className="about-color">ME.</span></h1>
      </div>
        <h2 style={{fontSize:'30px', paddingTop:'10px' ,marginLeft:'-50px', textAlign:'center'}}>PERSONAL INFORMATION</h2>
    <div className="box-about">
      <div className="personal">
        <table className="info-table">
        <tbody>
        <tr>
          <td>Name : Archie Shah</td>
        </tr>
        <tr>
          <td>Age  : 19</td>
        </tr>
        <tr>
          <td>Gender : Female</td>
        </tr>
        <tr>
          <td>Freelance: Availabe</td>
        </tr>
        <tr>
          <td>Languages: English, Hindi, Marathi</td>
        </tr>
        <tr>
          <td>Nationality: Indian</td>
        </tr>
        </tbody>
        </table>
    </div>
    <div className='experience'>
      <div className="experience-card">
      <h2>2</h2>
      <p>Years of Experience</p>
      </div>
    <div className="experience-card">
      <h2>4 Web Projects</h2>
      <p>Completed Projects</p>
      </div>
    </div>
    </div>
  
      <div className="skills">
        <h2>SKILLS</h2>
        <div className='skills-container'>
        {skills.map(({title, percentage},index) =>{
          return(
            <div className="progress-box" key={index}>
            <div className="progress-circle">
              <CircularProgressbar strokeWidth={7.5} text={`${percentage}`} value={percentage}/>
            </div>
            <h3 className="skils-title">{title}</h3>
            </div>
          )
        })}
        </div>
      </div>
  <div><Education/></div>
  

      </div>

    </main>
  )
}
    


export default function Education(props){
  return(
    <main className={props.darkMode? "darkMode": "main"}>
      <h1 style={{textAlign:'center'}}>EDUCATION</h1>
      <div className="education-box">
      <div className="education">
        <img src={`/images/graduation-cap (1).png`} className="graduation-cap"/>
        <div className='edu-info'>
        <h2>High School Education</h2>
        <h3>95.20%</h3>
        <p>Completed high school in 2019 from Parle Tilak Vidyalaya English Medium School/</p>
        </div>
      </div>

      <div className="education">
        <img src={`/images/graduation-cap (1).png`} className="graduation-cap"/>
        <div className='edu-info'>
        <h2>Diploma In Civil Engineering</h2>
        <h3>93.47%</h3>
        <p>Graduated as a Civil Engineer from Veermata Jijabai Technological Institute in 2022</p>

        </div>
      </div>

      <div className="education">
        <img src={`/images/graduation-cap (1).png`} className="graduation-cap"/>
        <div className='edu-info'>
        <h2>BE In Information Technology</h2>
        <h3>9.52 CGPA</h3>
        <p>Currently pursuing Bachelors in Information Technology from Thadomal Shahani Engineering College</p>

        </div>
      </div>

      </div>

    </main>
  )

}
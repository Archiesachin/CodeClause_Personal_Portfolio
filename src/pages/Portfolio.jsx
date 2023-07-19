export default function Portfolio(props){
  return(
    <main className={props.darkMode? "darkMode": "main"}>
      <div className="portfolio-box">
      <h2 className="portfolio"><span className="portfolio-color">MY</span> PORTFOLIO.</h2>
      <div className="portfolio-section">
        <div className="portfolio-cards">
          <img src={`/images/memory-lane.png`} className="portfolio-img"/>
          <div className="portfolio-hover">
          <a href="https://github.com/Archiesachin/Memory-Lane">
            <button className="view">VIEW PROJECT</button>
          </a>
          </div>
          <h2>Memory Lane</h2>
        </div>

        <div className="portfolio-cards">
          <img src={`/images/airbnb-web.png`} className="portfolio-img"/>
          <div className="portfolio-hover">
          <a href="https://github.com/Archiesachin/Airbnb-Clone">
          <button className="view">VIEW PROJECT</button>
          </a>
          </div>
          <h2>Airbnb Experiences Clone</h2>
        </div>

        <div className="portfolio-cards">
          <img src={`/images/meme-generator.png`} className="portfolio-img"/>

          <div className="portfolio-hover">
            <a href ="https://github.com/Archiesachin/Meme-generator">
          <button className="view">VIEW PROJECT</button>
            </a>
          </div> 
          <h2>Meme Generator</h2>
        </div>

        <div className="portfolio-cards">
          <img src={`/images/health-bridge.png`} className="portfolio-img"/>
          <div className="portfolio-hover">
          <a href="https://github.com/Archiesachin/HealthBridge">
          <button className="view">VIEW PROJECT</button>
          </a>
          </div>
          <h2>Health Bridge</h2>
        </div>


      </div>

      </div>

    </main>
  )
  
}
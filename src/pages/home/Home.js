import "./home.css";
import Menu from "../../menu/Menu";

const Home = () => {

  return (
    <div>
        <Menu/>
        <div className="containerHome">
        <div className="imageText">
      <img className="imgContainer" src="./mike/mike.jpg" alt="my pics"/>
      <div className="michaelContainer">
      <h1 className="nwoye">Nwoye  Chukwudi Michael</h1>
      <br/><br/>
      <p className="aboutNwoye">I am a software developer with 4 years of experience. 
        <br/>I intend to bring value to your organization with my skill sets 
        <br/>while I grow my career and advance my skill. I am goal oriented,
        <br/> focused and fast learner.
      </p>
      </div>
    </div>
        <div className="containerLeft">
        <div className="personalInfo">
        <h1 className="personal">Personal Info:</h1>
        <h2 className="personal">Phone:</h2> 
        <p>+2348130285140, +2349054690950</p>
        <h2 className="personal">E-mail:</h2> 
        <p>nwoyechuwudimichael@gmail.com</p>
        <h2 className="personal">LinkedIn:</h2> 
        <p><a href="https://www.linkedin.com/in/michael-nwoye-5703b023a">https://www.linkedin.com/in/michael-nwoye-5703b023a</a></p>
        <h2 className="personal">Github:</h2>
        <p><a href="https://github.com/mikechuks/mike-project/tree/socialWebApp">https://github.com/mikechuks/mike-project/tree/socialWebApp</a></p>
        </div>
        <div className="containerRanks">
        <br/>
        <br/>
        <br/>
        <h1 className="personal">Skill</h1>
        <h3 className="personal">HTML</h3>
          <div className="langRanks langvolumns">
            <div className="langRank  langvolumn"></div>
          </div>
          <h3 className="personal">CSS</h3>
          <div className="langRanks langvolumns">
            <div className="langRank  langvolumn"></div>
          </div>
          <h3 className="personal">JAVASCRIPT</h3>
          <div className="langRanks langvolumns">
            <div className="langRank langvolumn"></div>
          </div>
          <h3 className="personal">REACT</h3>
          <div className="langRanks langvolumns">
            <div className="langRank  langvolumn"></div>
          </div>
          <h3 className="personal">BOOTSTRAP</h3>
          <div className="langRanks langvolumns">
            <div className="langRank  langvolumn"></div>
          </div>
          <h3 className="personal">JQUERY</h3>
          <div className="langRanks langvolumns">
            <div className="langRank  langvolumn"></div>
          </div>
          <h3 className="personal">PHP</h3>
          <div className="langRanks langvolumns">
            <div className="langRank  langvolumn"></div>
          </div>
          <h3 className="personal">MYSQL</h3>
          <div className="langRanks  langvolumns">
            <div className="langRank langvolumn"></div>
          </div>
        </div>
        </div>
        <div className="containerRight">
        <div className="experience">
        <h1>Experience:</h1>
        <h2>2022-07	<span className="experienceInfo">NYSC CONGATE</span></h2>
		                <p> <span className="experienceText">SECOUNDARY SCHOOL, EDO STATE</span></p>
        <br/>
        <br/>
        <h2>2022-10	<span className="experienceInfo">Digital Marketting</span></h2>
		                 <p><span className="experienceText">KEYSTONE BANK TRAINING</span></p>
        <br/>
        <br/>
        <h2>2019-09	<span className="experienceInfo">	Frontend Web Developer</span></h2>
		                 <p><span className="experienceText">INFINITY TECH WORLD</span></p>
        <br/>
        <br/>
        <h2>2022-10		<span className="experienceInfo">Web Development</span></h2>
		                 <p><span className="experienceText">KEYSTONE BANK TRAINING</span></p>
        <br/>
        <br/>
        <br/>
        <h1>AWARDS AND HONORS:</h1>
        <h2>Most Promising Participant</h2>
        <p>Keystone Bank. Oct 2022</p>
        <br/>
        <br/>
        <br/>
        <h1>EDUCATION:</h1>
        <h2>2019		<span className="experienceInfo">Anambra State University</span></h2>

    </div>
        </div>
        </div>
    </div>
  )
}

export default Home
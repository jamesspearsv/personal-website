import headshot from '../../assets/james-headshot.png';
import './About.scss';

function About() {
  return (
    <div className='bio-container'>
      <div>
        <img
          src={headshot}
          alt='Headshot of James in a salmon colored polo'
          className='headshot'
        />
      </div>
      <section className='bio'>
        <h1>All About Me!</h1>
        <hr className='divider' />
        <p>
          Hi! I'm a public librarian, hobbyist web developer, and full-time cat enthusiast. Born and raised in East           Tennessee, I now call wild and wonderful West Virginia home, where I live with my wife and our two cats. I hold a BA in History and an MS in Information Sciences from the University of Tennessee, Knoxville, graduating in 2020 and 2022, respectively.
        </p>
        <p>
         During my master's program, I worked in various libraries including the Marion County Public Library System in Fairmont, WV and West Virginia University Libraries in Morgantown, WV. Today, I serve as the Assistant Director of the Morgantown Public Library System where I oversee daily operations at the Morgantown Public Library and contribute to advancing the library system's mission.
        </p>
        <p>
   Beyond the library, I'm passionate about web development, coding, and computer science. I enjoy self-directed learning and have completed courses like Harvard's CS50 and The Odin Project. I’m always exploring new tools and concepts, from JavaScript and React to Linux, Python, and Docker, and love finding ways to merge my tech skills with library work. I view every day is an opportunity to learn and grow!
        </p>
      </section>
    </div>
  );
}

export default About;

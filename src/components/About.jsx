import headshot from '../assets/james-headshot.png';
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
          Hi! I&apos;m a public librarian, hobbist web developer, and full-time
          cat lover. Born and raised in East Tennessee, I currently live in wild
          and wonderful West Virginia with my fiancee (who is also a librarian)
          and our two wonderful cats. I graduated from the University of
          Tennessee, Knoxville in 2020 and 2022 with a BA in History and an MS
          in Information Sciences respectively.
        </p>
        <p>
          While completing my master&apos;s degree I worked in several libraries
          including the Marion County Public Library System in Fairmont, WV and
          West Virginia University Libraries in Morgantown, WV. I am currently
          the Assistant Director of the Morgantown Public Library System where I
          manage daily operations of the Morgantown Public Library and
          contribute to the library system&apos;s overall goals and mission.
        </p>
        <p>
          Outside of the library, I like to teach myself about web development,
          coding, computer sciene, and computers in general. I enjoy taking
          classes at home and have completed several at-home computer science
          courses including Harvard&apos;s CS50 (and the numerous CS50 variants)
          and The Odin Project. I try my best to meld my library work and
          computer science whenever possible. I have taught myself (at least
          some) Javascript, React, Linux, Pyton, and Docker among other topics.
          Although I am still constantly learning new things everyday.
        </p>
      </section>
    </div>
  );
}

export default About;

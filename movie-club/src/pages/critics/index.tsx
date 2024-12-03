import * as React from "react"
import Layout from '../../components/layout'
import { Link, type HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  StyledIntro,
  StyledProfiles,
  StyledTitle
} from '../../styles/critics/styles';

const chevronSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--chevron-right ipc-btn__icon ipc-btn__icon--post" viewBox="0 0 24 24" fill="currentColor" role="presentation">
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
  </svg>
)

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <StyledIntro>
        <h1>The Critics</h1>
      </StyledIntro>
      <StyledProfiles>
        <div className="about-profile">
          <div className="about-profile-image">
            <StaticImage src="../../../static/the-doctor.png" alt="the doctor" />
          </div>
          <StyledTitle>
            <h2>The Doctor</h2>
            <p className="description">Armed with a keen eye for detail, "The Doctor" skillfully dissects films through a statistical lens, unveiling the nuanced patterns and trends that lie beneath the surface. From box office hits to art-house wonders, this cinematic virtuoso not only offers insightful commentary but also enriches their reviews with a wealth of academic wisdom, making every analysis an intellectual feast.</p>
            <p className="see-more"><Link to="/films" state={{ critic: "doctor" }}>The Doctor's ratings{chevronSVG}</Link></p>
          </StyledTitle>
        </div>
        <div className="about-profile">
          <div className="about-profile-image">
            <StaticImage src="../../../static/the-negotiator3.png" alt="the negotiator" />
          </div>
          <StyledTitle>
            <h2>The Negotiator</h2>
            <p className="description">As a movie critic, he possesses an uncanny ability to become deeply immersed in the world of cinema, often giving high ratings to films that stir his emotions and leave an indelible impact. Like an expert mediator, "The Negotiator" seeks a delicate balance between artistry and pacing, ever in pursuit of films that engage his heart and mind from the very start.</p>
            <p className="see-more"><Link to="/films" state={{ critic: "negotiator" }}>The Negotiator's ratings{chevronSVG}</Link></p>
          </StyledTitle>
        </div>
        <div className="about-profile">
          <div className="about-profile-image">
            <StaticImage src="../../../static/the-engineer.png" alt="the engineer" />
          </div>
          <StyledTitle>
            <h2>The Engineer</h2>
            <p className="description">With an analytical approach, "The Engineer" deconstructs movie plots, character arcs, and cinematography, appreciating the artistry behind a compelling story. As he tinkers with the hidden layers of meaning, he breaths life into the seemingly mundane and reveals profound messages lurking beneath.</p>
            <p className="see-more"><Link to="/films" state={{ critic: "engineer" }}>The Engineer's ratings{chevronSVG}</Link></p>
          </StyledTitle>
        </div>
        <div className="about-profile">
          <div className="about-profile-image">
            <StaticImage src="../../../static/the-boss.png" alt="the boss" />
          </div>
          <StyledTitle>
            <h2>The Boss</h2>
            <p className="description">As a movie critic known for his unyielding scrutiny, he delivers brutally honest assessments, often granting low scores to films that fail to meet his exacting standards. Like a hardened leader, "The Boss" guards his emotions fiercely, but when a film manages to break through his defenses and touch his soul, his reviews transform into passionate odes of praise.</p>
            <p className="see-more"><Link to="/films" state={{ critic: "boss" }}>The Boss's ratings{chevronSVG}</Link></p>
          </StyledTitle>
        </div>
        <div className="about-profile">
          <div className="about-profile-image">
            <StaticImage src="../../../static/the-farmer4.png" alt="the farmer" />
          </div>
          <StyledTitle>
            <h2>The Farmer</h2>
            <p className="description">Like a patient gardener tending to his crops, "The Farmer" finds delight in the expansive narratives that unfold over time, nurturing an unwavering affection for films that take audiences on epic journeys. With an acute ear for harmony, he tends to the musical scores of each cinematic masterpiece, recognizing the profound impact of a well-composed soundtrack on the emotional landscape.</p>
            <p className="see-more"><Link to="/films" state={{ critic: "farmer" }}>The Farmer's ratings{chevronSVG}</Link></p>
          </StyledTitle>
        </div>
      </StyledProfiles>
    </Layout>
  )
};

export default AboutPage

export const Head: HeadFC = () => (
  <>
    <title>Critics Page</title>
    <meta name="robots" content="index, follow" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Critics reviewing the movies" />
    <meta property="og:title" content="Reel Spicy Takes - Movie Critics" />
    <meta property="og:image" content="https://www.reelspicytakes.com/logo-og-2.png" />
    <meta property="og:description" content="Spicy hot takes on movies" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.reelspicytakes.com/critics" />
    <link rel="icon" href="https://reelspicytakes.com/fav.png" type="image/x-icon"></link>
    <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    <link rel="canonical" href="https://www.reelspicytakes.com/critics" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
  </>
);

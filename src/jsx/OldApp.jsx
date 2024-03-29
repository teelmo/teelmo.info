import React, { /* useState *//* , useEffect */ } from 'react';
import '../styles/styles.less';

import TypeWriter from 'react-typewriter';

function App() {
  return (
    <div className="app">
      <h1>Teemo Tebest</h1>
      <div>
        <div className="image_container"><img src="./assets/img/teemo.jpg" alt="Teemo Tebest" /></div>
        <h3>
          <TypeWriter typing={1}>Hi! I am Teemo, a human being.</TypeWriter>
        </h3>
        <div className="container">
          <h2>Career</h2>
          <p>
            I have Master&apos;s degree in Computer Science. I studied in Tampere and my major was Hypermedia. I graduated in spring 2010. Between 2012 and 2022 I worked with the Finnish Broadcasting Company (Yle).
          </p>
          <p>At the moment I live in Geneva, Switzerland and I work for UNCTAD as a information visualisation expert.</p>
          <p>
            I can be found from the
            {' '}
            <a href="https://fi.wikipedia.org/wiki/Teemo_Tebest">Finnish Wikipedia</a>
            .
          </p>
          <data>
            <span className="label">
              Infovis expert,
              {' '}
              <a href="https://unctad.org" target="_blank" rel="noreferrer">UNCTAD</a>
            </span>
            {' '}
            <span className="value">2022–</span>
          </data>
          <data>
            <span className="label">
              Datajournalist,
              {' '}
              <a href="https://www.ebu.ch/home" target="_blank" rel="noreferrer">EBU</a>
            </span>
            {' '}
            <span className="value">2019–2022</span>
          </data>
          <data>
            <span className="label">
              Datajournalist,
              {' '}
              <a href="https://yle.fi/" target="_blank" rel="noreferrer">Yle</a>
            </span>
            {' '}
            <span className="value">2012–2022</span>
          </data>
          <data>
            <span className="label">
              Researcher,
              {' '}
              <a href="https://www.tuni.fi/en" target="_blank" rel="noreferrer">TTY</a>
            </span>
            {' '}
            <span className="value">2009–2011</span>
          </data>
          <p>
            <br />
            Download my
            {' '}
            <a href="./assets/data/CV - Teemo Tebest.pdf" target="_blank">CV</a>
          </p>
        </div>
        <div className="container">
          <h2>Knowledge</h2>
          <p>Data Journalism, Information Visualisation, GIS, Javascript/React, D3.js, HTML/CSS, Python, PHP, AWS, UI/UX design, frontend/backend, SQL, noSQL, Linux/Mac, Speadsheets</p>
        </div>
        <div className="container">
          <h2>Awards</h2>
          <data>
            <span className="label">Nordic Data Journalism Award</span>
            ,
            {' '}
            <a href="https://yle.fi/uutiset/3-7869067" target="_blank" rel="noreferrer">Kandideitti</a>
          </data>
          <data>
            <span className="label">Statistics story of the year</span>
            ,
            {' '}
            <a href="https://yle.fi/uutiset/3-7945975" target="_blank" rel="noreferrer">Election result visualisation</a>
          </data>
          <data>
            <span className="label">Prix Europa ja Koura-award</span>
            ,
            {' '}
            <a href="https://yle.fi/aihe/they_look_death_in_the_eye" target="_blank" rel="noreferrer">He Katsovat Kuolemaa Silmiin</a>
          </data>
          <data>
            <span className="label">Goole Editors Lab Hackday</span>
            ,
            {' '}
            <a href="https://www.globaleditorsnetwork.org/programmes/editors-lab/yle-editors-lab/" target="_blank" rel="noreferrer">Beef</a>
          </data>
          <data>
            <span className="label">Koura Innovation Award</span>
            ,
            {' '}
            <a href="https://yle.fi/uutiset/3-10769930" target="_blank" rel="noreferrer">Säteilevä paratiisi</a>
          </data>
          <br />
          <br />
          <h2>Shortlisted</h2>
          <data>
            <span className="label">Visual journalism award</span>
            ,
            {' '}
            <a href="https://yle.fi/uutiset/3-9853620" target="_blank" rel="noreferrer">Poika joka katseli pilviä</a>
          </data>
          <data>
            <span className="label">Nordic Data Journalism Award</span>
            ,
            {' '}
            <a href="https://yle.fi/uutiset/3-9490180" target="_blank" rel="noreferrer">Kuntatutka</a>
          </data>
          <data>
            <span className="label">Nordic Data Journalism Award</span>
            ,
            {' '}
            <a href="https://yle.fi/uutiset/3-6544401" target="_blank" rel="noreferrer">Mistä säästäisit…</a>
          </data>
        </div>
        <div className="container">
          <h2>Podcast</h2>
          <p>I have released a Podcast series in 2019 about my life. The Podcast is in Finnish.</p>
          <data>
            <span className="label">Podcast</span>
            {' '}
            <span className="value"><a href="https://www.anchor.fm/teelmo/">Teemon elämää</a></span>
          </data>
        </div>
        <div className="container">
          <h2>Blog</h2>
          <p>Since 2011 I have published posts in a datajournalism blog in Finnish. The blog has been one of the most referred in the field of datajournalism in Finland and a source for many thesis works.</p>
          <data>
            <span className="label">Blog</span>
            {' '}
            <span className="value"><a href="https://datajournalismi.blogspot.com/">Datajournalism</a></span>
          </data>
        </div>
        <div className="container">
          <h2>Sport</h2>
          <p>I play floorball, badminton, golf, running, table tennis, football (both indoor and outdoor)</p>
          <data>
            <span className="label">HM</span>
            {' '}
            <span className="value">1h 52min 59sec</span>
          </data>
          <data>
            <span className="label">10 km</span>
            {' '}
            <span className="value">46min 52sec</span>
          </data>
          <data>
            <span className="label">5 km</span>
            {' '}
            <span className="value">21min 43sec</span>
          </data>
          <data>
            <span className="label">Cooper</span>
            {' '}
            <span className="value">3.02 km</span>
          </data>
          <data>
            <span className="label">HCP</span>
            {' '}
            <span className="value">17.2 (NA)</span>
          </data>
        </div>
        <div className="container">
          <h2>Statster</h2>
          <p>In 2007 I founded a webservice called Statster and it is still in active developlement. Statster is used to track albums that a user have listened over time. I am counting at 30,000+ listenings.</p>
          <data>
            <span className="label">Statster</span>
            {' '}
            <span className="value"><a href="https://statser.info/user/teelmo/">@teelmo</a></span>
          </data>
        </div>
        <div className="container">
          <h2>In Media</h2>
          <p>
            Here are takes of my work in media and in publications. I have also gathered articles where I am mentioned on
            {' '}
            <a href="https://github.com/teelmo/newsstories">Github</a>
            .
          </p>
          <data>
            <span className="label">Apps4Finland</span>
            {' '}
            <span className="value"><a href="https://arcticstartup.com/apps4finland-winners-take-advantage-of-finlands-open-data/">Datavaalit</a></span>
          </data>
          <data>
            <span className="label">GEN</span>
            {' '}
            <span className="value"><a href="https://yle.fi/aihe/artikkeli/2016/04/18/yle-uutisten-joukkue-voittoisa-editors-labin-hackathon-tapahtumassa-helsingissa">Beef</a></span>
          </data>
          <data>
            <span className="label">NODA</span>
            {' '}
            <span className="value"><a href="https://yle.fi/aihe/artikkeli/2016/04/25/pohjoismainen-datajournalismipalkinto-ylen-kandideitti-vaalikoneelle">Kandideitti</a></span>
          </data>
          <data>
            <span className="label">Aamu-TV</span>
            {' '}
            <span className="value"><a href="https://areena.yle.fi/1-4071161">Vanhusvahti</a></span>
          </data>
          <data>
            <span className="label">Nordicom</span>
            {' '}
            <span className="value"><a href="https://www.nordicom.gu.se/sites/default/files/kapitel-pdf/tebest.pdf">Paperi</a></span>
          </data>
          <data>
            <span className="label">HRI</span>
            {' '}
            <span className="value"><a href="https://hri.fi/en_gb/yles-data-articles-created-with-text-editor-spreadsheet-and-python/">Interview</a></span>
          </data>
        </div>
        <div className="container">
          <h2>Equipment</h2>
          <data>
            <span className="label">Laptop</span>
            {' '}
            <span className="value">MacBook Pro</span>
          </data>
          <data>
            <span className="label">Mobile</span>
            {' '}
            <span className="value">iPhone 13</span>
          </data>
          <data>
            <span className="label">Tablet</span>
            {' '}
            <span className="value">iPad Mini</span>
          </data>
          <data>
            <span className="label">HTPC</span>
            {' '}
            <span className="value">LibreELEC</span>
          </data>
          <data>
            <span className="label">Watch</span>
            {' '}
            <span className="value">Apple Watch SE</span>
          </data>
          <data>
            <span className="label">Server</span>
            {' '}
            <span className="value">Ubuntu</span>
          </data>
          <data>
            <span className="label">Console</span>
            {' '}
            <span className="value">Xbox 360</span>
          </data>
          <data>
            <span className="label">Speakers</span>
            {' '}
            <span className="value">Dali ZENSOR 5.1</span>
          </data>
          <data>
            <span className="label">Amplifier</span>
            {' '}
            <span className="value">Marantz NR1403</span>
          </data>
          <data>
            <span className="label">Headphones</span>
            {' '}
            <span className="value">Beoplay H9i</span>
          </data>
          <data>
            <span className="label">Microphone</span>
            {' '}
            <span className="value">Røde NT</span>
          </data>
          <data>
            <span className="label">Camera</span>
            {' '}
            <span className="value">Canon EOS 800D</span>
          </data>
          <data>
            <span className="label">Snowboard</span>
            {' '}
            <span className="value">Burton Ripcord</span>
          </data>
          <data>
            <span className="label">Car</span>
            {' '}
            <span className="value">Hyundai i30</span>
          </data>
        </div>
        <div className="container">
          <h2>Contact</h2>
          <p>I give trainings in the area of data journalism and information visualisation. I organise workshops on how to use Excel and Google&apos;s tools efficiently. I regularly lecture at Universities and give trainings in seminars.</p>
          <p>You can reach me via different channels. Invite me to lecture, for a visit, for a beer, to be your friend.</p>
          <data>
            <span className="label">Instagram</span>
            {' '}
            <span className="value"><a href="https://www.instagram.com/teelmo/">@teelmo</a></span>
          </data>
          <data>
            <span className="label">Twitter</span>
            {' '}
            <span className="value"><a href="https://www.twitter.com/teelmo/">@teelmo</a></span>
          </data>
          <data>
            <span className="label">Facebook</span>
            {' '}
            <span className="value"><a href="https://www.facebook.com/teelmo/">@teelmo</a></span>
          </data>
          <data>
            <span className="label">LinkedIn</span>
            {' '}
            <span className="value"><a href="https://www.linkedin.com/in/teelmo/">@teelmo</a></span>
          </data>
          <data>
            <span className="label">Github</span>
            {' '}
            <span className="value"><a href="https://www.github.com/teelmo/">@teelmo</a></span>
          </data>
        </div>
        <div className="image_container"><img src="./assets/img/ecuador.jpg" alt="Water fall in Ecuador" /></div>
      </div>
    </div>
  );
}
export default App;

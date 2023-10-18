import React, { /* useState */ useEffect } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

function App() {
  const loadScript = (url) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = url;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  };

  useEffect(() => {
    loadScript('https://unctad-infovis.github.io/2023-food_price_index/js/2023-food_price_index.min.js');
    loadScript('https://ebuddj.github.io/2021-temperature2/js/2021-temperature2.min.js');
    loadScript('https://unctad-infovis.github.io/2023-rmt_report/js/2023-rmt_report.min.js');
  }, []);
  return (
    <div className="app">
      <div className="content_container full dark flex">
        <div className="image_container"><img src="./assets/img/teemo.jpg" alt="Teemo Tebest" /></div>
        <div className="content">
          <h3>
            <div>
              Hi!
              {' '}
              I am Teemo, a human being
            </div>
            <IsVisible once>
              {(isVisible) => (
                <div className={`${(isVisible) ? 'visible' : ''} desc`}>and a information visualisation expert</div>
              )}
            </IsVisible>
            <div className="arrows_container">
              <a href="#anchor">
                <span />
                <span />
                <span />
              </a>
            </div>
          </h3>
        </div>
      </div>
      <div className="content_container white">
        <div className="content">
          <h2>Career</h2>
          <ul>
            <li>
              <span className="label">
                Infovis expert,
                {' '}
                <a href="https://unctad.org" target="_blank" rel="noreferrer">UNCTAD</a>
              </span>
              {' '}
              <span className="value">2022–</span>
            </li>
            <li>
              <span className="label">
                Datajournalist,
                {' '}
                <a href="https://www.ebu.ch/home" target="_blank" rel="noreferrer">EBU</a>
              </span>
              {' '}
              <span className="value">2019–2022</span>
            </li>
            <li>
              <span className="label">
                Datajournalist,
                {' '}
                <a href="https://yle.fi/" target="_blank" rel="noreferrer">Yle</a>
              </span>
              {' '}
              <span className="value">2012–2022</span>
            </li>
            <li>
              <span className="label">
                Researcher,
                {' '}
                <a href="https://www.tuni.fi/en" target="_blank" rel="noreferrer">TTY</a>
              </span>
              {' '}
              <span className="value">2009–2011</span>
            </li>
          </ul>
          <p>
            I have Master&apos;s degree in
            {' '}
            <strong>Computer Science</strong>
            . I studied in Tampere and my major was Hypermedia. I graduated in spring 2010. Between 2012 and 2022 I worked with the Finnish Broadcasting Company (Yle).
          </p>
          <p>
            At the moment I live in Geneva, Switzerland
            {' '}
            and I work for UNCTAD as a
            {' '}
            <strong>information visualisation expert</strong>
            .
          </p>
          <p>
            I can be found from the
            {' '}
            <a href="https://fi.wikipedia.org/wiki/Teemo_Tebest">Finnish Wikipedia</a>
            .
          </p>
          <p>
            Download my
            {' '}
            <a href="./assets/data/CV - Teemo Tebest.pdf" target="_blank">CV</a>
            .
          </p>
        </div>
      </div>
      <div className="content_container full">
        <IsVisible once>
          {(isVisible) => (
            <div className={`${(isVisible) ? 'visible' : ''} curtain_container`} />
          )}
        </IsVisible>
        <div className="content">
          <h2>2023 October</h2>
          <h4>Interactive line graph visualisation with D3.js</h4>
        </div>
        <IsVisible once>
          {(isVisible) => (
            <div className={`${(isVisible) ? 'visible' : ''} visualisation_container`}>
              <div id="app-root-2023-food_price_index" />
            </div>
          )}
        </IsVisible>
      </div>
      <div className="content_container">
        <div className="content">
          <h2>Knowledge</h2>
          <p>Data Journalism, Information Visualisation, GIS, Javascript/React, D3.js, HTML/CSS, Python, PHP, AWS, UI/UX design, frontend/backend, SQL, noSQL, Linux/Mac, Speadsheets</p>
        </div>
      </div>
      <div className="content_container full">
        <IsVisible once>
          {(isVisible) => (
            <div className={`${(isVisible) ? 'visible' : ''} curtain_container`} />
          )}
        </IsVisible>
        <div className="content">
          <h2>2021 July</h2>
          <h4>Animated column graph with D3.js</h4>
        </div>
        <IsVisible once>
          {(isVisible) => (
            <div className={`${(isVisible) ? 'visible' : ''} visualisation_container`}>
              <div id="app-root-2021-temperature2" />
            </div>
          )}
        </IsVisible>
      </div>
      <div className="content_container">
        <div className="content">
          <h2>Awards</h2>
          <ul>
            <li>
              <span className="label">Nordic Data Journalism Award</span>
              {' '}
              <a href="https://yle.fi/uutiset/3-7869067" target="_blank" rel="noreferrer">Kandideitti</a>
            </li>
            <li>
              <span className="label">Statistics story of the year</span>
              {' '}
              <a href="https://yle.fi/uutiset/3-7945975" target="_blank" rel="noreferrer">Election result visualisation</a>
            </li>
            <li>
              <span className="label">Prix Europa ja Koura-award</span>
              {' '}
              <a href="https://yle.fi/aihe/they_look_death_in_the_eye" target="_blank" rel="noreferrer">He Katsovat Kuolemaa Silmiin</a>
            </li>
            <li>
              <span className="label">Goole Editors Lab Hackday</span>
              {' '}
              <a href="https://www.globaleditorsnetwork.org/programmes/editors-lab/yle-editors-lab/" target="_blank" rel="noreferrer">Beef</a>
            </li>
            <li>
              <span className="label">Koura Innovation Award</span>
              {' '}
              <a href="https://yle.fi/uutiset/3-10769930" target="_blank" rel="noreferrer">Säteilevä paratiisi</a>
            </li>
            <li><h4>Shortlisted</h4></li>
            <li>
              <span className="label">Visual journalism award</span>
              {' '}
              <a href="https://yle.fi/uutiset/3-9853620" target="_blank" rel="noreferrer">Poika joka katseli pilviä</a>
            </li>
            <li>
              <span className="label">Nordic Data Journalism Award</span>
              {' '}
              <a href="https://yle.fi/uutiset/3-9490180" target="_blank" rel="noreferrer">Kuntatutka</a>
            </li>
            <li>
              <span className="label">Nordic Data Journalism Award</span>
              {' '}
              <a href="https://yle.fi/uutiset/3-6544401" target="_blank" rel="noreferrer">Mistä säästäisit…</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content_container full">
        <IsVisible once>
          {(isVisible) => (
            <div className={`${(isVisible) ? 'visible' : ''} curtain_container`} />
          )}
        </IsVisible>
        <div className="content">
          <h2>2023 September</h2>
          <h4>Race of bars graph with Highcharts</h4>
        </div>
        <IsVisible once>
          {(isVisible) => (
            <div className={`${(isVisible) ? 'visible' : ''} visualisation_container`}>
              <div id="app-root-2023-rmt_report_figure1" className="app-root-2023-rmt_report" />
            </div>
          )}
        </IsVisible>
      </div>
      <div className="content_container">
        <div className="content">
          <h2>In Media</h2>
          <p>
            Here are takes of my work in media and in publications. I have also gathered articles where I am mentioned on
            {' '}
            <a href="https://github.com/teelmo/newsstories">Github</a>
            .
          </p>
          <ul>
            <li>
              <span className="label">Apps4Finland</span>
              {' '}
              <span className="value"><a href="https://arcticstartup.com/apps4finland-winners-take-advantage-of-finlands-open-data/">Datavaalit</a></span>
            </li>
            <li>
              <span className="label">GEN</span>
              {' '}
              <span className="value"><a href="https://yle.fi/aihe/artikkeli/2016/04/18/yle-uutisten-joukkue-voittoisa-editors-labin-hackathon-tapahtumassa-helsingissa">Beef</a></span>
            </li>
            <li>
              <span className="label">NODA</span>
              {' '}
              <span className="value"><a href="https://yle.fi/aihe/artikkeli/2016/04/25/pohjoismainen-datajournalismipalkinto-ylen-kandideitti-vaalikoneelle">Kandideitti</a></span>
            </li>
            <li>
              <span className="label">Aamu-TV</span>
              {' '}
              <span className="value"><a href="https://areena.yle.fi/1-4071161">Vanhusvahti</a></span>
            </li>
            <li>
              <span className="label">Nordicom</span>
              {' '}
              <span className="value"><a href="https://www.nordicom.gu.se/sites/default/files/kapitel-pdf/tebest.pdf">Paperi</a></span>
            </li>
            <li>
              <span className="label">HRI</span>
              {' '}
              <span className="value"><a href="https://hri.fi/en_gb/yles-data-articles-created-with-text-editor-spreadsheet-and-python/">Interview</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content_container">
        <div className="content">
          <h2>Blog</h2>
          <p>Since 2011 I have published posts in a datajournalism blog in Finnish. The blog has been one of the most referred in the field of datajournalism in Finland and a source for many thesis works.</p>
          <ul>
            <li>
              <span className="label">Blog</span>
              {' '}
              <span className="value"><a href="https://datajournalismi.blogspot.com/">Datajournalism</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content_container">
        <div className="content">
          <h2>Statster</h2>
          <p>In 2007 I founded a website called Statster and it is still in active developlement. Statster is used to track albums that a user listens over time. I am counting at 30,000+ listenings.</p>
          <ul>
            <li>
              <span className="label">Statster</span>
              {' '}
              <span className="value"><a href="https://statser.info/user/teelmo/">@teelmo</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content_container">
        <div className="content">
          <h2>Contact</h2>
          <p>I give trainings in the area of data journalism and information visualisation. I organise workshops on how to use Excel and Google&apos;s tools efficiently. I regularly lecture at Universities and give trainings in seminars.</p>
          <p>You can reach me via different channels. Invite me to lecture, for a visit, for a beer, to be your friend.</p>
          <ul>
            <li>
              <span className="label">Instagram</span>
              {' '}
              <span className="value"><a href="https://www.instagram.com/teelmo/">@teelmo</a></span>
            </li>
            <li>
              <span className="label">Twitter</span>
              {' '}
              <span className="value"><a href="https://www.twitter.com/teelmo/">@teelmo</a></span>
            </li>
            <li>
              <span className="label">Facebook</span>
              {' '}
              <span className="value"><a href="https://www.facebook.com/teelmo/">@teelmo</a></span>
            </li>
            <li>
              <span className="label">LinkedIn</span>
              {' '}
              <span className="value"><a href="https://www.linkedin.com/in/teelmo/">@teelmo</a></span>
            </li>
            <li>
              <span className="label">Github</span>
              {' '}
              <span className="value"><a href="https://www.github.com/teelmo/">@teelmo</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content_container dark">
        <div className="image_container"><img src="./assets/img/ecuador.jpg" alt="Water fall in Ecuador" /></div>
        <div className="content">
          <h3>
            <IsVisible once>
              {(isVisible) => (
                <div className={`${(isVisible) ? 'visible' : ''} desc`}>Kaikki on hyvin</div>
              )}
            </IsVisible>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;

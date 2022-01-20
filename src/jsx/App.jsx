import React, {Component} from 'react';
import style from './../styles/styles.less';

import Typist from 'react-typist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang:'en'
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  changeLanguage(lang) {
    this.setState((state, props) => ({
      lang:lang
    }));
  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <h1>Teemo Tebest</h1>
        <div className={style.language_selector}>
          <button onClick={() => this.changeLanguage('en')}>in English</button>
          <button onClick={() => this.changeLanguage('fi')}>Suomeksi</button>
        </div>
        {
        this.state.lang === 'fi' && 
        <div>
          <div className={style.image_container}><img src="img/teemo.jpg" /></div>
          <h3><Typist cursor={{show: false,blink: true,element: '_',hideWhenDone: true, hideWhenDoneDelay: 0}}>Moro! Olen Teemo, ihminen.</Typist></h3>
          <div className={style.container}>
            <h2>Ura</h2>
            <p>Olen koulutukseltani tietotekniikan diplomi-insinööri. Opiskelin Tampereella, pääaineenani oli Hypermedia ja valmistuin keväällä 2010. Vuodesta 2012 olen ollut Ylellä ja tällä hetkellä asun Genevessä ja työskentelen EBU:lla datajournalistina. Minut löytää myös <a href="https://fi.wikipedia.org/wiki/Teemo_Tebest">Wikipediasta</a>.</p>
            <data><label>Tutkija, <a href="https://www.tuni.fi/fi" target="_blank">TTY</a></label> <span>2009–2011</span></data>
            <data><label>Datajournalisti, <a href="https://yle.fi/" target="_blank">Yle</a></label> <span>2012–2019</span></data>
            <data><label>Datajournalisti, <a href="https://www.ebu.ch/home" target="_blank">EBU</a></label> <span>2019–</span></data>
          </div>
          <div className={style.container}>
            <h2>Osaaminen</h2>
            <p>Datajournalismi, informaation visualisointi, GIS, Javascript/React, D3.js, HTML/CSS, Python, PHP, AWS, UI/UX design, frontend/backend, SQL, noSQL, Linux/Mac, taulukkolaskenta</p>
          </div>
          <div className={style.container}>
            <h2>Palkinnot</h2>
            <data><label>Nordic Data Journalism Award</label>, <a href="https://yle.fi/uutiset/3-7869067" target="_blank">Kandideitti</a></data>
            <data><label>Vuoden tilastojuttu</label>, <a href="https://yle.fi/uutiset/3-7945975" target="_blank">Vaalituloksen visualisointi</a></data>
            <data><label>Prix Europa ja Koura-palkinto</label>, <a href="https://yle.fi/aihe/he_katsovat_kuolemaa_silmiin" target="_blank">He Katsovat Kuolemaa Silmiin</a></data>
            <data><label>Goole Editors Lab Hackday</label>, <a href="https://www.globaleditorsnetwork.org/programmes/editors-lab/yle-editors-lab/" target="_blank">Beef</a></data>
            <data><label>Koura Innovation Award</label>, <a href="https://yle.fi/uutiset/3-10599493" target="_blank">Säteilevä paratiisi</a></data>
            <br />
            <br />
            <h2>Ehdokkuudet</h2>
            <data><label>Visuaalisen journalismin palkinto</label>, <a href="https://yle.fi/uutiset/3-9853620" target="_blank">Poika joka katseli pilviä</a></data>
            <data><label>Nordic Data Journalism Award</label>, <a href="https://yle.fi/uutiset/3-9490180" target="_blank">Kuntatutka</a></data>
            <data><label>Nordic Data Journalism Award</label>, <a href="https://yle.fi/uutiset/3-6544401" target="_blank">Mistä säästäisit…</a></data>
          </div>
          <div className={style.container}>
            <h2>Podcast</h2>
            <p>Julkaisen maananantaisin kello 18 Teemon elämää -nimellä kulkevaa Podcast-sarjaa. Sarjassa käyn läpi elämääni avoimesti eri kulmista. Ota kuunteluun.</p>
            <data><label>Podcast</label> <span><a href="https://www.anchor.fm/teelmo/">Teemon elämää</a></span></data>
          </div>
          <div className={style.container}>
            <h2>Blogi</h2>
            <p>Olen vuodesta 2011 julkaissut datajournalismiaiheisia kirjoituksia ja visualisointeja blogissani sekä taustoja tekemistäni jutuista.</p>
            <data><label>Blogi</label> <span><a href="https://datajournalismi.blogspot.com/">Datajournalismi</a></span></data>
          </div>
          <div className={style.container}>
            <h2>Urheilu</h2>
            <p>Pelaan kilpatasolla salibandyä ja sählyä. Tällä hetkellä edustan Geneva Vikingsejä. Harrastan myös sulkapalloa, golfia, juoksua, pöytätennistä, jalkapalloa ja futsalia.</p>
            <data><label>HM</label> <span>1 h 52 min 59 sek</span></data>
            <data><label>10 km</label> <span>46 min 52 sek</span></data>
            <data><label>5 km</label> <span>21 min 43 sek</span></data>
            <data><label>Cooper</label> <span>3,02 km</span></data>
            <data><label>HCP</label> <span>17,2 (NA)</span></data>
          </div>
          <div className={style.container}>
            <h2>Statster</h2>
            <p>Vuonna 2007 perustin verkkopalvelun nimeltä Statster. Sen avulla pidän kirjaa kuunnelluista albumeistani, joita on kertynyt jo melkein 30&shy;000.</p>
            <data><label>Statster</label> <span><a href="https://statser.info/user/teelmo/">@teelmo</a></span></data>
          </div>
           <div className={style.container}>
            <h2>Mediassa</h2>
            <p>Tässä poimintoja kun minut on mainittu mediassa ja julkaisuistani. Olen kerännyt artikkeleita myös <a href="https://github.com/teelmo/newsstories">Githubiin</a>.</p>
            <data><label>Apps4Finland</label> <span><a href="https://arcticstartup.com/apps4finland-winners-take-advantage-of-finlands-open-data/">Datavaalit</a></span></data>
            <data><label>GEN</label> <span><a href="https://yle.fi/aihe/artikkeli/2016/04/18/yle-uutisten-joukkue-voittoisa-editors-labin-hackathon-tapahtumassa-helsingissa">Beef</a></span></data>
            <data><label>NODA</label> <span><a href="https://yle.fi/aihe/artikkeli/2016/04/25/pohjoismainen-datajournalismipalkinto-ylen-kandideitti-vaalikoneelle">Kandideitti</a></span></data>
            <data><label>Aamu-TV</label> <span><a href="https://areena.yle.fi/1-4071161">Vanhusvahti</a></span></data>
            <data><label>Nordicom</label> <span><a href="https://www.nordicom.gu.se/sites/default/files/kapitel-pdf/tebest.pdf">Paperi</a></span></data>
            <data><label>HRI</label> <span><a href="https://hri.fi/fi/ylen-datajutut-syntyvat-tekstieditorilla-taulukkolaskennalla-ja-pythonilla/">Haastattelu</a></span></data>
          </div>
          <div className={style.container}>
            <h2>Laitteisto</h2>
            <data><label>Kannettava</label> <span>MacBook Pro</span></data>
            <data><label>Puhelin</label> <span>iPhone XR</span></data>
            <data><label>HTPC</label> <span>LibreELEC</span></data>
            <data><label>Kello</label> <span>Apple Watch 4</span></data>
            <data><label>Palvelin</label> <span>Ubuntu</span></data>
            <data><label>Konsoli</label> <span>Xbox 360</span></data>
            <data><label>Kaiuttimet</label> <span>Dali ZENSOR 5.1</span></data>
            <data><label>Vahvistin</label> <span>Marantz NR1403</span></data>
            <data><label>Kuulokkeet</label> <span>Beoplay H9i</span></data>
            <data><label>Mikrofoni</label> <span>Røde NT</span></data>
            <data><label>Kamera</label> <span>Canon EOS 800D</span></data>
            <data><label>Lumilauta</label> <span>Burton Ripcord</span></data>
            <data><label>Auto</label> <span>Hyundai i30</span></data>
          </div>
          <div className={style.container}>
            <h2>Yhteystiedot</h2>
            <p>Koulutan erityisesti datajournalismia ja tiedon visualisointia sekä pidän työpajoja Excelin ja Googlen työkalujen käytöstä. Vierailen säännöllisesti oppilaitoksissa ja seminaareissa, ulkomailla sekä kotimaassa.</p>
            <p>Voit ottaa minuun yhteyttä eri kanavissa. Kutsu minut kouluttamaan, luennoimaan, kylään, kaljalle, kaveriksi.</p>
            <data><label>Instagram</label> <span><a href="https://www.instagram.com/teelmo/">@teelmo</a></span></data>
            <data><label>Twitter</label> <span><a href="https://www.twitter.com/teelmo/">@teelmo</a></span></data>
            <data><label>Facebook</label> <span><a href="https://www.facebook.com/teelmo/">@teelmo</a></span></data>
            <data><label>LinkedIn</label> <span><a href="https://www.linkedin.com/in/teelmo/">@teelmo</a></span></data>
            <data><label>Github</label> <span><a href="https://www.github.com/teelmo/">@teelmo</a></span></data>
          </div>
          <div className={style.image_container}><img src="img/ecuador.jpg" /></div>
        </div>
      }
      {
      this.state.lang === 'en' && 
        <div>
          <div className={style.image_container}><img src="img/teemo.jpg" /></div>
          <h3><Typist cursor={{show: false,blink: true,element: '_',hideWhenDone: true, hideWhenDoneDelay: 0}}>Hi! I am Teemo, a human being.</Typist></h3>
          <div className={style.container}>
            <h2>Career</h2>
            <p>I have Master's degree in Computer Science. I studied in Tampere and my major was Hypermedia. I graduated in spring 2010. Since 2012 I have worked with the Finnish Broadcasting Company (Yle) and at the moment I live in Geneva, Switzerland and I work for the European Broadcasting Union as a data journalist. I can be found from the <a href="https://fi.wikipedia.org/wiki/Teemo_Tebest">Finnish Wikipedia</a>.</p>
            <data><label>Researcher, <a href="https://www.tuni.fi/fi" target="_blank">TTY</a></label> <span>2009–2011</span></data>
            <data><label>Datajournalist, <a href="https://yle.fi/" target="_blank">Yle</a></label> <span>2012–2019</span></data>
            <data><label>Datajournalist, <a href="https://www.ebu.ch/home" target="_blank">EBU</a></label> <span>2019–</span></data>
            <p><br />Download my <a href="data/CV - Teemo Tebest.pdf" target="_blank">CV</a></p>
          </div>
          <div className={style.container}>
            <h2>Knowledge</h2>
            <p>Data Journalism, Information Visualision, GIS, Javascript/React, D3.js, HTML/CSS, Python, PHP, AWS, UI/UX design, frontend/backend, SQL, noSQL, Linux/Mac, Speadsheets</p>
          </div>
          <div className={style.container}>
            <h2>Awards</h2>
            <data><label>Nordic Data Journalism Award</label>, <a href="https://yle.fi/uutiset/3-7869067" target="_blank">Kandideitti</a></data>
            <data><label>Statistics story of the year</label>, <a href="https://yle.fi/uutiset/3-7945975" target="_blank">Vaalituloksen visualisointi</a></data>
            <data><label>Prix Europa ja Koura-award</label>, <a href="https://yle.fi/aihe/they_look_death_in_the_eye" target="_blank">He Katsovat Kuolemaa Silmiin</a></data>
            <data><label>Goole Editors Lab Hackday</label>, <a href="https://www.globaleditorsnetwork.org/programmes/editors-lab/yle-editors-lab/" target="_blank">Beef</a></data>
            <data><label>Koura Innovation Award</label>, <a href="https://yle.fi/uutiset/3-10769930" target="_blank">Säteilevä paratiisi</a></data>
            <br />
            <br />
            <h2>Shortlisted</h2>
            <data><label>Visual journalism award</label>, <a href="https://yle.fi/uutiset/3-9853620" target="_blank">Poika joka katseli pilviä</a></data>
            <data><label>Nordic Data Journalism Award</label>, <a href="https://yle.fi/uutiset/3-9490180" target="_blank">Kuntatutka</a></data>
            <data><label>Nordic Data Journalism Award</label>, <a href="https://yle.fi/uutiset/3-6544401" target="_blank">Mistä säästäisit…</a></data>
          </div>
          <div className={style.container}>
            <h2>Podcast</h2>
            <p>I have released a Podcast series in 2019 about my life. The Podcast is in Finnish.</p>
            <data><label>Podcast</label> <span><a href="https://www.anchor.fm/teelmo/">Teemon elämää</a></span></data>
          </div>
          <div className={style.container}>
            <h2>Blog</h2>
            <p>Since 2011 I have published posts in a datajournalism blog in Finnish. The blog has been one of the most used sources of data journalism related thing in Finland and a source for many thesis works.</p>
            <data><label>Blog</label> <span><a href="https://datajournalismi.blogspot.com/">Datajournalism</a></span></data>
          </div>
          <div className={style.container}>
            <h2>Sport</h2>
            <p>I play floorball, badminton, golf, running, table tennis, football (both indoor and outdoor)</p>
            <data><label>HM</label> <span>1h 52min 59sec</span></data>
            <data><label>10 km</label> <span>46min 52sec</span></data>
            <data><label>5 km</label> <span>21min 43sec</span></data>
            <data><label>Cooper</label> <span>3.02 km</span></data>
            <data><label>HCP</label> <span>17.2 (NA)</span></data>
          </div>
          <div className={style.container}>
            <h2>Statster</h2>
            <p>In 2007 I founded a webservice called Statster and it is still in active developlement. Statster is used to track albums that a user have listened over time. My count is almost 30,000.</p>
            <data><label>Statster</label> <span><a href="https://statser.info/user/teelmo/">@teelmo</a></span></data>
          </div>
           <div className={style.container}>
            <h2>In Media</h2>
            <p>Here are takes of my work in media and in publications. I have also gathered articles where I am mentioned on <a href="https://github.com/teelmo/newsstories">Github</a>.</p>
            <data><label>Apps4Finland</label> <span><a href="https://arcticstartup.com/apps4finland-winners-take-advantage-of-finlands-open-data/">Datavaalit</a></span></data>
            <data><label>GEN</label> <span><a href="https://yle.fi/aihe/artikkeli/2016/04/18/yle-uutisten-joukkue-voittoisa-editors-labin-hackathon-tapahtumassa-helsingissa">Beef</a></span></data>
            <data><label>NODA</label> <span><a href="https://yle.fi/aihe/artikkeli/2016/04/25/pohjoismainen-datajournalismipalkinto-ylen-kandideitti-vaalikoneelle">Kandideitti</a></span></data>
            <data><label>Aamu-TV</label> <span><a href="https://areena.yle.fi/1-4071161">Vanhusvahti</a></span></data>
            <data><label>Nordicom</label> <span><a href="https://www.nordicom.gu.se/sites/default/files/kapitel-pdf/tebest.pdf">Paperi</a></span></data>
            <data><label>HRI</label> <span><a href="https://hri.fi/en_gb/yles-data-articles-created-with-text-editor-spreadsheet-and-python/">Interview</a></span></data>
          </div>
          <div className={style.container}>
            <h2>Equipment</h2>
            <data><label>Laptop</label> <span>MacBook Pro</span></data>
            <data><label>Mobile</label> <span>iPhone XR</span></data>
            <data><label>HTPC</label> <span>LibreELEC</span></data>
            <data><label>Watch</label> <span>Apple Watch 4</span></data>
            <data><label>Server</label> <span>Ubuntu</span></data>
            <data><label>Console</label> <span>Xbox 360</span></data>
            <data><label>Speakers</label> <span>Dali ZENSOR 5.1</span></data>
            <data><label>Amplifier</label> <span>Marantz NR1403</span></data>
            <data><label>Headphones</label> <span>Beoplay H9i</span></data>
            <data><label>Microphone</label> <span>Røde NT</span></data>
            <data><label>Camera</label> <span>Canon EOS 800D</span></data>
            <data><label>Snowboard</label> <span>Burton Ripcord</span></data>
            <data><label>Car</label> <span>Hyundai i30</span></data>
          </div>
          <div className={style.container}>
            <h2>Contact</h2>
            <p>I give trainings in the area of data journalsim and information visualiation. I organise workshops on how to use Excel and Google's tools efficiently. I regularly lecture at Universities and give trainings in seminars.</p>
            <p>You can reach me via different channels. Invite me to lecture, for a visit, for a beer, to be your friend.</p>
            <data><label>Instagram</label> <span><a href="https://www.instagram.com/teelmo/">@teelmo</a></span></data>
            <data><label>Twitter</label> <span><a href="https://www.twitter.com/teelmo/">@teelmo</a></span></data>
            <data><label>Facebook</label> <span><a href="https://www.facebook.com/teelmo/">@teelmo</a></span></data>
            <data><label>LinkedIn</label> <span><a href="https://www.linkedin.com/in/teelmo/">@teelmo</a></span></data>
            <data><label>Github</label> <span><a href="https://www.github.com/teelmo/">@teelmo</a></span></data>
          </div>
          <div className={style.image_container}><img src="img/ecuador.jpg" /></div>
        </div>
      }
      </div>
    )
  }
}
export default App;
import React, {Component} from 'react';
import style from './../styles/styles.less';

import Typist from 'react-typist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

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
        <div className={style.image_container}><img src="img/teemo.jpg" /></div>
        <h3><Typist cursor={{show: false,blink: true,element: '_',hideWhenDone: true, hideWhenDoneDelay: 0}}>Moro! Olen Teemo, ihminen.</Typist></h3>
        <div className={style.container}>
          <h2>Ura</h2>
          <p>Olen koulutukseltani tietotekniikan diplomi-insinööri. Opiskelin Tampereella, pääaineenani oli Hypermedia ja valmistuin keväällä 2010. Vuodesta 2012 olen ollut Ylellä ja tällä hetkellä asun Genevessä ja työskentelen EBU:lla datajournalistina.</p>
          <data><label>TTY</label> <span>2009–2011</span></data>
          <data><label>Yle</label> <span>2012–2019</span></data>
          <data><label>EBU</label> <span>2019–</span></data>
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
          <data><label>HM</label> <span>1h 52min 59sek</span></data>
          <data><label>10 km</label> <span>46min 52sek</span></data>
          <data><label>5 km</label> <span>21min 43sek</span></data>
          <data><label>Cooper</label> <span>3,02km</span></data>
        </div>
        <div className={style.container}>
          <h2>Laitteisto</h2>
          <data><label>Kannettava</label> <span>MacBook Pro</span></data>
          <data><label>Puhelin</label> <span>iPhone XR</span></data>
          <data><label>Kello</label> <span>Apple Watch 4</span></data>
          <data><label>Konsoli</label> <span>Xbox 360</span></data>
          <data><label>HTPC</label> <span>LibreELEC</span></data>
          <data><label>Palvelin</label> <span>Ubuntu</span></data>
          <data><label>Mikrofoni</label> <span>Røde NT</span></data>
          <data><label>Kuulokkeet</label> <span>Beoplay H9i</span></data>
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
          <data><label>Github</label> <span><a href="https://www.github.com/teelmo/">@teelmo</a></span></data>
        </div>
        <div className={style.image_container}><img src="img/ecuador.jpg" /></div>
      </div>
    );
  }
}
export default App;
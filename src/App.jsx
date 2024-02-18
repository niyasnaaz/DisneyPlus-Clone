
import './App.css';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import requests from './requests';

function App() {
  return (
    
    <div className="App">
  <Nav />
  <div className="main-content">
    <Banner fetchUrl={requests.fetchMarvelStudiosMovies} />
    <Content />
  </div>
      {/* <Home isPoster={true} title="Top-Rated" fetchUrl={requests.fetchUpcomingMovies}/>
      <Home isPoster={true} title="Top-Rated" fetchUrl={requests.fetchNowPlayingMovies}/>
      <Home isPoster={true} title="Top-Rated" fetchUrl={requests.fetchFamilyMovies}/>
      <Home isPoster={true} title="Top-Rated" fetchUrl={requests.fetchScienceFictionMovies}/>
      <Home isPoster={true} title="Top-Rated" fetchUrl={requests.fetchAnimatedMovies}/>
      <Home isPoster={true} title="Top-Rated" fetchUrl={requests.fetchFantasyMovies}/> */}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}><img src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png" width={'150px'} alt="" /></div>
      <Home isPoster={true} title="Disney Live-Action Movies" fetchUrl={requests.fetchDisneyLiveActionMovies} />
      <Home isPoster={true} title="Disney Animated Movies" fetchUrl={requests.fetchDisneyAnimatedMovies} />
      <Home isPoster={true} title="Disney Live-Action TV-Shows" fetchUrl={requests.fetchDisneyPlusOriginals} />
      <Home isPoster={true} title="Disney Animated TV-Shows" fetchUrl={requests.fetchDisneyTVShows} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}><img src="https://www.seekpng.com/png/full/149-1495908_disney-pixar-png-clip-art-free-download-disney.png" width={'150px'} alt="" /></div>
      <Home isPoster={true} title="Pixar Movies" fetchUrl={requests.fetchDisneyPixarMovies} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}><img src="https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png" width={'150px'} alt="" /></div>
      <Home isPoster={true} title="Marvel-Studios Movies" fetchUrl={requests.fetchMarvelStudiosMovies} />
      <Home isPoster={true} title="Marvel-Studios TV-Shows" fetchUrl={requests.fetchMarvelStudiosTVShows} />
      <Home isPoster={true} title="Marvel's Specials" fetchUrl={requests.fetchAllMarvelMovies} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}><img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsspider-man_lob_log_02_paddingsizeddown_1.png" width={'150px'} alt="" /></div>
      <Home isPoster={true} title="Spider-Man Movies" fetchUrl={requests.fetchSpiderManMovies} />

      <Home isPoster={true} title="Spider-Man TV-Shows" fetchUrl={requests.fetchSpiderManTVShows} />
      <div style={{ display: "flex", justifyContent: "center" }}><img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" width={'150px'} alt="" /></div>
      <Home isPoster={true} title="Star Wars Movies" fetchUrl={requests.fetchStarWarsMovies} />
      <Home isPoster={true} title="Star Wars TV-Shows" fetchUrl={requests.fetchStarWarsTVShows} />

      {/* <Home isPoster={true} title="MInd-Bending TV-Shows" fetchUrl={requests.fetchMindBendingTVShows} /> */}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "0px" }}><img src="https://www.keralatv.in/media/2023/05/DisneyHotstar.png" width={'200px'} alt="" /></div>
      <Home isPoster={true} title="Hotstar Originals" fetchUrl={requests.fetchMalayalamShows} />
      <Home isPoster={true} title="" fetchUrl={requests.fetchTrendingIndianTvshows} />

      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "50px" }}>REGIONAL CONTENTS</h1>
      <Home isPoster={true} title="Malayalam Movies" fetchUrl={requests.fetchMalayalamMovies} />
      <Home isPoster={true} title="Hindi Movies" fetchUrl={requests.fetchTrendingIndianMovies} />
      <Home isPoster={true} title="Tamil Movies" fetchUrl={requests.fetchTamilMovies} />
      <Home isPoster={true} title="Telugu Movies" fetchUrl={requests.fetchTeluguMovies} />
      <Home isPoster={true} title="Kannada Movies" fetchUrl={requests.fetchKannadaMovies} />

      <Home isPoster={true} title="Classic Movies" fetchUrl={requests.fetchclassicMovies} />
      <Home isPoster={true} title="Cult-Classic Movies" fetchUrl={requests.fetchcultClassicsMovies} />
      <Home isPoster={true} title="Hidden-Gems Movies" fetchUrl={requests.fetchhiddenGemsMovies} />
      <Home isPoster={true} title="Biographical Movies" fetchUrl={requests.fetchbiographicalMovies} />
      <Home isPoster={true} title="Mind-Bending TV-Shows" fetchUrl={requests.fetchmindBendingTVShows} />
      <Home isPoster={true} title="Time-Travel Movies" fetchUrl={requests.fetchtimeTravelMovies} />
      <Home isPoster={true} title="New Movies" fetchUrl={requests.fetchNewMovies} />
      <Home isPoster={true} title="" fetchUrl={requests.fetchUpcomingMovies} />
      <Home isPoster={true} title="New Documentaries" fetchUrl={requests.fetchNewDocumentaries} />
      <Home isPoster={true} title="Top-Rated TV-Shows" fetchUrl={requests.fetchTopRatedTVShows} />
      <Home isPoster={true} title="Drama Series" fetchUrl={requests.fetchDramaMovies} />
      <Home isPoster={true} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />


      <Footer/>
    </div>
  );
}

export default App;
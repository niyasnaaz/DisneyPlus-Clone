const APIKEY = "2ec0d66f5bdf1dd12eefa0723f1479cf";

const requests = {
    fetchNewActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28&sort_by=release_date.desc`,
    fetchNewComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35&sort_by=release_date.desc`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27&sort_by=popularity.desc`,
    fetchNewRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749&sort_by=release_date.desc`,
    fetchNewDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99&sort_by=release_date.desc`,
    fetchNewMovies:`/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc`,
    fetchPopularMovies:`/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
    fetchUpcomingMovies:`/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
    fetchNowPlayingMovies:`/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
    fetchTopRatedTVShows:`/tv/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchFamilyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10751&sort_by=popularity.desc`,
    fetchScienceFictionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=878&sort_by=popularity.desc`,
    fetchAnimatedMovies:`/discover/movie?api_key=${APIKEY}&with_genres=16&sort_by=popularity.desc`,
    fetchFantasyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=14&sort_by=popularity.desc`,
    fetchDramaMovies:`/discover/tv?api_key=${APIKEY}&with_networks=2739&sort_by=popularity.desc`,

    // Disney Contents
    fetchDisneyAnimatedMovies: `/discover/movie?api_key=${APIKEY}&with_genres=16&query=Disney&sort_by=popularity.desc`,
    fetchDisneyLiveActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10751&query=Disney&sort_by=popularity.desc`,
    fetchDisneyPlusOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=2739&sort_by=popularity.desc`,
    fetchDisneyTVShows: `/discover/tv?api_key=${APIKEY}&with_genres=16,10751&sort_by=popularity.desc`,

    // pixar movies
    fetchDisneyPixarMovies: `/discover/movie?api_key=${APIKEY}&with_companies=3&query=Disney&sort_by=popularity.desc`,

    // MARVEL CONTENTS
    fetchMarvelStudiosMovies: `/discover/movie?api_key=${APIKEY}&with_companies=420&sort_by=popularity.desc`,
    fetchMarvelStudiosTVShows: `/discover/tv?api_key=${APIKEY}&with_companies=420&sort_by=popularity.desc`,
    fetchAllMarvelMovies: `/search/movie?api_key=${APIKEY}&query=Marvel&sort_by=popularity.desc`,

    //STAR WARS CONTENTS
    fetchStarWarsMovies: `/discover/movie?api_key=${APIKEY}&with_companies=1&sort_by=popularity.desc`,
    fetchStarWarsTVShows: `/discover/tv?api_key=${APIKEY}&with_companies=1&sort_by=popularity.desc`,

    // SPIDER-MAN CONTENTS
    fetchSpiderManMovies: `/search/movie?api_key=${APIKEY}&query=Spider-Man&sort_by=popularity.desc`,
    fetchSpiderManTVShows: `/search/tv?api_key=${APIKEY}&query=Spider-Man&sort_by=popularity.desc`,

    fetchDCMovies: `/search/movie?api_key=${APIKEY}&query=DC&sort_by=popularity.desc`,
    fetchDCTVShows: `/search/tv?api_key=${APIKEY}&query=DC&sort_by=popularity.desc`,

    fetchMindBendingTVShows: `/discover/tv?api_key=${APIKEY}&with_genres=9648&sort_by=popularity.desc`,
    fetchNationalGeographicContent: `/search/multi?api_key=${APIKEY}&query=National%20Geographic&sort_by=popularity.desc`,
    // hotstar
    fetchMalayalamMovies: `/discover/movie?api_key=${APIKEY}&with_original_language=ml&sort_by=popularity.desc`,
    fetchMalayalamShows: `/discover/tv?api_key=${APIKEY}&with_original_language=ml&sort_by=popularity.desc`,
    fetchTamilMovies: `/discover/movie?api_key=${APIKEY}&with_original_language=ta&sort_by=popularity.desc`,
    fetchTrendingIndianMovies: `/discover/movie?api_key=${APIKEY}&with_original_language=hi&region=IN&sort_by=popularity.desc`,
    fetchTrendingIndianTvshows: `/discover/tv?api_key=${APIKEY}&with_original_language=hi&region=IN&sort_by=popularity.desc`,
    fetchKannadaMovies: `/discover/movie?api_key=${APIKEY}&with_original_language=kn&sort_by=popularity.desc`,
    fetchTeluguMovies: `/discover/movie?api_key=${APIKEY}&with_original_language=te&sort_by=popularity.desc`,

    //Genres
    fetchclassicMovies: `/discover/movie?api_key=${APIKEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    fetchanimeMovies: `/discover/movie?api_key=${APIKEY}&with_genres=16&sort_by=popularity.desc`,
    fetchmindBendingTVShows: `/discover/tv?api_key=${APIKEY}&with_genres=9648&sort_by=popularity.desc`,
    fetchhiddenGemsMovies: `/discover/movie?api_key=${APIKEY}&vote_average.gte=7&sort_by=popularity.desc`,
    fetchbiographicalMovies: `/discover/movie?api_key=${APIKEY}&with_genres=36&sort_by=popularity.desc`,
    fetchcultClassicsMovies: `/discover/movie?api_key=${APIKEY}&with_genres=80&sort_by=popularity.desc`,
    fetchfamilyFriendlyMovies: `/discover/movie?api_key=${APIKEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    fetchtimeTravelMovies: `/discover/movie?api_key=${APIKEY}&with_genres=14&sort_by=popularity.desc`,
}



export default requests
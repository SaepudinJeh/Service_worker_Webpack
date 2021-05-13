import TheMovieSource from "../../data/movieDb-source";

const NowPlaying = {
    async render() {
        return `
            <h2>Now Playing Page</h2>
        `;
    },

    async afterRender() {
        const movies = await TheMovieSource.nowPlayingMovies();
        console.log(movies); 
    },
};

export default NowPlaying;
import TheMovieSource from "../../data/movieDb-source";
import { createMovieItemTemplate } from "../templates/templates-creator";

const NowPlaying = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Now Playing in Cinema</h2>
            <div id="movies" class="movies">
    
            </div>
        </div>
        `;
    },

    async afterRender() {
        const movies = await TheMovieSource.nowPlayingMovies();
        const movieContainer = document.querySelector("#movies");
        movies.forEach(movie => {
            movieContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default NowPlaying;
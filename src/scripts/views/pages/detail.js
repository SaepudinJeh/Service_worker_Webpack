import UrlParser from "../../routes/url-parser";
import TheMovieSource from "../../data/movieDb-source";
import { createMovieDetailTemplate } from "../templates/templates-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        return `
            <div id="movie" class="movie"></div>
            <div id="likeButtonContainer" class="movie"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveWithoutCombiler();
        const movie = await TheMovieSource.detailMovie(url.id);
        const movieContainer = document.querySelector("#movie");
        movieContainer.innerHTML = createMovieDetailTemplate(movie);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeButtonContainer"),
            movie: {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                vote_average: movie.vote_average,
            }
        });
    },
};

export default Detail;
import UrlParser from "../../routes/url-parser";
import TheMovieSource from "../../data/movieDb-source";
import { createMovieDetailTemplate } from "../templates/templates-creator";

const Detail = {
    async render() {
        return `
            <div id="movie" class="movie"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveWithoutCombiler();
        const movie = await TheMovieSource.detailMovie(url.id);
        const movieContainer = document.querySelector("#movie");
        movieContainer.innerHTML = createMovieDetailTemplate(movie);
    },
};

export default Detail;
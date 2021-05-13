import UrlParser from "../../routes/url-parser";
import TheMovieSource from "../../data/movieDb-source";

const Detail = {
    async render() {
        return `
            <h2>Detail Page</h2>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveWithoutCombiler();
        const movie = await TheMovieSource.detailMovie(url.id);
        console.log(movie);
    },
};

export default Detail;
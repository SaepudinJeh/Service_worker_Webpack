import TheMovieSource from "../../data/movieDb-source";

const Upcoming = {
    async render() {
        return `
            <h2>Upcoming Page</h2>
        `;
    },

    async afterRender() {
        const movies = await TheMovieSource.upcommingMovies();
        console.log(movies);
    },
};

export default Upcoming;
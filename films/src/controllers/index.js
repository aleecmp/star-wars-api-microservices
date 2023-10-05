const { catchedAsync } = require("../utils");

module.exports = {
    getAllFilms: catchedAsync(require("./getAllFilms")),
    getFilmById: catchedAsync(require("./getFilmById")),
    createFilm: catchedAsync(require("./createFilm")),
    updateFilm: catchedAsync(require("./updateFilm")),
    deleteFilm: catchedAsync(require("./deleteFilm")),
};

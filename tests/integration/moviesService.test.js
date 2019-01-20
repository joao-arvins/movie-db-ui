import moviesService from '../../src/services/moviesService';

describe('Movies search service', () => {

    describe('Searching for a movie by title', () => {
        let res;

        beforeEach(async() => {
            res = await moviesService.getMoviesByTitle('start');
        });
      
        it('Returns an inner property containing the list of movies', () => {
          expect(Array.isArray(res.results)).toBeTruthy();
        });
      });
  });
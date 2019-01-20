import moviesService from '../../src/services/moviesService';
import storageService from '../../src/services/storageService';

describe('Movies search service', () => {
    beforeAll(async() => {
        const apiConfig = {
            images : {
                base_url : 'dummyimagebases/'
            }
        };

        spyOn(storageService, 'set').and.callFake(() => {});
        spyOn(storageService, 'get').and.returnValue(apiConfig);
    });

    describe('Searching for a movie by title', () => {
        let res;

        beforeEach(async() => {
            res = await moviesService.getMoviesByTitle('start');
        });
      
        it('Returns an inner property containing the list of movies', () => {
          expect(Array.isArray(res.results)).toBeTruthy();
        });
      });

      describe('Initializing configurations', () => {
        beforeEach(async() => {
            await moviesService.initConfiguration();
        });
      
        it('Saves the result', () => {
          expect(storageService.set).toHaveBeenCalled();
        });
      });
  });
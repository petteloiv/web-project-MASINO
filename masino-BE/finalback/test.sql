-- SQLite
-- SELECT COUNT(*) FROM movies_person;

-- SELECT COUNT(*) FROM movies_person WHERE popularity >= 10;

-- SELECT movie_id FROM movies_movie_genre_ids WHERE genre_id='14';

-- SELECT * 
-- FROM movies_movie 
-- WHERE movie_id in (
-- SELECT movie_id 
-- FROM movies_movie_genre_ids 
-- WHERE genre_id='14'
-- ); 
-- ORDER BY popularity LIMIT 10;

CREATE TABLE movies_movie_genre_10770 AS SELECT movie_id FROM movies_movie_genre_ids WHERE genre_id='10770';

-- DROP TABLE movies_movie_genre_18;
import json
import requests

result = []

for page in range(1, 499):
    url = f'https://api.themoviedb.org/3/movie/top_rated?api_key=apikey&language=ko-KR&page={page}'

    raw_data = requests.get(url).json()
    data = raw_data.get('results')

    

    for movie in data:

        if movie in data:
            if movie.get("vote_count") < 2000:
                continue

        movie_dict = {
            "model" : "movies.movie",
            "pk" : movie.get("id"),
            "fields" : {
                "title" : movie.get("title"),
                "popularity" : movie.get("popularity"),
                "genre_ids" : movie.get("genre_ids"),
                "release_date" : movie.get("release_date"),
                "vote_average" : movie.get("vote_average"),
                "overview" : movie.get("overview"),
                "poster_path" : movie.get("poster_path"),
                "backdrop_path" : movie.get("backdrop_path"),
            }
        }

        result.append(movie_dict)

with open('moviedata.json', 'w', encoding='UTF-8') as file:
    file.write(json.dumps(result, ensure_ascii=False))


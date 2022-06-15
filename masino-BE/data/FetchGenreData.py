




import json
import requests

result = []

url = f'https://api.themoviedb.org/3/genre/movie/list?api_key=apikey&language=ko-KR'

raw_data = requests.get(url).json()
data = raw_data.get("genres")

for genre in data:
  genre_dict = {
    "model" : "movies.genre",
    "pk" : genre.get("id"),
    "fields" : {
        "name" : genre.get("name")
    }
}
  result.append(genre_dict)


with open('genredata.json', 'w', encoding='UTF-8') as file:
    file.write(json.dumps(result, ensure_ascii=False))
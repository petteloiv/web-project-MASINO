import json
import requests

result = []

movie_ids = []

person_ids = {}

for page in range(1, 499):
    movie_url = f'https://api.themoviedb.org/3/movie/top_rated?api_key=apikey&language=ko-KR&page={page}'
    movie_raw_data = requests.get(movie_url).json()
    movie_data = movie_raw_data.get('results')
    
    for movie in movie_data:
        if movie.get("vote_count") < 2000:
            continue
        id = movie.get("id")
        movie_ids.append(id)

for movie_id in movie_ids:
    movie_credits_url = f'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=apikey&language=ko-KR'
    movie_credits_raw_data = requests.get(movie_credits_url).json()
    movie_credits_data = movie_credits_raw_data.get("cast")

    for credit in movie_credits_data:
        for order in range(10):
            if credit.get("popularity") < 10:
                continue
            if credit.get("order") == order:
                id = credit.get("id")
                if person_ids.get(f"{id}"):
                    person_ids.get(f"{id}").append(movie_id)
                else:
                    person_ids[f"{id}"] = [movie_id]



# person_ids = list(set(person_ids))
# print(person_ids)

for person_id in person_ids:
    url = f'https://api.themoviedb.org/3/person/{person_id}?api_key=apikey'

    person = requests.get(url).json()
    
    # for person in raw_data:
    person_dict = {
        "model" : "movies.person",
        "pk" : person.get("id"),
        "fields" : {
            "name" : person.get("name"),
            "gender" : person.get("gender"),
            "profile_path" : person.get("profile_path"),
            "popularity" : person.get("popularity"),
            "birthday" : person.get("birthday"),
            "place_of_birth" : person.get("place_of_birth"),
            "movie_ids" : [],   
        },
    }
    
    for movie_id in person_ids.get(f"{person_id}"):
        person_dict.get("fields").get("movie_ids").append(movie_id)

    result.append(person_dict)

with open('persondata.json', 'w', encoding='UTF-8') as file:
    file.write(json.dumps(result, ensure_ascii=False))


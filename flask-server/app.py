import json
from flask import Flask, Response, request

app = Flask(__name__)

@app.route("/translate/<word>")
def get_words(word):
  try:
    word = word.lower()
    with open("eng-fi_dictionary.json", "r") as dict:
      data = json.load(dict)
    response = {
      "English" : word,
      "Finnish" : data[word]
    }
    
  except:
    response = {
      "message" : "Word not found.",
      "status" : 400
    }
  json_response = json.dumps(response)
  http_response = Response(response=json_response, status=400, mimetype="application/json")
  return http_response


if __name__ == "__main__":
  app.run(host="127.0.0.1", port=3000, use_reloader=True)
from flask import Flask, request, abort
from werkzeug.datastructures import ImmutableMultiDict
import json

from api_types import DifficultyLevel, ParkTrailsResponse, ParkTrailsRequest
from trail_selector import select_trails

app = Flask(__name__)

DAYS_ARG = "days"
DIFFICULTY_ARG = "difficulty"
PARTY_SIZE_ARG = "party_size"

DEFAULT_DAYS = 3
DEFAULT_DIFFICULTY = DifficultyLevel.medium
DEFAULT_PARTY_SIZE = 4


def parse_park_trails_args(args : ImmutableMultiDict) -> ParkTrailsRequest:
  days = DEFAULT_DAYS
  difficulty = DEFAULT_DIFFICULTY
  party_size = DEFAULT_PARTY_SIZE

  if DAYS_ARG in args:
    try:
      days = int(args[DAYS_ARG])
    except ValueError:
      abort(400)

  if DIFFICULTY_ARG in args:
    try:
      difficulty = DifficultyLevel[args[DIFFICULTY_ARG]]
    except KeyError:
      abort(400)

  if PARTY_SIZE_ARG in args:
    try:
      party_size = int(args[PARTY_SIZE_ARG])
    except ValueError:
      abort(400) 

  return ParkTrailsRequest(days, difficulty, party_size)

@app.route('/api/0/park_trails/<park_name>')
def park_trails(park_name: str):
  trails_request = parse_park_trails_args(request.args)
  response = select_trails(trails_request)
  return json.dumps(response._asdict())
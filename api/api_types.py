from enum import Enum
from typing import NamedTuple, List


class DifficultyLevel(Enum):
    easy = 1
    medium = 2
    hard = 3


class ParkTrailsRequest(NamedTuple):
    days: int
    difficulty: DifficultyLevel
    party_size: int


class TrailItemInfo(NamedTuple):
    tid: int
    name: str
    min_mileage: int
    max_mileage: int
    camps: List[str]


class ParkTrailsResponse(NamedTuple):
    trails: List[TrailItemInfo]


class TrailDetailsResponse(NamedTuple):
    name: str
    info: str

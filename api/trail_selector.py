from api_types import (
  TrailItemInfo, ParkTrailsResponse, ParkTrailsRequest
)


def select_trails(
  trails_request: ParkTrailsRequest
) -> ParkTrailsResponse:
    trail_item = TrailItemInfo(
        tid=123456,
        name=(
            f"Trail for {trails_request.days} days, " +
            f"{trails_request.difficulty.name} difficulty and " +
            f"{trails_request.party_size} people"
        ),
        min_mileage=6,
        max_mileage=8,
        camps=['Foo', 'Bar']
    )

    return ParkTrailsResponse([trail_item]*5)

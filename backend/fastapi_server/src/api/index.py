from fastapi import APIRouter

api_router = router = APIRouter()


@router.get("/v1/{username}")
async def getUser(username: str):
    return {"user": username}

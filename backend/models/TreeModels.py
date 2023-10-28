from pydantic import BaseModel


class CreateTreeRequest(BaseModel):
    username: str
    skill: str
    description: str
    tags: list[str]
    tree: dict


class GetTreeResponse(BaseModel):
    skilltree_id: int
    username: str
    skill: str
    description: str
    tags: list[str]
    tree: dict
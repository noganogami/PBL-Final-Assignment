from typing import List, Union
from pydantic import BaseModel
from models import Tag


class Token(BaseModel):
    access_token: str
    token_type: str


class ItemBase(BaseModel):
    title: str
    tag: Union[Tag, None] = None
    indices: str


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    item_id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    user_id: int
    items: List[Item] = []

    class Config:
        orm_mode = True

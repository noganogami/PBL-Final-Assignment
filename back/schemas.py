from typing import List, Union
from pydantic import BaseModel
from models import Tag


class Token(BaseModel):
    access_token: str
    token_type: str


class FavoBase(BaseModel):
    user_id: int
    item_id: int


class FavoCreate(FavoBase):
    pass


class Favo(FavoBase):
    favo_id: int

    class Config:
        orm_mode = True


class ItemBase(BaseModel):
    title: str
    tag: Union[Tag, None] = None
    indices: str


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    item_id: int
    owner_id: int
    favorites: List[Favo] = []

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    user_id: int
    items: List[Item] = []
    favorites: List[Favo] = []

    class Config:
        orm_mode = True

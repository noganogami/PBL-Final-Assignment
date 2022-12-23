import enum
from datetime import datetime
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, DateTime
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    hashed_password = Column(String(100), nullable=False)
    created_at = Column(DateTime, default=datetime.now())

    items = relationship("Item", back_populates="owner")
    favorites = relationship("Favo", back_populates="user")


class Tag(str, enum.Enum):
    still_life = "still_life"
    oscillator = "oscillator"
    spaceship = "spaceship"
    infinite_growth = "infinite_growth"
    methuselah = "methuselah"
    other = "other"


class Item(Base):
    __tablename__ = "items"

    item_id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50), index=True)
    tag = Column(Enum(Tag), index=True)
    owner_id = Column(Integer, ForeignKey("users.user_id"))
    created_at = Column(DateTime, default=datetime.now(), index=True)

    owner = relationship("User", back_populates="items")
    favorites = relationship("Favo", back_populates="item")


class Favo(Base):
    __tablename__ = "favorites"

    favo_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    item_id = Column(Integer, ForeignKey("items.item_id"))
    created_at = Column(DateTime, default=datetime.now(), index=True)

    user = relationship("User", back_populates="favorites")
    item = relationship("Item", back_populates="favorites")

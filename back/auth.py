from datetime import datetime, timedelta

from sqlalchemy.orm import Session
from jose import jwt

import crud

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "764e087ffcb3a7310dcb7f52cbad1490c0494551c00fd9a24c88c48231f87eb3"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def authenticate_user(db: Session, username: str, password: str):
    user = crud.get_user_by_username(db, username)
    if not user:
        return False
    if not crud.verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)):
    to_encode = data.copy()
    expire = datetime.now() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

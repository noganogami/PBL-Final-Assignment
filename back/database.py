from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker


user = "root"
password = "password"
host = "db"
db_name = "test"

engine = create_engine("mysql+mysqlconnector://" +
                       f"{user}:{password}@{host}/{db_name}")


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

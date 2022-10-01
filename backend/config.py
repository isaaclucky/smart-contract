from dotenv import load_dotenv
import os
import redis

load_dotenv()


class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = "postgresql://post_user:password@localhost:5432/smart_contract"
    
    SESSION_TYPE = "redis"
    SESSION_PERMINENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")
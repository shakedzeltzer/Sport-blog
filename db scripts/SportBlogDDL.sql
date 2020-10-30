DROP DATABASE IF EXISTS `sport-blog`;
CREATE DATABASE `sport-blog`;
USE `sport-blog`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE GAMES_SCORE (
    ID int NOT NULL AUTO_INCREMENT,
    TEAM_A varchar(255),
    TEAM_B varchar(255),
    SCORE_A int,
    SCORE_B int,
    GAME_DATE datetime,
    CATEGORY varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE COMMENTS (
	ID int NOT NULL AUTO_INCREMENT,
    GAME_COMMENT varchar(200),
    GAME_ID int,
    COMMENT_TIME datetime,
	PRIMARY KEY (ID),
	FOREIGN KEY (GAME_ID) REFERENCES GAMES_SCORE(ID)
);

COMMIT;
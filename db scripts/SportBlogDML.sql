INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Barcelona", "Real", 2, 0, '2020-01-01 10:10:10', "Football");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Maccabi", "Real", 76, 74, '2020-01-01 10:10:10', "Basketball");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Bayern", "Paris", 4, 0, '2020-01-01 10:10:10', "Football");

INSERT INTO `comments` (GAME_COMMENT, GAME_ID, COMMENT_TIME)
VALUES ("That was an amazing game", 1,'2020-01-02 09:10:10');

INSERT INTO `comments` (GAME_COMMENT, GAME_ID, COMMENT_TIME)
VALUES ("Very cool!!", 1,'2020-01-02 09:10:10');

INSERT INTO `comments` (GAME_COMMENT, GAME_ID, COMMENT_TIME)
VALUES ("Amazing", 1,'2020-01-02 09:10:10');

INSERT INTO `comments` (GAME_COMMENT, GAME_ID, COMMENT_TIME)
VALUES ("oof", 2,'2020-01-02 09:10:10');

INSERT INTO `comments` (GAME_COMMENT, GAME_ID, COMMENT_TIME)
VALUES ("Good game", 2,'2020-01-02 09:10:10');

COMMIT;
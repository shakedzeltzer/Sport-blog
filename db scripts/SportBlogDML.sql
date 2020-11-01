INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Barcelona", "Real Madrid", 3, 1, '2018-02-20 10:10:00', "Football");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Bayern", "Paris", 4, 0, '2020-01-01 20:00:00', "Football");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Bayern", "Real Madrid", 3, 2, '2019-04-12 09:15:00', "Football");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Maccabi", "Real Madrid", 76, 74, '2019-05-23 05:20:00', "Basketball");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Maccabi", "Cheska", 85, 70, '2020-06-24 20:00:00', "Basketball");

INSERT INTO `games_score` (TEAM_A, TEAM_B, SCORE_A, SCORE_B, GAME_DATE, CATEGORY)
VALUES ("Fener", "Real Madrid", 62, 74, '2020-05-12 10:10:10', "Basketball");

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
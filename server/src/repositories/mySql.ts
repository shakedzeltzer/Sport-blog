import mysql from 'mysql'
import mySqlConnection from './dbConfig'
import { IComment } from '../entities/interfaces'

const connection = mysql.createConnection(mySqlConnection)
connection.connect()

export function getAllGames(func: (data: any) => void) {
    connection.query('SELECT * FROM games_score', (err, rows, fields) => {
        func(rows);
    })
}

export function getAllGamesByCategory(category: string, func: (data: any) => void) {
    connection.query(`SELECT * FROM games_score WHERE CATEGORY=?`, category,  (err, rows, fields) => {  
        func(rows);
    })
}

export function getGameComments(gameId: number, func: (data: any) => void) {
    connection.query(`SELECT * FROM comments WHERE GAME_ID=?`, gameId, (err, rows, fields) => {  
        func(rows);
    })
}

export function insertGameComment(comment: IComment, func: () => void) {
    connection.query(`INSERT INTO comments (GAME_COMMENT, GAME_ID, COMMENT_TIME)
                        VALUES (?, ?, NOW())`, [comment.comment, comment.gameId], (err, rows, fields) => {
            func();
    })
}
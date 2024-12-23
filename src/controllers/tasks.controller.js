const pool = require('../db');


const getAllTasks =  async (req, res, next) => {
    try {
        const {completed= false, page = 1, limitPag = 10} = req.body;
        const offSet = (page-1) * 10;
        const query = {
            text: 'SELECT * FROM tasks WHERE ($1::boolean IS NULL OR completed = $1) LIMIT $2 OFFSET $3',
            values: [completed, limitPag, offSet],
        }
        const result = await pool.query(query.text, query.values);
        totalQuery = await pool.query('SELECT COUNT(*) FROM tasks WHERE ($1::boolean IS NULL OR completed = $1)', [completed])
        await res.json({tasks: result.rows, total: totalQuery.rows[0].count});
    } catch (error) {
        res.json({error: error.message})
    }

};

const createTask = async (req, res) => {
    try {
        const {title} = req.body;
        const user = req.user.username;
        const result = await pool.query('INSERT INTO tasks (title, user_id) VALUES ($1, $2) RETURNING *', [title, user]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.json({error: error.message})
    }
};


const patchTask = async(req, res) => {
    try {
        const {completed} = req.body;

        const result = await pool.query('UPDATE tasks SET completed = $1 WHERE id= $2 RETURNING *', [completed, req.params.id]);
        console.log(result);
        res.sendStatus(204);
    } catch (error) {
        res.json({error: error.message})
    }

}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        if(result.rowCount === 0 ){
            return res.status(404).json({
                message: 'Task not found.'
            })
        }
    
        res.sendStatus(204);
    } catch (error) {
        
    }

}


module.exports = {
    getAllTasks,
    createTask,
    patchTask,
    deleteTask
}
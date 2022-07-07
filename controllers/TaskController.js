const res = require('express/lib/response');
const taskModel = require('../models/Task');

class TaskController {

    async getTasks (req, res) {
        try {
            const result = await taskModel.getTasks();
            res.render('task/index', { tasks: result });
        } catch (err) {
            console.log(err.message);
        };
    };

    getTask(id) {
        try {
            return taskModel.getTask(id);
        } catch (err) {
            console.log(err.message);
        };
    };

    async create(req, res) {
        res.render('task/create');
    };

    async createTask(req, res) {
        try{
            const task = req.body.Task;
            const status = 'In progress';
            const result = taskModel.createTask(task, status);
            console.log(result);
            res.redirect('/');
        } catch(err){
            console.log(err.message);
        }
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const result = this.getTask(id);
            res.render('task/update', { task: result });
        } catch (err) {
            console.log(err.message);
        };
    };

    async updateTask(req, res) {
        try {
            const id = req.params.id;
            const title = req.body.title;
            const status = req.body.status;
            await taskModel.updateTask(id, title, status);
            res.redirect('/')
        } catch (err) {
            console.log(err.message);
        };
    };

    async delete(req, res) {
        try {
            const id = req.params.id;
            const result = this.getTask(id);
            res.render('task/delete', { task: result });
        } catch (err) {
            console.log(err.message);
        };
    };

    
    async deleteTask(req, res) {
        try {
            const id = req.params.id;
            await taskModel.deleteTask(id);
            res.redirect('/');
        } catch (err) {
            console.log(err.message);
        };
    };
}

module.exports = new TaskController();

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TaskTable = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
  }
);

class Task {
  async getTasks(){
    return await TaskTable.findAll();
  }

  async getTask(id){
    return await TaskTable.findOne({
      where: { id: id }
    });
  }

  async createTask(title, status){
    return await TaskTable.create({
      title: title,
      status: status,
    });
  }

  async updateTask(id, title, status){
    return await TaskTable.update({
      title: title, 
      status: status
    }, {
      where: {id: id}
    });
  }

  async deleteTask(id){
    return await TaskTable.destroy({
      where: { id: id }
    })
  }
}

module.exports = new Task;
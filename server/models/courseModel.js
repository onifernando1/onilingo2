const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  return Course;
};

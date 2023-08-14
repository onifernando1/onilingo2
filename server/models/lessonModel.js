const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define("lesson", {
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
  return Lesson;
};

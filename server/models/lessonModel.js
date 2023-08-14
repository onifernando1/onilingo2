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
    number: {
      type: DataTypes.INTEGER,
    },
  });

  Lesson.associate = function (models) {
    Lesson.has_many(models.Word, { as: "Words", foreignKey: "LessonId" });
  };

  return Lesson;
};

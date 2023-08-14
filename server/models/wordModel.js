const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define("word", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    english: {
      type: DataTypes.STRING,
    },
    portuguese: {
      type: DataTypes.STRING,
    },
    lastStudied: {
      type: DataTypes.DATE,
    },
    toBeStudiedDate: {
      type: DataTypes.DATE,
    },
    timesSeen: {
      type: DataTypes.INTEGER,
    },
    timesWrong: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
    percentage: {
      type: DataTypes.INTEGER,
    },
    lastFiveArray: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    lastFivePercentage: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    sound: {
      type: DataTypes.STRING,
    },
  });

  Word.belongsTo(models.User, { as: "Lesson", foreignKey: "LessonId" });
  return Word;
};

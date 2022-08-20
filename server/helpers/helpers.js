const date = new Date;
const generatedId = parseInt(date.getHours() + "" + date.getMinutes() + "" + date.getSeconds());

module.exports = generatedId
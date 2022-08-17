const date = new Date;
const generatedId = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();

module.exports = generatedId
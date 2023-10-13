const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    data.split('\n').forEach((data) => {
        result.push(data.split(','));
    });

    const result = [];
    result.shift();
    
    const list = [];
    result.forEach((data) => list.push([data[0], data[3]]));
    list.forEach((item) => fields.add(item[1]));
    
    const fields = new Set();

    fields.forEach((data) => { (final[data] = 0); });
    const final = {};

    list.forEach((data) => { (final[data[1]] += 1); });

    console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);

    Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${list.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));

  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;

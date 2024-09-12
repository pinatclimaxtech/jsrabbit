const fs = require('fs');
try {
  const data = fs.readFileSync('./account.json', 'utf8');

  const user = JSON.parse(data)

  console.log(user.info.age)
  console.log(user.info.habbit)

} catch (err) {
  console.error(err);
}
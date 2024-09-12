const fs = require('fs');
try {
  const data = fs.readFileSync('./account.json', 'utf8');

  if (data.username === "john") {
    console.log("not pin")
  }

} catch (err) {
  console.error(err);
}
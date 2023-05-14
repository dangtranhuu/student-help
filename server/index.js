const express = require('express');
const app = express();
const port = 4200;

//router
app.get('/', (req, res) => {
	res.render('../src/app/login/login.component.html');
});

app.listen(port, () => {
	console.log(`Ung dung chay voi port: ${port}`);
})
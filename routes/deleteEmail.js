import { express } from 'express';
const router = express.Router();

const messages = {
	status: 1,
	data: [
		{
			message: 'Hi there, kindly be informed of the new process in dealing with issues'
		}
	]
};

router.delete('/:id', (req, res) => {

	const message = messages.find(c => c.id === parseInt(req.params.id));
	if(!message) {
		return res.status(404).send(`The message with the given id ${req.params.id}, not found`);
	}

	const index = messages.indexOf(message);
	messages.splice(index, 1);

	res.send(message);
});

module.exports = router;
import { express } from 'express';
const router = express.Router();

const messages = {
	status: 1,
	data: [
		{
			id: 1,
			createdOn: '09/03/2019',
			subject: 'Notification',
			message: 'Hi there, kindly be informed of the new process in dealing with issues',
			senderId: 1,
			receiverId: 1,
			parentMessageId: 1,
			status: 'unread',
		}, {
			id: 2,
			createdOn: '10/03/2019',
			subject: 'Inquiry',
			message: 'Hi there, kindly confirm if you will be available on the above date',
			senderId: 2,
			receiverId: 2,
			parentMessageId: 2,
			status: 'unread',
		}
	]
};

router.get('/:id', (req, res) => {
	const message = messages.find(data => data.id === parseInt(req.params.id));
	if(!message) {
		res.status(404).send(`The message with the given id ${req.params.id}, not found`);
	} else {
		res.send(message);
	}
});

module.exports = router;
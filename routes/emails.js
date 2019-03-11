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

router.get('/', (req, res) => {
	res.send(messages);
});

router.get('/unread', (req, res) => {
	res.send(messages);
});

router.get('/sent', (req, res) => {
	res.send(messages);
});

module.exports = router;
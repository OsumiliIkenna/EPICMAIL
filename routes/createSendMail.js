import { Joi } from 'joi';
import { express } from 'express';
const router = express.Router();

const messages = {
	status: 1,
	data: [{
		id: 1,
		createdOn: '09/03/2019',
		subject: 'Notification',
		message: 'Hi there, kindly be informed of the new process in dealing with issues',
		senderId: 1,
		receiverId: 1,
		parentMessageId: 1,
		status: 'unread'
	}]
};

router.post('/', (req, res) => {
	
	const { error } = validateMessage(req.body);

	if(error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	const message = {
		data: [{
		id: messages.length + 1,
		createdOn: req.body.createdOn,
		subject: req.body.subject,
		message: req.body.message,
		senderId: req.body.senderId,
		receiverId: req.body.receiverId,
		parentMessageId: req.body.parentMessageId,
		status: req.body.status,
	}]
	};

	messages.push(message);
	res.send(message); 
});

const validateMessage = (message) => {
	const schema = {
		createdOn: Joi.string().min(3).required(),
		subject: Joi.string().min(3).required(),
		message: Joi.string().min(3).required(),
		senderId: Joi.number().integer().min(1).required(),
		receiverId: Joi.number().integer().min(1).required(),
		parentMessageId: Joi.number().integer().min(1).required(),
		status: Joi.string().min(1).required()
	};

	return Joi.validate(message, schema);
};

module.exports = router;

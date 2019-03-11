const Joi = require('joi');
const express = require('express');
const router = express.Router();

const userSignUp = [
	{
		id: 1,
		name: "Jane Jack",
		username: "janejack",
		email: "jane@gmail.com",
		password: "janejane",
		confirmpassword: "janejane",
	},
	{
		id: 2,
		name: "Vincent Ajayi",
		username: "vincentajayi",
		email: "vincent@gmail.com",
		password: "ajayi1234",
		confirmpassword: "ajayi1234",
	}
];

router.post('/', (req, res) => {
	
	const { error } = validateMessage(req.body);

	if(error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	const user = {
		id: userSignUp.length + 1,
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		confirmpassword: req.body.confirmpassword
	};

	userSignUp.push(user);
	res.send(user); 
});

const validateMessage = (user) => {
	const schema = {
		name: Joi.string().min(5).max(50).required(),
		username: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
		confirmpassword: Joi.string().min(5).max(255).required()
	};

	return Joi.validate(user, schema);
}

module.exports = router;
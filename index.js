import { express } from 'express';
import { mocha } from 'mocha';
import { chai } from 'chai';
import { Joi } from 'joi';
import { config } from 'config';
import { helmet } from 'helmet';
import { morgan } from 'morgan';
import { createSendMail } from './routes/createSendMail';
import { emails } from './routes/emails';
import { myEmail } from './routes/myEmail';
import { deleteEmail } from './routes/deleteEmail';
import { signup } from './routes/signup';
// import { login } from './routes/login';

// Set up the express app
const app = express();

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static('public')); // lookout for css and html files here
app.set('View Engine', 'pug'); // use view engine(pug) after npm install, no need to require it after this line
app.set('views', './views'); // default folder for views. You should create views folder in root directory

app.use('/messages', createSendMail);
app.use('/messages', myEmail);
app.use('/messages', deleteEmail);
app.use('/auth/signup', signup);
app.use('/auth/login', login);
app.use('/', emails);

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));

if(app.get('env') === 'development') {
	app.use(morgan('tiny'));
	console.log('Morgan Enabled....');
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
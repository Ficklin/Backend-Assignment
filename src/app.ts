import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import petRoutes from './routes/petRoutes';
import { defaultPet} from './controllers/petController';
import { db } from './models';

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

// Routing middleware 
app.use('/pet', petRoutes);
app.use('/', defaultPet);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "It looks like you took the wrong rabbit hole."
    });
})

// Syncing our database
db.sync().then(() => {
    console.info("Connected to the database")
});

app.listen(3000);


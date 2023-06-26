import { Router } from 'express';
import { allPet} from '../controllers/petController';
const router = Router();

// GET /pet - renders a list of pets 
router.get('/', allPet);

// GET /pet/add - render the add pet page
//router.get('/add', addPetPage);

// POST /pet/add - add pet to array
//router.post('/add', addPet);

// GET /pet/edit/:petId - render select pet for the edit page
//router.get('/edit/:petId', editPetPage);

// POST /pet/edit/:petId - render the edit pet page
//router.post('/edit/:petId', editPet);

// POST /pet/delete/:petId - delete selected pet
//router.post('/delete/:petId', deletePet);

// GET /pet/:petId - render the pet requested
//router.get('/:petId', onePet);

export default router;
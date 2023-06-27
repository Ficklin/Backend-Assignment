import { RequestHandler } from "express";
import { Pet } from "../models/pet";

export const defaultPet: RequestHandler = (req, res, next) => {
    res.redirect('/pet');
}

//List all pets
export const allPet: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('all-Pet', { petList });
}

//Direct to form to create a pet
export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('add-pet');
}

//Add the pet and retrun to petList
export const addPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/pet');
}

//Displays selected Pet details
export const onePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let petItem: Pet | null = await Pet.findByPk(itemId);

    if (petItem) {
        res.render('pet-detail', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found.' });
    }
}

//Displays form to edit selected Pet
export const editPetPage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let petItem: Pet | null = await Pet.findOne({
        where: { petId: itemId }
    });

    if (petItem) {
        res.render('edit-pet', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found.' });
    }
}

//Post update of pet back to petList
export const editPet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let updatedItem: Pet = req.body;

    let [updated] = await Pet.update(updatedItem, {
        where: { petId: itemId }
    });

    if (updated === 1) {
        res.redirect('/pet');
    }
    else {
        res.render('error', { message: 'This pet is refusing your update service.' });
    }
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;

    let deleted = await Pet.destroy({
        where: { petId: itemId }
    });

    if (deleted) {
        res.redirect('/pet')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet.' });
    }
}
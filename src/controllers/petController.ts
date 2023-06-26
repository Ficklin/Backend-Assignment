import { RequestHandler } from "express";
import { Pet } from "../models/pet";

export const defaultPet: RequestHandler = (req, res, next) => {
    res.redirect('/pet');
}

export const allPet: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('all-Pet', { petList });
}
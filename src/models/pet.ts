import { Sequelize, DataTypes, InferAttributes, InferCreationAttributes, Model, } from "sequelize";


export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>>{
    declare petId: number;
    declare type: string;
    declare name: string;
    declare imgUrl: string;
    declare gender: string;
    declare age: string;
    declare breed: string;
    declare description: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function PetFactory(sequelize: Sequelize) {
    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('Birds','Cats', 'Dogs','Fishes','Horses','Rabbits', 'Reptiles'),
            allowNull: false,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        gender: {
            type: DataTypes.ENUM('Male', 'Female'),
            allowNull: false,
        },
        age: {
            type: DataTypes.ENUM('Newborn', 'Young', 'Adult', 'Senior', 'Unknown'),
            allowNull: false,   
        },
            breed: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
         createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'pet',
        sequelize
    });
}


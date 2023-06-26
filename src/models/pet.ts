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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Birds','Cats', 'Dogs','Fishes','Horses','Rabbits', 'Reptiles']],
              },
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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Male', 'Female']],
              },
            },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Newborn', 'Young', 'Adult', 'Senior', 'Unknown']],
              },
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

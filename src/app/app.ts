import { Creation } from './observables/01_creation.js';


export const startCreation = () => {
    const creationObj: Creation = new Creation();
    creationObj.startCreation();
}
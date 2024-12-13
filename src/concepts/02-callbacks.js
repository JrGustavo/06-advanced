/**
 *
 * @param {HTMLDivElement} element
 *
 */
import {heroes} from "../data/heroes.js";


export const callbacksComponent = (element) => {

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';



    findHero(id1, (error, hero) => {
        if (error) {
            element.innerHTML = error;
        } else {
            element.innerHTML = hero.name;
        }
    });

    findHero(id2, (error, hero2) => {
        element.innerHTML = `${element.innerHTML} / ${hero2.name}`;
    })
}

/*
*
* @param {String} id
* @param { (error: String |Null, hero: Object) => void } callback
 */


const findHero = (id1, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`No existe un héroe con el id ${id}`);
    } else {
        callback(null, hero);
    }

}

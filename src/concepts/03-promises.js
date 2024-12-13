/**
 * @param {HTMLDivElement} element
 *
 */
import {heroes} from "../data/heroes.js";

export const promiseComponent = (element) => {


    const renderHero =  (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `
    }

    const renderError  = (error) => {
        element.innerHTML = `
        <h3>${error}</h3>
        `
    }



    const id1 = '5d86371f9f80b591f499df32'
    const id2 = '5d86371f2343e37870b91ef1'

    let hero1

    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
        .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
        .catch(renderError)





//Forma #2
    findHero(id1)
        .then(hero => {
            hero1 = hero;
            return findHero(id2)
        }).then(hero2 => {
            renderTwoHeroes(hero1, hero2)
    })
        .catch(renderError)

//Forma #1
//
//    let hero1;
//
//    findHero(id1)
//        .then((hero) => {
//            hero1 = hero;
//
//            findHero(id2)
//                .then(hero2 => {
//                    renderTwoHeroes(hero1, hero2)
//                })
//                .catch(renderError)
//    })
 //       .catch(renderError)
//
//}




/**
 *
 * @param {String} id
 * @param {Promise}
 */

const findHero = (id) => {
    return new Promise((resolve, reject) => {
        console.log()

        const hero = heroes.find(hero => hero.id === id);
        element.innerHTML = hero.name;


    });

}
}

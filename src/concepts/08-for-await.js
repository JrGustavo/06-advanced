

import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async( element ) => {
    const id = '5d86371f9f80b591f499df32';
    const heroIds = heroes.map( hero => hero.id );

    const heroPromises = getHeroesAsync( heroIds );

    for await(const hero of heroPromises) {
        element.innerHTML += `${ hero.name } -- `;
    }

    (await getHeroAsync(id) ) ? element.innerHTML += 'Si existe este heroe' : element.innerHTML += 'No existe este heroe';

    console.log(heroIds)



    if(await getHeroAsync(id) ) {
        element.innerHTML = 'Si existe este heroe';
        return;

}

    element.innerHTML = 'No existe este heroe';

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {

    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}
}

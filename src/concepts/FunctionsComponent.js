




/**
 *
 * @param {HTMLDivElement} element
 */


export const generatorFunctionComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction()

    console.log(myGenerator.next().value)




}


function* myFirstGeneratorFunction(){

    yield 'Mi primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'
    yield 'Cuarto valor'

    return 'No hay más valores'
    yield 'Ya no se puede acceder a este valor'
}

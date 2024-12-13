




/**
 *
 * @param {HTMLDivElement} element
 */


export const generatorFunctionComponent = (element) => {

    //const myGenerator = myFirstGeneratorFunction()
    //console.log(myGenerator.next().value)

    const genId = idGenerator();

    console.log(genId.next())

    const button = document.createElement('button')
    button.innerText = 'Click me'
    element.append(button)

    const renderButton = () => {
        const {value} = genId.next()
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton)

}

function* idGenerator(year){

    let currentId = 0

    while(true){
        yield ++currentId
    }
}


function* myFirstGeneratorFunction(){

    yield 'Mi primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'
    yield 'Cuarto valor'

    return 'No hay más valores'
    yield 'Ya no se puede acceder a este valor'
}

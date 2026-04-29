function customReneder(reactElement, mainCointainer) {



    // const domElement=document.createElement(reactElement.type)
    //        domElement.innerHTML=reactElement.children
    //        domElement.setAttribute('href',reactElement.props.href)
    //        domElement.setAttribute('taret',reactElement.props.traget)

    //        mainCointainer.appendChild(domElement)                                 //main problem bar bar bar setAttribute karn par raha tha



    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainCointainer.appenChildren(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        traget: '_blank'
    },
    children: 'Click me to visit google'
}


const mainCointainer = document.querySelector('#root')

customReneder(reactElement, mainCointainer)
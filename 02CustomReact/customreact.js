const mainContainer = document.getElementById('root');


// Behind the scene elements render kase hote hain

const ReactElem = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to search'
}

// Injecting elements in root element (DOM)

function customRender(ReactElem, mainContainer){
    // Now we create dom element using reactElem to make a modular code

    const domElem = document.createElement(ReactElem.type);
    domElem.innerHTML = ReactElem.children;
    // domElem.setAttribute('href', ReactElem.props.href);
    // domElem.setAttribute('target', ReactElem.props.target);
    
    // Better code version
    
    for (const prop in ReactElem.props) {
        domElem.setAttribute(prop, ReactElem.props[prop]);
    }
    
    mainContainer.appendChild(domElem);
}

customRender(ReactElem, mainContainer);
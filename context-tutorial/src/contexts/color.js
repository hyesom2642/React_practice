import React, { createContext, useState } from 'react';

// const ColorContext = createContext( { color: 'black'} );
// const ColorContext = React.createContext({color: 'black'});
const ColorContext = React.createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

function ColorProvider(children){
    const [color, setColor] = useState('black');
    const [subcolor, setSubColor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubColor }
    }
    return(
        <div>
            <ColorContext.Provider value={value}>
                { children }
            </ColorContext.Provider>
        </div>
    )
}
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
export default ColorContext;
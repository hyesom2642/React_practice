import React from 'react';
import ColorContext from '../contexts/color';

function ColorBox(){
    return(
        <div>
            <ColorContext.Consumer>
                {
                    value => (
                        <div style={{
                            width: '100px',
                            height: '100px',
                            background: value.color
                        }}>
                        </div>
                    )
                }
            </ColorContext.Consumer>
        </div>
    )
}
export default ColorBox;
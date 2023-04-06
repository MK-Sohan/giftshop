import React from 'react';
import { useState } from 'react';


let tabContent,setTabContent;

const TabContainer = ({className,initialContent}) => {
    [tabContent,setTabContent] = useState(initialContent||'');

    return (
        <div className={className} style={{overflowY:'auto'}}>
            {tabContent}
        </div>
    );
};



const TabButton = ({className,children,content,checked})=> {
    const [checkState,setCheckState] = useState(checked || false);

    return(
        <label
        className={className}
        onClick={()=>{setCheckState(true);setTabContent(content)}}
        style={{
            display:'inline-block',
            position:'relative',
            marginBottom:'0.3rem',
            cursor:'pointer',
            userSelect:'none',
        }}>
            {children}
            <input
            type="radio"
            name="tab-btn-radio"
            checked={checkState}
            readOnly
            style={{
                position:'absolute',
                height:'auto',
                minHeight:0,
                width:'auto',
                minWidth:0,
                top:0,
                bottom:0,
                left:0,
                right:0,
                zIndex:'-5',
                appearance:'none',
            }}
            className={`checked:smallTitle`} 
            />
        </label>
    );
}

export { TabButton };
export default TabContainer;
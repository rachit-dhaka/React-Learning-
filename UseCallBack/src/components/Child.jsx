import React from 'react';

const Child = React.memo((props) => {
    console.log("Child Component getting rendered");
    
    return (
        <div>
            <button onClick={props.HandleClick}>
                {props.buttonName}
               
            </button>
        </div>
    );
});

export default Child;


// React Memo->wrap -> Component -> Component Re-render 
// nahi hoga . re render tabhi hoga jab component ke prop ke value change hogi 


// if you are sending a fucntion , re render will happen 
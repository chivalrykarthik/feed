import React from 'react';


const Loader:React.FC = ()=>{
    return (
        <>
            <div className="loaderOverlay">
                <div className="loaderMsg">Loading ...</div>
            </div>
        </>
    );
}

export default Loader;
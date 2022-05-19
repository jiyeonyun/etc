import React from 'react';

const Info = (props) =>{
    
    return(
        <div className={styles.infoWrap}>
            <h3 className={styles.infoTitle}>인적사항</h3>
            <div className={styels.infoInnerWrap}>
                <img src="" alt="" className={styles.infoImage}/>
            </div>
        </div>
    );
};

export default Info;
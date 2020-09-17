import React from 'react';

function Hello({color, name, isSpecial}){
    return( 
    <div style={{color}}>
        { isSpecial && <b>*</b>}
        안녕하세요! {name} 
    </div>);
}

Hello.defaultProps = {
    name: "이름 없음"
}

export default Hello;
//Hello라는 컴포넌트를 내보내겠다. -> 다른 컴포넌트에서 불러오기 가능

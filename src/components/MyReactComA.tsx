import { useState } from "react";

const ReactCom = (props) => {
    const [state, setState] = useState(false);
    const handleClickRea = () => {
        // console.log("触发点击");
        setState(!state);
    };
    // console.log(`我是${props.title}`);

    return (
        <div>
            <h1>我是{props.title}</h1>
            <button onClick={handleClickRea}>MyReactCom</button>
            {state && 1}
            <div>插槽: {props.children}</div>
        </div>
    );
};

export default ReactCom;

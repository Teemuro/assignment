import React from "react";
let imgs = ['https://cdn.pixabay.com/photo/2020/03/20/22/29/amd-4952189_1280.jpg']; 
/*getting image from online so there is no need for local images */
const Header = ({title}) => {
    return (
        <div>
            <img src ={imgs[0]}/>
            <h1>{title}</h1>
        </div>
    )
};
export default Header;
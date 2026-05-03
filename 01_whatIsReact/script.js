


/* const React={
createElement:function (tag,attribute,children){
    const element=document.createElement(tag);
    element.textContent=children;
    for(let key in attribute){
        if(key==="style"){
            Object.assign(element.style,attribute.style);
        }else if(key==="classList"){
            element.classList.add(...attribute.classList);
        }else{
            element[key]=attribute[key];
        }
    }
    return element;
}
}
const ReactDOM={
     render:function(child,parent){
            parent.append(child);
            }
} */



/* const React={
createElement:function (tag,props,children){
return {
    tag:tag,
    props:{
        ...props,
        children:children
    }
}
}
}
const ReactDOM={
render:function (children,root){
    root.innerHTML=``;
    const element = document.createElement(children.tag);
    const {props}=children;
    for(let key in props ){
        if(key==="style"){
            Object.assign(element.style,props.style);
        }else if(key==="children"){
            element.textContent=props.children;
        }else{
            element[key]=props[key];
        }
    }
    root.append(element);
}
} */

const root=document.getElementById("root");

const element=React.createElement("h1",{id:"first",className:"bg-pink-500 text-2xl text-white rounded p-2",style:{margin:"10px",textAlign:"center"}},"Hello World");
const element1=React.createElement("h2",{id:"second",className:"m-4 bg-green-600 text-3xl text-white text-center rounded"},"Hiiii")
const div=React.createElement("div",null,element,element1);

const render=ReactDOM.createRoot(root);
render.render(div);

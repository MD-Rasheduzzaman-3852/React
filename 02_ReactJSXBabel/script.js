/* const element=React.createElement("div",null,React.createElement("h1",{id:"tittle",className:"bg-pink-400 p-3 m-4 rounded text-center text-4xl"},"Hello World!"),React.createElement("h2",{className:"bg-red-500 p-3 m-4 rounded text-center text-3xl"},"I am Rahat"));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element); */

/* const element= <div>
    <h1 id="tittle" className="bg-amber-800 text-4xl text-center p-3 m-3 rounded">Hello World</h1>
    <h2 className="bg-pink-400 text-4xl p-2 m-1.5 rounded">I am learning Web-Development</h2>
</div>

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element); */




/* const body=ReactDOM.createRoot(document.querySelector("body"));

function App(){
    return(
        <h1 className="bg-pink-400 text-center p-3 m-4 text-3xl rounded">Hello World!!</h1>
    );
}

body.render(<App/>);

function Values(name){
    return (
        <h1 className="bg-pink-400 text-center p-3 m-4 text-3xl rounded">My name is {name}</h1>
    )
}
const names=Values("Rahat");
body.render(names);

let age=12;

function IsAdult(age){
    return(
     <h1>{age>=18?"Adult":"Minor"}</h1>
    );
}

let a=IsAdult(age);
body.render(a); //Minor

let courses=["HTML","CSS","Tailwind","Javascript","React"];
function IsPurses(courses){
    return (
     <ol>{courses.map(value=><li>{value}</li>)}</ol> /*HTML
                                                       CSS
                                                      Tailwind
                                                      Javascript
                                                      React */
/*     );
}

let parses= IsPurses(courses);
body.render(parses); */ 

//const root=ReactDOM.createRoot(document.querySelector("body"));

/* function App(props){
    return(
        <h1 style={props.style}>Hello {props.name}.{props.age<18?"You are not eligible for vote":"You are eligible for vote"} </h1>
    );
}
let a={background:"pink"
      ,
      textAlign:"center"
}
const value=<App name="Rahat" age={23} style={a}></App>

root.render(value); */

/* function Header({name}){
    return(
        <h1>Hello {name} </h1>
    );
}
function Body({age}){
    return(
        <h2>{age>=18?"You are eligible for vote":"You are not eligible"}</h2>
    )
}
function Footer({name}){
    return(
        <h3>{name}, thanks for visiting us!!</h3>
    )
}
function Main(){
    return(
        <>
        <Header name={"MD. Rahat"} age={23}></Header>
        <Body name={"MD. Rahat"} age={23}></Body>
        <Footer name={"MD. Rahat"} age={23}></Footer>
        </>
    )
}

const root=ReactDOM.createRoot(document.querySelector("body"));
root.render(<Main></Main>) */

console.log("Hello World!!");
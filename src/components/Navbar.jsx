import logo from "../assets/logo.svg"
export default function Navbar() {
    return(
        <nav className="nav">
            <img className="nav--img" src={logo} alt="laugh logo" />
            <h2 className="nav--title">Meme Generator</h2>
            <h4 className="nav--project"> React Course - Project 3 </h4>
        </nav>
    )
}
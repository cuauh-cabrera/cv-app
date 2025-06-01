import '../scss/layout/_header.scss';

const Header = () => {
    return (
        <header id="header" className="header">
            <img src='/public/odin_logo.png'></img>
            <h1>Odin's Resume Builder</h1>
            <nav id="navbar" className="header__nav">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Support</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
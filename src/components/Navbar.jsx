import profileImage from "../assets/profile.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <img
          src={profileImage}
          alt="Hussein Gharib"
          className="logo-img"
        />

        <span className="logo-text">
          Hussein Gharib
        </span>
      </a>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
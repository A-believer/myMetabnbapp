import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="navbar" className="flex w-full h-12 m-auto ">
      <div id="logo" className="flex m-1 ">
        <img src="./houselogo.png" alt="houselogo" className="h-10 w-10 " />
        <img src="./Metabnb.png" alt="metabnb" className="h-9 w-41 pt-1" />
      </div>

      <div id="navlivks">
        <Link to="/">Home</Link>
        <Link to="/places">Place to stay</Link>
        <a href="/nfts">NFTs</a>
        <a href="/community">Community</a>
      </div>

      <div>
        <button></button>
      </div>
    </nav>
  );
}

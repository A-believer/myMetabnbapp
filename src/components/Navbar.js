import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="flex flex-row w-full h-12 mx-5 text-xl font-normal py-10"
    >
      <div id="logo" className="flex mx-12">
        <img src="./Metabnb.png" alt="metabnb" className="h-12 w-58 pt-2" />
      </div>

      <div id="navlivks" className=" mx-auto leading-5 pt-5">
        <Link to="/" className="ml-10">
          Home
        </Link>
        <Link to="/places" className="ml-10">
          Place to stay
        </Link>
        <Link href="/nfts" className="ml-10">
          NFTs
        </Link>
        <Link href="/community" className="mx-10">
          Community
        </Link>
      </div>

      <div id="connectbtn" className="mx-auto px-16 ">
        <button className="bg-pink-800 h-12 px-8  text-white text-center rounded-xl hover:bg-pink-900">
          Connect wallet
        </button>
      </div>
    </nav>
  );
}

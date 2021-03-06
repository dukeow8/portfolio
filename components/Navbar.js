import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="pic">
        <Image src="/pic.JPG" alt="site pic" width={128} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
      <Link href="/project/"><a>My project list</a></Link>
    </nav>
  );
}
 
export default Navbar;
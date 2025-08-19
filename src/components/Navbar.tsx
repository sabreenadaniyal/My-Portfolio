import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <div>
        <header className="text-white mx-14 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

      <Image 
      className="-ml-[3%]"
      src="/images/S.gif" 
      alt="sabreena daniyal logo"
      width={60}
      height={50} 
      />
      <h1 className="text-4xl font-bold">
      <span className="text-white">Portfo</span>
      <span className="text-pink-500">lio</span>
      </h1>

    <nav 
    className="md:ml-auto flex flex-wrap items-center text-xs justify-center">
      <Link href="/" className="mr-5 text-lg hover:text-purple-700">Home</Link>
      <Link href="/about" className="mr-5 text-lg hover:text-purple-700">About Us</Link>
      <Link href="/projects" className="mr-5 text-lg hover:text-purple-700">Projects</Link>
      <Link href="/skills" className="mr-5 text-lg hover:text-purple-700">Skills</Link>
      <Link href="/contact" className="mr-5 text-lg hover:text-purple-700">Contact Me</Link>
    </nav>
  </div>
</header> <br />
</div>
    )
}
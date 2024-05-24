import Link from "next/link";
const Navbar = () => {
    return ( 
        <>
            <div>
                <ul>
                    <li>
                    <Link href="/">home</Link>
                    </li>
                    <li>
                    <Link href="/about">about</Link>
                    </li>
                    <li>
                    <Link href="/contacts">contacts</Link>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default Navbar;
import Link from "next/link";

const Navigation = () => {
    return(
        <nav className="navigation">
            <Link href="/" className="nav-link">Main</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/news" className="nav-link">News</Link>
            <Link href="/contacts" className="nav-link">Contacts</Link>
            <Link href="/users" className="nav-link">Users</Link>
            <Link href="/cars" className="nav-link">Cars</Link>
            <Link href="/test-get-response" className="nav-link">Test get</Link>
            <Link href="/post-example" className="nav-link">Test post</Link>
        </nav>
    )
}

export default Navigation;
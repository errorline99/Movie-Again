import Link from 'next/link';
import './Gone.css';
export const runtime = 'edge';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="yep">
      <h1 style={{fontFamily: "fantasy", fontWeight: "bold", fontSize: "300px"}}> <Link href="/">New</Link></h1>
      <h1 style={{fontFamily: "fantasy", fontWeight: "bold", fontSize: "300px"}}> <Link href="/new">home</Link></h1>
      <h1 style={{fontFamily: "fantasy", fontWeight: "bold", fontSize: "300px"}}> <Link href="/search">search</Link></h1>

      <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/bog">Rated</Link></li>
              <li><Link href="/search">Browse</Link></li>
            </div>  
          <div className="logo">
            <h1>Enjoy Movies</h1>
          </div>
          <div className="menu-items">
              <li><a href="/">Home</a></li>
              <li><a href="/search">Browse</a></li>
          </div>
        </div>
      </div>
    </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

import Link from "next/link";

export function Header(){
  return (
    <header className="flex px-3 py-2 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
        <div>NextJS</div>
        <nav>
          <ul className="flex items-center justify-center gap-2 mt-2">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/posts'}>Posts</Link>
            </li>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
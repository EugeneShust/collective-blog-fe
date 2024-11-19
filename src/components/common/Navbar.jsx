import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav>
            <div className="navbar bg-[#374151]">
                <div className="flex-1">
                    <li className="btn btn-ghost border-b-2 border-[#CACED5] text-xl">
                        <Link to="/" className="text-xl">
                            /Collective Blog/
                        </Link>
                    </li>
                </div>
                <div className="flex-none gap-2"></div>
            </div>
        </nav>
    );
}

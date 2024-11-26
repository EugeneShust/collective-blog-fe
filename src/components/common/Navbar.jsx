import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav>
            <div className="navbar bg-[#374151]">
                <div className="flex-1">
                    <Link to="/">
                        <li className="btn btn-ghost text-xl">
                            the awesome blogpost page
                        </li>
                    </Link>
                </div>
                <div className="flex-none gap-4">
                    <Link to="/create-post">
                        <div className="btn btn-ghost text-xl border-2 border-[#caced5]">
                            New blogpost
                        </div>
                    </Link>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Profile"
                                    src="../src/assets/images/avatar.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">Profile</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

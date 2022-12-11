import React from 'react';
import Link from "next/link";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utils/firebase";
import Image from "next/image";

const Nav: React.FC = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <nav className={"flex justify-between items-center py-10"}>
            <Link href={"/"}>
                <button className={"text-lg font-medium"}>Creative Minds</button>
            </Link>
            <ul className={"flex items-center gap-10"}>
                {!user && (
                    <Link href={"/auth/login"} className={"py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"}>
                        Join Now
                    </Link>
                )}
                {user && (
                    <div className={"flex items-centre gap-6"}>
                        <Link href={"/post"} className={"justify-center"}>
                            <button className={"font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm"}>Post</button>
                        </Link>
                        <Link href={"/dashboard"}>
                            <Image src={user.photoURL ? user.photoURL : ""} alt={"profile"} width={96} height={96}  className={"w-12 rounded-full cursor-pointer"}/>
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default Nav;

import React from 'react';
import Nav from "./Nav";

interface Props{
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className={"mx-6 md:max-w-2xl md:mx-auto font-poppins"}>
            <Nav/>
            <main>{children}</main>
        </div>
    );
};

export default Layout;

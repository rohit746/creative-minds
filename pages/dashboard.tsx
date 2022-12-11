import React, {useEffect} from 'react';
import {auth} from "../utils/firebase";
import {NextRouter, useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";

const Dashboard: React.FC = () => {
    const route: NextRouter = useRouter();
    const [user, loading] = useAuthState(auth);

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('/auth/login');
    }

    useEffect(() => {
        getData().then();
    }, [user, loading]);
    

    return (
        <div>
            <h1>Your posts</h1>
            <div>
                posts
            </div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    );
};

export default Dashboard;

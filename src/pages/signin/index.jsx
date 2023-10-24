import { useEffect, useMemo } from "react";
import { GoogleIcon, OpalIcon } from "../../assets/icons";
import signIn from "../../data/firebase/auth";
import "./index.sass";
import session from "../../data/session";

export default function SignIn () {
    const { set } = session(s => s);

    return (
        <div className="SignIn display">
            <div className="signin-top">
                <OpalIcon className="signin-opal-icon" />
                <h1>OPAL</h1>
            </div>
            <div className="signin-box">
                <OpalIcon className="signin-box-opal-icon"/>
                <h3>Sign In</h3>
                <hr />
                <button className="signin-with-google" onClick={() => signIn(x => set({user: x, signedin: true}))}>Sign In With <span><GoogleIcon /><strong>Google</strong></span></button>
            </div>
            <div className="signin-footer">Opal, Your Ultimate Thoughtspace</div>
        </div>
    )
}
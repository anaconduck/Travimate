import React, { useState } from "react";
import FormLogin from "../../components/layout-clients/part/form-login";
import BackgroundLogin from "../../components/layout-clients/part/background-login";

interface InputState {
    email: string;
    password: string;
}

const LoginClient = () => {
    const [input, setInput] = useState<InputState>({
        email: '',
        password: '',
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let { email, password } = input;
        console.log(input);
    };
    
    return (
        <section className="login lg:flex bg-sky-100">
            <BackgroundLogin />
            <FormLogin input={input} handleInput={handleInput} handleLogin={handleLogin} />
        </section>
    );
}

export default LoginClient;
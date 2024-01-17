import React, { useState } from "react";
import FormCreateAcoount from "../../components/layout-clients/part/form-create-account";
import FormAdditionalInformation from "../../components/layout-clients/part/form-additional-information";
import BackgroundRegister from "../../components/layout-clients/part/background-register";

interface InputState {
    username: string;
    email: string;
    password: string;
    dob: string;
    phone: string;
    greeting: string;
}

const RegisterClient = () => {
    const [input, setInput] = useState<InputState>({
        username: '',
        email: '',
        password: '',
        dob: '',
        phone: '',
        greeting: '',
    });

    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let { username, email, password, dob, phone, greeting } = input;
        console.log(input);
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <section className="register lg:flex bg-sky-100">
            <BackgroundRegister />
            {currentStep === 1 && (
                <FormCreateAcoount input={input} nextStep={nextStep} handleInput={handleInput} />
            )}
            {currentStep === 2 && (
                <FormAdditionalInformation input={input} handleInput={handleInput} handleRegister={handleRegister} />
            )}
        </section>
    );
}

export default RegisterClient;
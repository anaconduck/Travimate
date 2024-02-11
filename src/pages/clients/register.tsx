import React, { useMemo, useState } from "react";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

import FormCreateAcoount from "../../components/layout-clients/part/form-create-account";
import FormAdditionalInformation from "../../components/layout-clients/part/form-additional-information";
import BackgroundRegister from "../../components/layout-clients/part/background-register";

export interface InputState {
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

    const LoginSchema = Yup.object().shape({
        name: Yup.string().required('Title is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = useMemo(
        () => ({
            name: '',
            password: ''
        }),
    []
    );

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    
    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;
    
    const values = watch();

    console.log(input)

    const onSubmit = handleSubmit(async (data) => {
        try {
            
        } catch (error) {
            
        }
    })

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
            <div className="w-[55%]">
                {currentStep === 1 && (
                    <Form {...methods}>
                        <FormCreateAcoount input={input} nextStep={nextStep} handleInput={handleInput} />
                    </Form>
                )}
                {currentStep === 2 && (
                    <FormAdditionalInformation input={input} handleInput={handleInput} handleRegister={handleRegister} />
                )}
            </div>
        </section>
    );
}

export default RegisterClient;
import { ControlledInput } from '@/ui';
import React from 'react';
import { useForm } from 'react-hook-form';

export const LoginPage: React.FC = () => {
    const { control, handleSubmit } = useForm();
    return (
        <div className="w-full h-screen">
            <form className="max-w-[500px]">
                <ControlledInput
                    id="email"
                    label="Email"
                    controllerProps={{ control, name: 'email' }}
                />
                <ControlledInput
                    id="password"
                    label="Password"
                    type="password"
                    controllerProps={{ control, name: 'password' }}
                />
            </form>
            <h1>auth</h1>
        </div>
    );
};

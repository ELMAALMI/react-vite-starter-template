import { Fragment } from 'react';
import { ControlledInput, Text } from './ui';
import { useForm } from 'react-hook-form';

const App: React.FC = () => {
    const { control, handleSubmit } = useForm();
    return (
        <Fragment>
            <ControlledInput
                controllerProps={{
                    control,
                    name: 'email'
                }}
                placeholder="hello world"
                label="Email"
            />
        </Fragment>
    );
};

export default App;

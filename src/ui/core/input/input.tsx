import React, { Fragment, InputHTMLAttributes } from 'react';
import { Text } from '../text';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    error?: string;
    id: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, error, id, ...inputProps } = props;
    const [isFocussed, setIsFocussed] = React.useState(false);
    const onBlur = React.useCallback(() => setIsFocussed(false), []);
    const onFocus = React.useCallback(() => setIsFocussed(true), []);

    return (
        <Fragment>
            <label
                htmlFor={id}
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <input
                    onBlur={onBlur}
                    onFocus={onFocus}
                    {...inputProps}
                    ref={ref}
                    id={id}
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    {label}
                </span>
            </label>
            {error && <Text variant="error">{error}</Text>}
        </Fragment>
    );
});

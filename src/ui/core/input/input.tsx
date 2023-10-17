import React, { InputHTMLAttributes } from 'react';
import { Text } from '../text';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, error, ...inputProps } = props;
    const [isFocussed, setIsFocussed] = React.useState(false);
    const onBlur = React.useCallback(() => setIsFocussed(false), []);
    const onFocus = React.useCallback(() => setIsFocussed(true), []);

    const borderColor = error ? 'border-danger-600' : 'border-neutral-400';

    const bgColor = error ? 'bg-danger-50' : 'bg-neutral-100';
    const textDirection = 'text-left';
    return (
        <div className="mb-4 flex flex-col">
            {label && (
                <Text variant="md" className={error ? 'text-danger-600 ' : 'text-black'}>
                    {label}
                </Text>
            )}
            <input
                ref={ref}
                className={`mt-0 border-[1px] py-3 px-2  ${borderColor} rounded-md ${bgColor} text-[16px] ${textDirection} dark:text-charcoal-100`}
                onBlur={onBlur}
                onFocus={onFocus}
                {...inputProps}
            />
            {error && <Text variant="error">{error}</Text>}
        </div>
    );
});

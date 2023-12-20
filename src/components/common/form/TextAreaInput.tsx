import { useField } from "formik";
import React, { type InputHTMLAttributes } from "react";
import { type InputProps } from "./types";

type TextAreaInputProps = InputProps & InputHTMLAttributes<HTMLTextAreaElement>;

// A custom textarea component that is compatible with Formik
// A textarea is a multi-line text input
const TextAreaInput: React.FC<TextAreaInputProps> = ({
    label,
    description,
    required,
    ...props
}) => {
    // See https://formik.org/docs/tutorial#getfieldprops
    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col">
            <label
                htmlFor={props.id ?? props.name}
                className="text-xl font-semibold"
            >
                <span className="mr-1">{label}</span>
                <span
                    className={
                        required ? "text-neutral-focus after:content-['*']" : ""
                    }
                />
            </label>
            {description && (
                <p className="text-neutral-content">{description}</p>
            )}
            <textarea
                className="text-input mt-2 h-48 border-none"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="error text-error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default TextAreaInput;

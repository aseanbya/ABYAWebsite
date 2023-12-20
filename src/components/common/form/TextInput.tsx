import { type InputHTMLAttributes } from "react";
import { type InputProps } from "./types";
import { useField } from "formik";

type TextInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

// A custom text input component that is compatible with Formik
// This allows us to create reusable styles for all text inputs
const TextInput: React.FC<TextInputProps> = ({
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
            <input
                className="text-input mt-2 border-none"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="error text-error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default TextInput;

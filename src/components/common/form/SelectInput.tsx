import { useField } from "formik";
import { type SelectHTMLAttributes } from "react";
import { type InputProps } from "./types";

type SelectInputProps = InputProps & SelectHTMLAttributes<HTMLSelectElement>;

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    required,
    ...props
}) => {
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
            <select className="mt-2 border-none" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error text-error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default SelectInput;

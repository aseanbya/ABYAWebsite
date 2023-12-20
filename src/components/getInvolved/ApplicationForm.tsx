import { Form, Formik, type FormikHelpers } from "formik";
import React from "react";
import { type InferType, object, string } from "yup";
import Heading2 from "../common/textStyles/Heading2";
import Button from "../common/buttons/BlueFilledButton";
import TextInput from "../common/form/TextInput";
import TextAreaInput from "../common/form/TextAreaInput";
import { isValid, parse } from "date-fns";
import SelectInput from "../common/form/SelectInput";

const isValidDate = (value: string | undefined) => {
    if (!value) {
        return false;
    }
    const parsedDate = parse(value, "dd/MM/yyyy", new Date());
    return isValid(parsedDate);
};

// Yup schema for Form validation
const applcationFormSchema = object({
    fullName: string().required("Required"),
    firstName: string().required("Required"),
    gender: string()
        .oneOf(
            ["male", "female", "nonBinary", "chooseNotToDisclose"],
            "Invalid option"
        )
        .required("Required"),
    dateOfBirth: string()
        .test(
            "is-date",
            "Invalid date format: please use DD/MM/YYYY",
            isValidDate
        )
        .required("Required"),
    nationality: string().required("Required"),
    countryOfResidence: string().required("Required"),
    phoneNumber: string().required("Required"), // Change to phone number type
    email: string().email("Invalid email address").required("Required"), // Change to email type
    telegramHandle: string()
        .test(
            "is-@-handle",
            "Telegram handle must start with @",
            (value) => value?.startsWith("@") ?? value === "-"
        )
        .required("Required"), // Handle @ sign
    tertiaryInstitution: string().required("Required"), // Change to enum
    linkedInProfile: string().url().nullable(),
    currentInsitution: string().required("Required"),
    whatYouHopeToGain: string().required("Required"),
});

type ApplicationFormValues = InferType<typeof applcationFormSchema>;

// Application form for Joining ABYA
export const ApplicationForm: React.FC = () => {
    // TODO: use custom button for submit button
    return (
        <div className="flex flex-col items-center bg-neutral-200 py-12">
            <Heading2 className="mb-8 lg:mb-16">Application Form</Heading2>
            <Formik
                initialValues={{
                    fullName: "",
                    firstName: "",
                    gender: "chooseNotToDisclose",
                    dateOfBirth: "",
                    nationality: "",
                    countryOfResidence: "",
                    phoneNumber: "", // Change to phone number type
                    email: "", // Change to email type
                    telegramHandle: "", // Handle @ sign
                    tertiaryInstitution: "", // Change to enum
                    linkedInProfile: "",
                    currentInsitution: "",
                    whatYouHopeToGain: "",
                }}
                onSubmit={(
                    values,
                    { setSubmitting }: FormikHelpers<ApplicationFormValues>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validationSchema={applcationFormSchema}
            >
                <Form className="flex max-w-xl flex-col gap-6">
                    <TextInput
                        label="Full Name"
                        name="fullName"
                        type="text"
                        placeholder="Jane Loo"
                        description="As on official documents"
                        required={true}
                    />
                    <TextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                        description="Given name"
                        required={true}
                    />
                    <SelectInput label="Gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonBinary">Non-binary</option>
                        <option value="chooseNotToDisclose">
                            Choose not to disclose
                        </option>
                    </SelectInput>
                    <TextInput
                        label="Date of Birth"
                        name="dateOfBirth"
                        type="text"
                        placeholder="DD/MM/YYYY"
                        required={true}
                    />
                    <TextInput
                        label="Nationality"
                        name="nationality"
                        type="text"
                        placeholder="Singapore"
                        required={true}
                    />
                    <TextInput
                        label="Country of Residence"
                        name="countryOfResidence"
                        type="text"
                        placeholder="Indonesia"
                        required={true}
                    />
                    <TextInput
                        label="Phone Number"
                        name="phoneNumber"
                        type="text"
                        placeholder="88891342"
                        required={true}
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        required={true}
                    />
                    <TextInput
                        label="Telegram Handle"
                        name="telegramHandle"
                        type="text"
                        placeholder="@janeexample"
                        description="ABYA uses social messaging platform Telegram: Fill in your handle here with an '@', else fill '-"
                        required={true}
                    />
                    <TextInput
                        label="Tertiary Education: Faculty"
                        name="tertiaryInstitution"
                        type="text"
                        placeholder="National University of Singapore"
                        required={true}
                    />
                    <TextInput
                        label="LinkedIn Profile"
                        name="linkedInProfile"
                        type="text"
                        placeholder="https://www.linkedin.com/in/janeexample"
                    />
                    <TextInput
                        label="Current Company / Educational Institution"
                        name="currentInsitution"
                        type="text"
                        placeholder="NUS"
                        required={true}
                    />
                    <TextAreaInput
                        label="What do you hope to gain from being an ABYA member?"
                        name="whatYouHopeToGain"
                        type="text"
                        required={true}
                    />
                    <Button
                        type="submit"
                        className="mt-4 self-stretch md:self-center"
                    >
                        Apply
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

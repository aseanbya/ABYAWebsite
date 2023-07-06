// import Logo from "@/components/common/Logo";
import { useRouter } from "next/router";
import React from "react";

const config = {
    logo: (
        <span className="flex items-center">
            {/* <Logo className="mr-2 h-4 h-5 w-4 fill-brand sm:w-5 md:h-6 md:w-6" /> */}
            <span className="flex items-baseline">
                <span className="font-poppins text-lg font-bold sm:text-xl md:text-2xl">ABYA</span>
                <span className="ml-1 font-poppins text-sm font-bold text-neutral-500 sm:text-base md:text-lg">
                    docs
                </span>
            </span>
        </span>
    ),
    editLink: {
        text: null,
    },
    feedback: {
        content: null,
    },
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – ABYA Docs",
            };
        }
    },
    head: (
        <>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.svg" />
        </>
    ),
    search: {
        component: null,
    },
    project: {
        link: "https://github.com/ASEANBusinessYouthAssociation/ABYA",
    },
};

export default config;

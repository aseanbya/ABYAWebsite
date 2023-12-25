import React from "react";
import Image from "next/image"
import { ClockIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export type BlogContent = {
    title: string;
    date: Date;
    image?: string;
    imageAlt?: string;
    href?: string;
};

export const BlogCard: React.FC<BlogContent> = ({ title, image, imageAlt, date, href }) => {
    const formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
    return (
        <Link href={`/blog/${encodeURIComponent(href ?? "")}`}>
            <div className="card w-full border border-brandBlue-30 bg-base-100">
                <Image className="aspect-[2/1] w-full bg-gray-300 lg:aspect-[4/3]" src={image ?? ""} width={1600} height={1600} alt={imageAlt ?? ""} />
                <div className="card-body gap-4 p-4 pb-8 lg:pb-16">
                    <h2 className="card-title text-3xl font-semibold">{title}</h2>
                    <div className="flex items-center gap-1 text-gray-300">
                        <ClockIcon className="h-4 w-4" />
                        <p className="text-lg">{formattedDate}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

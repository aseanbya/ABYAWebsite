import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/common/textStyles/Heading2";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";

import { api } from "~/utils/api";
import { BlogCard } from "~/components/blog/BlogCard";
import Heading3 from "~/components/common/textStyles/Heading3";
import Link from "next/link";

export default function blog() {
    const { data } = api.blog.getAllTypes.useQuery();

    const PDF = dynamic(() => import("~/components/blog/AnnualImpactReport2023"), {
        ssr: false,
    });

    useEffect(() => {
        // Open the modal on page load
        const modal = document.getElementById("subscribeModal");
        if (modal) {
            const modal = document.getElementById("subscribeModal") as HTMLDialogElement;
            modal.showModal();
        }
    }, []);

    return (
        <PageLayout>
            <PageTitleSection title={"Blog"}>
                <p>Take a read to find out more about the latest happenings within the ASEAN Business Youth Association! – We've got opinion pieces, event roundups, as well as current affairs news within the ASEAN region.</p>
            </PageTitleSection>

            <dialog id="subscribeModal" className="modal">
                <div className="modal-box">
                    <Heading3>Sign up for our newsletter!</Heading3>
                    <p className="py-4">Stay in the loop with all the latest updates! Sign up for our newsletter today and be the first to know about exclusive offers, exciting news, and more. Don't miss out – subscribe now!</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex w-full justify-between">
                            <button className="btn">
                                Another Time
                            </button>
                            <button className="btn">
                                <Link href={"https://airtable.com/appt5opZxZjWqQd1s/shrj1flTgvURknuKr"}>
                                    Subscribe
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

            <ContentContainer>
                <div className="flex flex-col gap-8">
                    <Heading2 className="uppercase">Annual Impact Report</Heading2>

                    <PDF />

                    <Heading2 className="uppercase">Blogs</Heading2>
                    <div className="mb-8 flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                            {data?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} image={blog.image ?? ""} href={blog.title} imageAlt={blog.title} summary={blog.summary ?? ""} />))}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
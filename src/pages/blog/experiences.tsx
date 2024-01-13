import { api } from "~/utils/api";
import { BlogCard } from "~/components/blog/BlogCard";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import Heading1 from "~/components/common/textStyles/Heading1";
import Image from "next/image"

import test from "src/assets/annualImpactReport.png"

export default function experiences() {
    const { data: experiencesData } = api.blog.getAll.useQuery({ tag: "EXPERIENCES" });
    return (
        <PageLayout>
            <ContentContainer>
                <div className="flex sm:flex-row flex-col gap-10 pb-12">
                    <div className="flex flex-col justify-center w-full sm:w-[45%]">
                        <Heading1 className="capitalize">Experiences</Heading1>
                        <p>Description</p>
                    </div>
                    <div className="flex h-96">
                        <Image src={test} alt={""} className=" object-cover" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
                    {experiencesData?.map((blog) => (<BlogCard key={blog.id} date={blog.createdAt} title={blog.title} image={blog.image ?? ""} imageAlt={blog.title} />))}
                </div>
            </ContentContainer>
        </PageLayout>
    );
}

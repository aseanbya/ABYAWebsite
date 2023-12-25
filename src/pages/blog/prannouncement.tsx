import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import Heading1 from "~/components/common/textStyles/Heading1";
import Image from "next/image"

import test from "src/assets/annualImpactReport.png"

export default function experiences() {
    return (
        <PageLayout>
            <ContentContainer>
                <div className="flex sm:flex-row flex-col gap-10 pb-12">
                    <div className="flex flex-col justify-center w-full sm:w-[45%]">
                        <Heading1 className="capitalize">
                            PR Announcement
                        </Heading1>
                    </div>
                    <div className="flex h-96">
                        <Image src={test} alt={""} className=" object-cover" />
                    </div>
                </div>
                <p>
                    Reprehenderit aute aliquip excepteur veniam id aliqua voluptate. Labore id qui in eu consequat sit cupidatat irure nulla culpa aute. Et ut dolore minim occaecat nostrud fugiat qui qui reprehenderit. Nostrud velit velit ex sit fugiat reprehenderit aliqua ipsum. Laborum veniam laborum ea nostrud voluptate exercitation esse. Nulla magna nisi laboris laborum ipsum do. Cupidatat magna ipsum ut eiusmod veniam sunt tempor nulla ipsum incididunt ullamco Lorem commodo id minim. Reprehenderit aute aliquip excepteur veniam id aliqua voluptate. Labore id qui in eu consequat sit cupidatat irure nulla culpa aute. Et ut dolore minim occaecat nostrud fugiat qui qui reprehenderit. Nostrud velit velit ex sit fugiat reprehenderit aliqua ipsum. Laborum veniam laborum ea nostrud voluptate exercitation esse. Nulla magna nisi laboris laborum ipsum do. Cupidatat magna ipsum ut eiusmod veniam sunt tempor nulla ipsum incididunt ullamco Lorem commodo id minim.
                </p>
            </ContentContainer>
        </PageLayout>
    );
}

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";

export default function HearFromOurCommunity() {
  const [hearFromOurCommunityColletionList, setHearFromOurCommunityList] =
    useState<{ Name: string; Position: string; Quote: string }[]>([]);

  const hearFromOurCommunityColletionRef = collection(
    db,
    "HearFromOurCommunity",
  );
  useEffect(() => {
    const getTestimonialList = async () => {
      try {
        const data = await getDocs(hearFromOurCommunityColletionRef);
        const filteredData = data.docs.map((doc) => {
          const docData = doc.data();
          return {
            Name: docData.Name,
            Position: docData.Position,
            Quote: docData.Quote,
          };
        });
        setHearFromOurCommunityList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTestimonialList();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-600 antialiased">
      <InfiniteMovingCards
        items={hearFromOurCommunityColletionList}
        direction="right"
        speed="fast"
        header={"Hear From Our Community"}
      />
    </div>
  );
}

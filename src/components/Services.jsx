import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HighQualityIcon from "@mui/icons-material/HighQuality";

function Services() {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto mt-16 space-y-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <WorkspacePremiumIcon sx={{ fontSize: 50, margin: 2 }} />
        <div className="lg:text-left  md:ml-4 sm:text-center">
          <h1 className="text-2xl font-bold mb-2">Premium Material</h1>
          <p className="text-lg">
            For a company that generates thousands of mass-produced sneakers,
            Nike’s quality is relatively good. Different releases have differing
            levels of quality which is not always reflected in their pricing
            structure.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <LocalShippingIcon sx={{ fontSize: 50, margin: 2 }} />
        <div className="sm:text-center lg:text-left  md:ml-4">
          <h1 className="text-2xl font-bold mb-2">Fast Shipping</h1>
          <p className="text-lg">
            We make sure you receive your Nike product as soon as we have
            finished making it. We also provide free returns if you are not
            satisfied.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <HighQualityIcon sx={{ fontSize: 50, margin: 2 }} />
        <div className="sm:text-center lg:text-left  md:ml-4">
          <h1 className="text-2xl font-bold mb-2">Quality Assurance</h1>
          <p className="text-lg">
            For every purchase you make, we will ensure there are no damages or
            faults, and we will check and test the pitch of your product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

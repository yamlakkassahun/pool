import React, { useState } from 'react'
import BulkOrderStepOne from '../components/bulk-order/BulkOrderStepOne';
import BulkOrderStepTwo from '../components/bulk-order/BulkOrderStepTwo';
import BulkOrderStepThree from '../components/bulk-order/BulkOrderStepThree';
import BulkOrderStepFour from '../components/bulk-order/BulkOrderStepFour';

export default function BulkOrderSteeper() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        jobTitle: "",
        jobDescription: "",
        jobType: "",
        location: "",
        deadlineDay: "",
        yearOfExperience: "",
        educationLevel: "",
        requiredSkills: [],
        jobCategory: "",
        coverLetter: "",
        targetIndustries: [],
        responsibilities: [],
        numberOfApplicants: "",
        showCoverLetter: "",
    });


    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    switch (step) {
        case 1:
          return (
            <BulkOrderStepOne
              step={step}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          );
        case 2:
          return (
            <BulkOrderStepTwo
              step={step}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );
        case 3:
          return (
            <BulkOrderStepThree
              step={step}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );
          // case 4:
          //   return (
          //     <BulkOrderStepFour
          //       step={step}
          //       formData={formData}
          //       setFormData={setFormData}
          //       nextStep={nextStep}
          //       prevStep={prevStep}
          //     />
          //   );
        default:
          return <BulkOrderStepOne formData={formData} setFormData={undefined} nextStep={undefined} step={0} />;
      }
}
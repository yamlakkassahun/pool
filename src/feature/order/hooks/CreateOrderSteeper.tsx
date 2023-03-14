import React, { useState } from 'react'
import CreateOrderStepOne from '../components/create-order/CreateOrderStepOne';
import CreateOrderStepTwo from '../components/create-order/CreateOrderStepTwo';
import CreateOrderStepThree from '../components/create-order/CreateOrderStepThree';
import CreateOrderStepFour from '../components/create-order/CreateOrderStepFour';
import CreateOrderStepFive from '../components/create-order/CreateOrderStepFive';
import CreateOrderStepStart from '../components/create-order/CreateOrderStepStart';


export default function CreateOrderSteeper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickUpLocation: '',
    destinationLocation: '',
    deliveryPlan: '',
    receiver: '',
    itemName: '',
    quantity: '',
    sizeOfItem: '',
    poolId: '',
    markUp: [],
    description: '',
    pickUpSMS: false,
    isFragile: true,
    insurance: '',
    deliveryItemPrice: '',
    extraNotificationContacts: [],
    paymentMethod: '',
    saveOptions: true
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {

    case 1:
      return (
        <CreateOrderStepStart
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <CreateOrderStepOne
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 3:
      return (
        <CreateOrderStepTwo
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <CreateOrderStepThree
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <CreateOrderStepFour
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 6:
      return (
        <CreateOrderStepFive
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return <CreateOrderStepOne formData={formData} setFormData={undefined} nextStep={undefined} step={0} />;
  }
}
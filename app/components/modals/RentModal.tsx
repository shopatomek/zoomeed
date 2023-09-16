"use client";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import CategoryInput from "../inputs/CategoryInput";
import CountrySelect from "../inputs/CountrySelect";
import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const imageSrc = watch("imageSrc");

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );

  // useForm<FieldValues> oznacza, że hook useForm jest generyczny i przyjmuje typ FieldValues jako argument. FieldValues to generyczny typ, który reprezentuje strukturę danych formularza. Możesz zdefiniować ten typ według potrzeb swojego formularza.

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which describes your place?"
        subtitle="Select a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Where is your place ?" subtitle="Help guest find you" />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell us more about your place"
          subtitle="What amenites do you have?"
        />
        <Counter
          title="Guests"
          subtitle="How many guests you allow ?"
          value={guestCount}
          // @ts-ignore
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have ?"
          value={roomCount}
          // @ts-ignore
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms ?"
          value={bathroomCount}
          // @ts-ignore
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place?"
          subtitle="Show guest the place"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Airnbnb your home"
      body={bodyContent}
    />
  );
};

export default RentModal;

// W tym kodzie używamy hooka useForm z biblioteki react-hook-form do zarządzania formularzem i jego stanem.

// // useForm jest hookiem, który zwraca obiekt zawierający różne funkcje i wartości, które pomagają w obsłudze formularzy.

// // W linii const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<FieldValues>({ ... }), destrukturyzujemy ten zwrócony obiekt, pobierając potrzebne funkcje i wartości do zmiennych.

// ENUM

// w JavaScript, enum (wyliczenie) jest strukturą danych, która pozwala na zdefiniowanie zestawu nazwanych wartości, które są powiązane z określonymi liczbami lub innymi wartościami. Enumy są przydatne, gdy chcemy nadać nazwy i wartości symboliczne zestawowi powiązanych wartości.

// useMemo() jest jednym z hooków w bibliotece React, który pozwala na optymalizację wydajności komponentów funkcyjnych poprzez pamiętanie (memoizację) wyniku obliczeń.

// Głównym celem useMemo() jest unikanie niepotrzebnych obliczeń, które mogą być kosztowne w kontekście wydajności. Ten hook przyjmuje dwie wartości: funkcję obliczającą (memoizowaną) i zależności. Funkcja obliczająca jest wywoływana tylko wtedy, gdy jedna z zależności się zmienia. W przeciwnym razie, wynik obliczeń jest przechowywany i zwracany bez ponownego obliczania.

//

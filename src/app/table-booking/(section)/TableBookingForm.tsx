"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios, { type AxiosError } from "axios";
import {
  TableBookingValidation,
  type TableFormValues,
} from "./Table-Validation";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import TimeForm from "./TimeForm";
import CustomerDetails from "./CustomerDetails";
import { useRouter } from "next/navigation";

export default function TableBookingForm() {
  const router = useRouter();
  const [page, setPage] = useState<number>(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<TableFormValues>({
    resolver: zodResolver(TableBookingValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "",
      time: "",
      request: "",
    },
  });

  const bookTableMutation = useMutation({
    mutationFn: async (values: TableFormValues) => {
      const adjustedValues = { ...values };

      if (adjustedValues.date instanceof Date) {
        const year = adjustedValues.date.getFullYear();
        const month = adjustedValues.date.getMonth();
        const day = adjustedValues.date.getDate();
        adjustedValues.date = new Date(year, month, day, 12, 0, 0);
      }

      return await axios.post("/api/table-booking", adjustedValues);
    },
    onSuccess: () => {
      setShowSuccessModal(true);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ error: string }>;
      if (axiosError.response?.data?.error) {
        toast.error(axiosError.response.data.error, { duration: 5000 });
      } else {
        toast.error(
          "There was a problem submitting your booking. Please try again.",
          { duration: 5000 },
        );
      }
    },
  });

  const onSubmit = (values: TableFormValues) => {
    bookTableMutation.mutate(values);
  };

  return (
    <div className="w-full space-y-6 px-4">
      {page === 0 ? (
        <TimeForm mainform={form} setpage={setPage} />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomerDetails
              form={form}
              bookTableMutation={bookTableMutation}
              setpage={setPage}
            />
          </form>
        </Form>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-[90%] max-w-md space-y-4 rounded bg-white p-6 text-center shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">
              Reservation Submitted!
            </h2>
            <p className="text-gray-700">
              Your reservation request has been successfully submitted.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                form.reset();
                router.push("/");
              }}
              className="mt-2 rounded bg-popover px-4 py-2 text-[#000]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

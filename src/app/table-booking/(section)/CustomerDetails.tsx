"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FC } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { TableFormValues } from "./Table-Validation";
import type { UseMutationResult } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface CustomerDetailsProps {
  form: UseFormReturn<TableFormValues, undefined>;
  bookTableMutation: UseMutationResult<AxiosResponse, Error, TableFormValues>;
  setpage: (page: number) => void;
}

const CustomerDetails: FC<CustomerDetailsProps> = ({
  form,
  bookTableMutation,
  setpage,
}) => {
  return (
    <div className="flex w-full flex-col items-end gap-5">
      {/* <div className='w-full flex items-start justify-start'>
                <div onClick={() => setpage(0)} className='w-fit flex gap-2 justify-center items-center'>
                    <ArrowLeft />
                    <p>go to back</p>
                </div>
            </div> */}
      <div className="flex w-full flex-col gap-3 bg-popover px-12 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex w-full flex-col gap-2">
            <p className="text-semibold text-[#000]">Date & Time</p>
            <p className="font-light text-[#000]">
              {form.watch("date")
                ? format(form.watch("date"), "EEE MMM dd yyyy")
                : "No date selected"}
              , {form.watch("time") ? form.watch("time") : "No time selected"}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <p className="text-semibold text-[#000]">No of Guests</p>
            <p className="font-light text-[#000]">
              {form.watch("guests")
                ? `${form.watch("guests")} Guests`
                : "no number of guests selected"}
            </p>
          </div>
          <div className="flex w-full items-center md:justify-center">
            <p
              className="w-fit cursor-pointer border-b-[1px] border-b-[#000] text-[#000]"
              onClick={() => setpage(0)}
            >
              Change Selection
            </p>
          </div>
        </div>
      </div>
      <p className="w-full text-2xl font-semibold text-muted">
        Complete your request
      </p>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                  className="h-12 border-muted bg-transparent text-muted placeholder:text-muted"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  type="email"
                  className="h-12 border-muted bg-transparent text-muted placeholder:text-muted"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted">Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone"
                  {...field}
                  type="tel"
                  className="h-12 border-muted bg-transparent text-muted placeholder:text-muted"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="request"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-muted">Special Request</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="min-h-[100px] border-muted bg-transparent text-muted placeholder:text-muted"
                placeholder="Enter any special requests or dietary requirements..."
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex w-full justify-center">
        {/* <Button
          type="submit"
          className="mt-4 w-fit bg-primary px-6 py-6 font-semibold text-[#fff] hover:bg-[#34d399]"
          disabled={bookTableMutation.isPending}
        >
          {bookTableMutation.isPending ? "Booking..." : "Book A Table"}
        </Button> */}

        <motion.button
          className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-500 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25 md:px-12 md:text-base"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          disabled={bookTableMutation.isPending}
        >
          <span className="relative z-10">
            {bookTableMutation.isPending ? "Booking..." : "Book A Table"}
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
        </motion.button>
      </div>
    </div>
  );
};

export default CustomerDetails;

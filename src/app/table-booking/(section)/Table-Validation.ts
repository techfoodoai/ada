import { z } from "zod";

export const TableBookingValidation = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 characters." })
    .regex(/^[A-Za-z\s.'-]+$/, {
      message:
        "Name must contain only letters and valid characters like spaces, dots, apostrophes, or hyphens.",
    }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),

  phone: z
    .string()
    .trim()
    .regex(/^\d{11}$/, {
      message:
        "Phone number must be exactly 11 digits and cannot contain letters or symbols.",
    }),

  guests: z
    .string()
    .min(1, { message: "Please select the number of guests." })
    .refine((val) => Number(val) >= 1, {
      message: "Number of guests must be at least 1.",
    }),

  date: z.date({ required_error: "Please select a date." }).refine(
    (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
    { message: "Booking date cannot be in the past." },
  ),

  time: z.string().min(1, { message: "Please select a time." }),
  request: z.string().optional(),
});

export type TableFormValues = z.infer<typeof TableBookingValidation>;

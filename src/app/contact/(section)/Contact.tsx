"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  Check,
  X,
  AlertCircle,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { motion } from "framer-motion";

const FormValidation = z.object({
  first: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name must not exceed 50 characters." })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "First name can only contain letters, spaces, hyphens, and apostrophes.",
    })
    .refine((name) => name.trim().length > 0, {
      message: "First name cannot be empty or just spaces.",
    }),

  last: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name must not exceed 50 characters." })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Last name can only contain letters, spaces, hyphens, and apostrophes.",
    })
    .refine((name) => name.trim().length > 0, {
      message: "Last name cannot be empty or just spaces.",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must not exceed 100 characters." })
    .refine(
      (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      {
        message: "Please enter a valid email format (e.g., user@example.com).",
      },
    ),

  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\+?[\d\s()-]+$/, {
      message:
        "Phone number can only contain digits, spaces, parentheses, hyphens, and plus sign.",
    })
    .refine(
      (phone) => {
        const digitsOnly = phone.replace(/\D/g, "");
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      {
        message: "Phone number must contain between 10-15 digits.",
      },
    )
    .refine(
      (phone) => {
        if (phone.startsWith("+")) {
          const digitsOnly = phone.replace(/\D/g, "");
          return digitsOnly.length >= 11;
        }
        return true;
      },
      {
        message:
          "International phone numbers must include country code and be valid.",
      },
    ),

  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      first: "",
      phone: "",
      email: "",
      last: "",
      message: "",
    },
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputStyles =
    "h-12 rounded-lg border border-amber-400/30 bg-stone-800/50 backdrop-blur-sm text-white placeholder:text-stone-400 outline-none focus-visible:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400/20 transition-all duration-300";

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },

    onSuccess: () => {
      toast(
        (t) => (
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-gray-600">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </div>
            <div className="flex w-full gap-2">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  form.reset();
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700"
              >
                <Check className="h-4 w-4" />
                OK
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="flex items-center justify-center rounded-lg border border-gray-300 p-2.5 text-gray-500 transition-colors hover:bg-gray-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity,
          position: "top-center",
        },
      );
    },

    onError: (error) => {
      toast(
        (t) => (
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Submission Failed
              </h3>
              <p className="text-sm text-gray-600">
                There was an error submitting your message. Please try again.
              </p>
            </div>
            <div className="flex w-full gap-2">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                <AlertCircle className="h-4 w-4" />
                Try Again
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="flex items-center justify-center rounded-lg border border-gray-300 p-2.5 text-gray-500 transition-colors hover:bg-gray-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity,
          position: "top-center",
        },
      );
    },
  });

  const socialLinks = [
    {
      href: "https://www.instagram.com/adaenfield/",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      href: "https://www.facebook.com/people/Ada-restaurant-enfield/100068848490925/",
      icon: Facebook,
      label: "Facebook",
      color: "hover:text-blue-400",
    },
    {
      href: "https://x.com/adaenfield",
      icon: Twitter,
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden bg-slate-900">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-amber-400/5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-orange-400/8 absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Simple geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ea580c 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-12 px-0 md:px-2 md:pt-8">
        <motion.div
          className="flex w-full max-w-7xl flex-col gap-8 lg:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Side - Contact Info */}
          <motion.div
            className="relative flex w-full flex-col items-center justify-center gap-8 px-4 md:px-8 lg:w-1/2"
            variants={itemVariants}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                alt="Contact Background"
                width={6040}
                height={4040}
                className="min-h-full min-w-full object-cover"
                src="/images/about-us/5.JPG"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-8 py-16 text-center">
              {/* Title */}
              <div className="space-y-4">
                <span className="text-sm font-light uppercase tracking-[0.3em] text-amber-400">
                  ✦ Get In Touch ✦
                </span>
                <h2 className="text-4xl font-light uppercase leading-tight text-white md:text-6xl">
                  Contact
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
                    With Us
                  </span>
                </h2>
              </div>

              {/* Contact Information Cards */}
              <div className="w-full max-w-md space-y-6">
                {/* Phone */}
                <div className="rounded-xl border border-amber-400/30 bg-black/60 p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/20">
                      <Phone className="h-6 w-6 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium uppercase tracking-wider text-amber-400">
                        Phone
                      </p>
                      <Link
                        href="tel:+442083672060"
                        className="text-lg font-medium text-white transition-colors duration-300 hover:text-amber-400"
                      >
                        +44 20 8367 2060
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="rounded-xl border border-amber-400/30 bg-black/60 p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/20">
                      <MapPin className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium uppercase tracking-wider text-orange-400">
                        Address
                      </p>
                      <Link
                        href="https://g.co/kgs/oewkUAT"
                        target="_blank"
                        className="text-sm leading-relaxed text-white transition-colors duration-300 hover:text-orange-400"
                      >
                        43 Silver St, Enfield EN1 3TN
                        <br />
                        United Kingdom
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="rounded-xl border border-amber-400/30 bg-black/60 p-6 backdrop-blur-sm">
                  <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-amber-400">
                    Follow Us
                  </p>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-stone-800/50 text-amber-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="flex w-full flex-col rounded-2xl border border-amber-400/20 bg-stone-800/30 p-8 backdrop-blur-sm lg:w-1/2"
            variants={itemVariants}
          >
            {/* Form Header */}
            <div className="mb-8 text-center lg:text-left">
              <span className="text-sm font-light uppercase tracking-[0.3em] text-amber-400">
                ✦ Send Message ✦
              </span>
              <h3 className="mb-4 mt-2 text-2xl font-light text-white md:text-3xl">
                Make An{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
                  Enquiry
                </span>
              </h3>
              <div className="mx-auto h-0.5 w-16 bg-gradient-to-r from-amber-400 to-orange-500 lg:mx-0"></div>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="first"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className={inputStyles}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className={inputStyles}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Contact Fields */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          {...field}
                          className={inputStyles}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          {...field}
                          className={inputStyles}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          {...field}
                          className="h-32 resize-none rounded-lg border border-amber-400/30 bg-stone-800/50 text-white outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-stone-400 focus-visible:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400/20"
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="h-14 w-full rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-lg font-medium uppercase tracking-wider text-white transition-all duration-500 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25 disabled:opacity-50"
                    disabled={bookTableMutation.isPending}
                  >
                    {bookTableMutation.isPending ? (
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="w-full max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-amber-400/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.6531446443882!2d-0.08296332348801451!3d51.6534945718469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f3ac2ac072b%3A0x7d58fb054d5af8b2!2sAda%20Restaurant!5e1!3m2!1sen!2sin!4v1750500307133!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full brightness-110 contrast-150 hue-rotate-15 sepia filter"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

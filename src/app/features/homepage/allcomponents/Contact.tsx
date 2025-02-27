"use client";
import { useState } from "react";
import { IoIosWarning } from "react-icons/io";
import Image from "next/image";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { FormEmailSchema } from "@/utils/validate/formEmail";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const clearFieldError = async <T extends keyof typeof FormEmailSchema.shape>(
    field: T,
    value: unknown,
    setErrors: React.Dispatch<React.SetStateAction<z.ZodIssue[]>>,
  ) => {
    try {
      const fieldSchema = FormEmailSchema.shape[field];
      if (!fieldSchema) return;

      await fieldSchema.parseAsync(value);

      setErrors((prev) => prev.filter((error) => error.path[0] !== field));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.issues.find(
          (issue) => issue.path[0] === field,
        );
        if (fieldError) {
          setErrors((prev) => ({
            ...prev,
            [field]: fieldError.message,
          }));
        }
      }
    }
  };
  const getError = (field: string) => {
    return errors.find((error) => error.path[0] === field)?.message;
  };
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  const sendEmail = async () => {
    if (data) {
      try {
        await FormEmailSchema.partial().parseAsync({
          name: data.name,
          email: data.email,
          message: data.message,
        });
        if (serviceId && templateId && userId) {
          emailjs.send(serviceId, templateId, data, userId).then((res) => {
            if (res.status === 200) {
              toast({
                title: "Email sent",
                description: "Your email has been sent successfully.",
              });
              setStatus(true);
            } else {
              toast({
                title: "Email not sent",
                description: "Your email has not been sent successfully.",
              });
              setStatus(false);
            }
          });
          setData({
            name: "",
            email: "",
            message: "",
          });
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors(error.issues);
        }
      }
    }
  };
  const { toast } = useToast();

  return (
    <div className="lg:grid lg:grid-cols-5 xl:grid-cols-5 w-full dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative bg-transparent backdrop-blur-md transition-colors">
      <div className="xl:col-span-3 lg:col-span-3 hidden lg:block p-20">
        {status ? (
          <Image
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDlteGdtYjg0OTZydDJpdm1kdjEyOGk1aWZwOXo5ajNiZHdsZHgwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/izxswKdmqmQrS/giphy.gif"
            alt="Cool GIF"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-sm"
          />
        ) : (
          <Image
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3ZtcHhuYnFlNGMxaHF2eHgzeWszcHQ1NHVhMzhhZWQ4OWRua2syMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6UbEozsUuERkQ/giphy.gif"
            alt="Cool GIF"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-sm"
          />
        )}
      </div>
      <div className="py-32 px-10 bg-white dark:bg-black gap-10 flex flex-col lg:col-span-2 xl:col-span-2">
        <div className="max-w-7xl flex flex-col gap-2.5">
          <h2 className="text-lg md:text-4xl text-black dark:text-white">
            Contact
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Please fill out the form below so we can get back to you.
          </p>
        </div>
        <div className="grid gap-5">
          <LabelInputContainer>
            <Label>Your Name</Label>
            <Input
              value={data.name}
              placeholder="Dechawiwatwong Detchang"
              type="text"
              className={`${getError("name") ? "border-2 border-red-500" : ""}`}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  name: e.target.value,
                }));
                clearFieldError("name", data.name, setErrors);
              }}
            />
            {getError("name") && (
              <div className="flex gap-1 items-center">
                <IoIosWarning className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-sm dark:text-red-500">
                  {getError("message")}
                </p>
              </div>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label>Email</Label>
            <Input
              value={data.email}
              placeholder="dechawiwatwong.d@gmail.com"
              type="text"
              className={`${getError("email") ? "border-2 border-red-500" : ""}`}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
                clearFieldError("email", data.email, setErrors);
              }}
            />
            {getError("email") && (
              <div className="flex gap-1 items-center">
                <IoIosWarning className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-sm dark:text-red-500">
                  {getError("message")}
                </p>
              </div>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label>Message</Label>
            <Textarea
              value={data.message}
              placeholder="Hello, I would like to get in touch with you."
              className={`${getError("message") ? "border-2 border-red-500" : ""}`}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  message: e.target.value,
                }));
                clearFieldError("message", data.message, setErrors);
              }}
            />
            {getError("message") && (
              <div className="flex gap-1 items-center">
                <IoIosWarning className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-sm dark:text-red-500">
                  {getError("message")}
                </p>
              </div>
            )}
          </LabelInputContainer>
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              sendEmail();
            }}
            className="px-8 py-2 rounded-md bg-Teal-1 text-white font-bold transition duration-200 hover:bg-Teal-2 hover:text-white border border-transparent hover:border-Teal-2"
            disabled={status}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

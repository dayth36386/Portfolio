import React, { useState } from "react";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";
import { FormEmailSchema } from "@/utils/validate/formEmail";
import emailjs from "@emailjs/browser";

export default function useHomepage() {
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
  return {
    data,
    setData,
    status,
    errors,
    setErrors,
    clearFieldError,
    getError,
    sendEmail,
  };
}

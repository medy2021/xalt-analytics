import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, User, Building } from "lucide-react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/tracking";
import { trackingConfig } from "@/lib/siteConfig";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendLeadMagnetData } from "@/api/emailApi";


// Add these imports for accessibility
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SheetTitle, SheetDescription } from "@/components/ui/sheet";

import { FormValues, formSchema } from "@/lib/schemas";


const LeadCaptureForm = ({ leadMagnetTitle, onSuccess }: { leadMagnetTitle: string; onSuccess?: () => void }) => {
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await sendLeadMagnetData(
        data.email,
        data.name,
        leadMagnetTitle,
        "https://example.com/download"
      );

      navigate(`/thank-you?resource=${encodeURIComponent(leadMagnetTitle)}`, {
        state: { fromSubmission: true }
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="John Doe" {...field} />
                </div>
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
              <FormLabel>Work Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="johndoe@company.com" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="Acme Corp" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Get the Guide
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
    </Form>
  );
};

export default LeadCaptureForm;
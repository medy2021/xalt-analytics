
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  leadMagnetTitle: string;
  onSuccess?: () => void;
}

const LeadCaptureForm = ({ leadMagnetTitle, onSuccess }: LeadCaptureFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Track conversion event
    trackEvent(trackingConfig.conversionEvents.leadCaptureFormSubmit, {
      lead_source: leadMagnetTitle,
      email_domain: data.email.split('@')[1],
      company_name: data.company,
    });
    
    // Track download guide event
    trackEvent(trackingConfig.conversionEvents.downloadGuide, {
      guide_name: leadMagnetTitle,
    });
    
    // Here you would typically send this data to your CRM or email marketing platform
    toast.success("Success!", {
      description: "Your guide will be sent to your email shortly.",
      duration: 5000,
    });
    
    if (onSuccess) {
      onSuccess();
    }
    
    form.reset();
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
                  <Input className="pl-10" placeholder="Acme Inc." {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormDescription className="text-xs text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </FormDescription>

        <Button 
          type="submit" 
          className="w-full group"
          disabled={form.formState.isSubmitting}
        >
          Get Your Free Guide
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
    </Form>
  );
};

export default LeadCaptureForm;


import React from "react";
import { z } from "zod";
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
import { sendLeadMagnetEmail } from "@/api/emailApi";

// Add these imports for accessibility
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SheetTitle, SheetDescription } from "@/components/ui/sheet";

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
  const onSubmit = async (data: FormValues) => {
    try {
      await sendLeadMagnetEmail(
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
    
    // Generate a download link (this would typically be a link to your actual resource)
    const downloadLink = `https://www.xaltanalytics.com/resources/${encodeURIComponent(leadMagnetTitle.toLowerCase().replace(/\s+/g, '-'))}.pdf`;
    
    try {
      // Send email with the download link
      const result = await sendLeadMagnetEmail(
        data.email,
        data.name,
        leadMagnetTitle,
        downloadLink
      );
      
      // Show success message
      toast.success("Success!", {
        description: "Your guide has been sent to your email.",
        duration: 5000,
      });
      
      if (onSuccess) {
        onSuccess();
      }
      
      form.reset();
      
      // Redirect to thank you page
      navigate(`/thank-you?resource=${encodeURIComponent(leadMagnetTitle)}`, {
        state: { fromSubmission: true }
      });
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Even if email fails, we can still redirect the user to the resource
      toast.error("We couldn't send the email, but you can still access your guide", {
        description: "Click the button below to download your guide.",
        action: {
          label: "Download",
          onClick: () => window.open(downloadLink, '_blank')
        },
        duration: 10000,
      });
      
      // Still consider this a success for the user flow
      if (onSuccess) {
        onSuccess();
      }
      
      form.reset();
      
      // Redirect to thank you page anyway
      navigate(`/thank-you?resource=${encodeURIComponent(leadMagnetTitle)}`, {
        state: { fromSubmission: true, emailFailed: true, downloadLink }
      });
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








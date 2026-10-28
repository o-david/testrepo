import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

const offices = [
  {
    city: "Abuja",
    type: "Head Office",
    address:
      "Suite 19, Jinifa Plaza, Plot 1014, Samuel Ademulegun Avenue, Central Business District",
    phone: "090 2204 3227",
  },
  {
    city: "Lagos",
    type: "Branch Office",
    address:
      "Plot 6, Block 113, Adebisi Ogunniyi Crescent, off Agungi-Ajiran Road, Lekki-Epe Expressway",
    phone: "080 2269 8070",
  },
  {
    city: "Jos",
    type: "Branch Office",
    address: "No. 3, Constitutional Hill Road, Jos, Plateau State",
    phone: "090 2204 3227",
  },
];

const quickContacts = [
  {
    icon: Mail,
    label: "Email us",
    value: "info@oakolawoleandco.com",
    href: "mailto:info@oakolawoleandco.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "090 2204 3227",
    href: "tel:09022043227",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon – Fri: 9:00 AM – 5:00 PM",
  },
];

const fieldClass =
  "h-12 rounded-xl bg-background border-border transition-shadow focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:shadow-[0_0_0_4px_hsl(var(--gold)/0.15)]";

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xqebqwyo");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you shortly.",
      });
    }
  }, [state.succeeded, toast]);

  useEffect(() => {
    if (state.errors) {
      toast({
        title: "Something went wrong",
        description: "Please check the highlighted fields and try again.",
        variant: "destructive",
      });
    }
  }, [state.errors, toast]);

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with O.A. Kolawole & Co. for professional legal consultation. Offices in Abuja, Lagos, and Jos."
        canonicalUrl="/contact"
      />

      <PageHero
        label="Contact"
        title="Let's Talk About"
        accent="Your Matter"
        description="Reach out to schedule a consultation or learn how we can assist you."
      />

      {/* Quick contacts */}
      <section className="relative z-10 -mt-12 md:-mt-16">
        <div className="container-custom grid sm:grid-cols-3 gap-4">
          {quickContacts.map((item, index) => {
            const content = (
              <SpotlightCard className="group h-full flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-lift transition-transform duration-500 hover:-translate-y-1">
                <span className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <item.icon size={20} />
                </span>
                <span className="relative min-w-0">
                  <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="block truncate font-medium text-primary group-hover:text-accent transition-colors">
                    {item.value}
                  </span>
                </span>
              </SpotlightCard>
            );
            return (
              <Reveal key={item.label} delay={0.3 + index * 0.1}>
                {item.href ? <a href={item.href}>{content}</a> : content}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft">
              <span className="eyebrow mb-4">Write to Us</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-8">
                Send Us a Message
              </h2>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
                    Thank you
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Your message has been received. A member of our team will
                    get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name *</Label>
                      <Input id="name" name="name" placeholder="Jane Doe" required className={fieldClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className={fieldClass}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-sm text-destructive"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="080 0000 0000" className={fieldClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" placeholder="How can we help?" required className={fieldClass} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your legal matter..."
                      required
                      className={`${fieldClass} h-auto min-h-[160px] py-3`}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Submitting this form does not create a lawyer-client
                    relationship. Please do not include confidential information.
                  </p>

                  <button type="submit" disabled={state.submitting} className="btn-gold h-14 px-8 disabled:opacity-60 disabled:pointer-events-none">
                    {state.submitting ? "Sending..." : "Send Message"}
                    <Send size={16} className={state.submitting ? "animate-pulse" : ""} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Offices */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <span className="eyebrow mb-4">Our Offices</span>
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-4">
                Visit Us
              </h2>
            </Reveal>
            {offices.map((office, index) => (
              <Reveal key={office.city} delay={0.1 + index * 0.1}>
                <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-accent/50 hover:shadow-soft">
                  <span className="absolute left-0 top-6 bottom-6 w-0.5 origin-top scale-y-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-y-100" />
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-playfair text-xl font-semibold text-primary">{office.city}</p>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {office.type}
                    </span>
                  </div>
                  <p className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    <Phone size={14} className="text-accent" />
                    {office.phone}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <Reveal className="container-custom mt-16">
          <div className="h-[420px] overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0929532432056!2d7.476471875929374!3d9.05528569100711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b7df0449e1d%3A0x33d8874d40c81c62!2sO.A.%20Kolawole%20%26%20co!5e0!3m2!1sen!2sng!4v1770204673150!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Contact;

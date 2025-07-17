import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Contact Us</h1>
        <p className="mt-2 text-lg text-muted-foreground">We'd love to hear from you. Reach out with any questions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl tracking-wide">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" className="min-h-[150px]" />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h3 className="font-headline text-2xl tracking-wide text-accent">Our Information</h3>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-accent mt-1" />
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-muted-foreground">contact@sayand.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-accent mt-1" />
            <div>
              <h4 className="font-bold">Phone</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-accent mt-1" />
            <div>
              <h4 className="font-bold">Address</h4>
              <p className="text-muted-foreground">123 Custom Lane, Auto City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

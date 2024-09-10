import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="bg-background">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 tracking-tight font-extrabold text-foreground text-center">
          Contact
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-muted-foreground sm:text-xl">
          Have a question or want to work together? Don't hesitate to contact
          me.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-foreground"
            >
              Your email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="username@hotmail.com"
              required
              className="shadow-sm bg-card border border-border text-foreground text-sm rounded-lg focus:ring-ring focus:border-primary-500 block w-full p-2.5"
            />
          </div>
          <div>
            <Label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-foreground"
            >
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              placeholder="Let me know how I can help you"
              required
              className="block p-3 w-full text-sm text-foreground bg-card rounded-lg border border-border shadow-sm focus:ring-ring focus:border-primary-500"
            />
          </div>
          <div className="sm:col-span-2">
            <Label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-foreground"
            >
              Your message
            </Label>
            <Textarea
              id="message"
              rows="6"
              placeholder="Leave a comment..."
              className="block p-2.5 w-full text-sm text-foreground bg-card rounded-lg shadow-sm border border-border focus:ring-ring focus:border-primary-500"
            />
          </div>
          <Button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-primary-foreground bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}

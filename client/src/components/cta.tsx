import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Technology?</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">Get in touch with our experts for personalized technology solutions that fit your business needs and budget.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
            <a href="https://wa.me/918448870418">
              <MessageCircle className="mr-3 text-lg" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button  asChild className="bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
            <a href="tel:+918448870418">
              <Phone className="mr-3" />
              Call Now: +91 8448870418
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

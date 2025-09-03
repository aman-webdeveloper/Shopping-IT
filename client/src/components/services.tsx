import { Card, CardContent } from "@/components/ui/card";
import { Video, Laptop, Truck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Video,
      title: "CCTV & Biometric Installation",
      description: "Professional security camera systems and biometric access control installation with ongoing support and maintenance.",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-primary"
    },
    {
      icon: Laptop,
      title: "Bulk Laptop Sales & Rentals",
      description: "Cost-effective laptop solutions for businesses, educational institutions, and events with flexible rental options.",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      iconBg: "bg-accent"
    },
    {
      icon: Truck,
      title: "Pan-India Pickup & Delivery",
      description: "Nationwide logistics network ensuring secure pickup and delivery of technology products to your doorstep.",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive technology solutions and support services for businesses across India</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`${service.bgColor} p-8 rounded-2xl border ${service.borderColor} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

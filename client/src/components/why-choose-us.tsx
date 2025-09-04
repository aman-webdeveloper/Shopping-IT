import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Headphones, Tag } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing and quality checks on all products before delivery",
      bgColor: "bg-primary"
       
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times with reliable pan-India shipping network",
      bgColor: "bg-accent"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated technical support team available for all your queries",
      bgColor: "bg-purple-600"
    },
    {
      icon: Tag,
      title: "Best Prices",
      description: "Competitive pricing with flexible payment options and bulk discounts",
      bgColor: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Why Choose Random IT Solutions?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your trusted technology partner with proven expertise and commitment to excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <CardContent className="p-0">
                  <div className={`w-20 h-20 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

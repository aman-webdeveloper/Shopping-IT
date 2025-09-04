// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
// import type { Testimonial } from "@shared/schema";

// export default function Testimonials() {
//   const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
//     queryKey: ['/api/testimonials'],
//   });

//   if (isLoading) {
//     return (
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Loading testimonials...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by businesses and individuals across India for reliable technology solutions</p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials?.map((testimonial: Testimonial) => (
//             <Card key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-6">
//                   <div className="flex text-yellow-400 mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="fill-current" />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <img 
//                     src={testimonial.imageUrl} 
//                     alt={testimonial.name} 
//                     className="w-12 h-12 rounded-full mr-4" 
//                   />
//                   <div>
//                     <div className="font-bold text-secondary">{testimonial.name}</div>
//                     {/* <div className="text-gray-500 text-sm">{testimonial.company}</div> */}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by businesses and individuals across India for reliable technology solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial: Testimonial) => (
            <Card key={testimonial.id} className="bg-blue-100 p-8 rounded-2xl border border-blue-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <div className="font-bold text-secondary">{testimonial.name}</div>
                    {/* <div className="text-gray-500 text-sm">{testimonial.company}</div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


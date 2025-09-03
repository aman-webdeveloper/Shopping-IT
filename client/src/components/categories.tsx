// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight } from "lucide-react";
// import type { Category } from "@shared/schema";

// export default function Categories() {
//   const { data: categories, isLoading } = useQuery<Category[]>({
//     queryKey: ['/api/categories'],
//   });

//   if (isLoading) {
//     return (
//       <section id="products" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Product Categories</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Loading categories...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="products" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Product Categories</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our comprehensive range of technology solutions for businesses and individuals</p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories?.map((category: Category) => (
//             <Card key={category.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
//               <CardContent className="p-0">
//                 <img 
//                   src={category.imageUrl} 
//                   alt={category.name} 
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-secondary mb-2">{category.name}</h3>
//                   <p className="text-gray-600 mb-4">{category.description}</p>
//                   <div className="flex items-center text-primary font-medium">
//                     <span>Explore Range</span>
//                     <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
import { ArrowRight } from "lucide-react";
import type { Category } from "@shared/schema";

export default function Categories() {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
    queryFn: async () => {
      const res = await fetch('/api/categories');
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    }
  });

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of technology solutions for businesses and individuals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category: Category) => (
            <Card
              key={category.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-0">
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <a 
                    href={category.link} 
                    className="flex items-center text-primary font-medium hover:underline"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

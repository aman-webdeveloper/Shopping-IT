// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import type { Product } from "@shared/schema";

// export default function FeaturedProducts() {
//   const { data: products, isLoading } = useQuery<Product[]>({
//     queryKey: ['/api/products'],
//   });

//   if (isLoading) {
//     return (
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Featured Products</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Loading products...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Featured Products</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hand-picked premium products with exceptional performance and reliability</p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products?.map((product: Product) => (
//             <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
//               <CardContent className="p-0">
//                 <img 
//                   src={product.imageUrl} 
//                   alt={product.name} 
//                   className="w-full h-48 object-cover" 
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-secondary mb-2">{product.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//                   <div className="flex items-center justify-between">
//                     {/* <span className="text-2xl font-bold text-primary">₹{product.price}</span> */}
//                     <Button asChild className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
//                       <a href="https://wa.me/918448870418">
//                         Enquire Now
//                       </a>
//                     </Button>
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
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hand-picked premium products with exceptional performance and reliability</p>
        </div>        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product: Product) => (
            <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-2xl font-bold text-primary">₹{product.price}</span> */}
                    <Button asChild className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      <a href="https://wa.me/918448870418">
                        Enquire Now
                      </a>
                    </Button>
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

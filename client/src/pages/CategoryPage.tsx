// // client/src/pages/CategoryPage.tsx
// import { useParams } from "wouter";
// import { productsData } from "../lib/productsData";

// export default function CategoryPage() {
//   const params = useParams();
//   const id = params?.id as keyof typeof productsData; // ✅ category name

//   if (!id || !productsData[id]) {
//     return <h2 className="text-center p-10">Invalid category</h2>;
//   }

//   const products = productsData[id];

//   if (products.length === 0) {
//     return <h2 className="text-center p-10">No products found</h2>;
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8">Products in {id}</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((p) => (
//             <div
//               key={p.id}
//               className="border rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
//             >
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-bold">{p.name}</h3>
//               <p className="text-gray-600">{p.description}</p>
//               <p className="text-lg font-semibold mt-2">{p.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// client/src/pages/CategoryPage.tsx



// import { useParams } from "wouter";
// import { useEffect, useState } from "react";
// import { storage } from "server/storage";
// import type { Product } from "@shared/schema";

// export default function CategoryPage() {
//   const params = useParams();
//   const category = params?.id ?? "";
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       if (!category) return;
//       const data = await storage.getProductsByCategory(category);
//       setProducts(data);
//     }
//     fetchProducts();
//   }, [category]);

//   if (!category) {
//     return <h2 className="text-center p-10">Invalid category</h2>;
//   }

//   if (products.length === 0) {
//     return <h2 className="text-center p-10">No products found</h2>;
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8">Products in {category}</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((p) => (
//             <div
//               key={p.id}
//               className="border rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
//             >
//               <img
//                 src={p.imageUrl} // MemStorage uses imageUrl
//                 alt={p.name}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-bold">{p.name}</h3>
//               <p className="text-gray-600">{p.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// nee ciode herrer 



import { useParams } from "wouter";
import { useEffect, useState } from "react";
import type { Product } from "@shared/schema";

export default function CategoryPage() {
  const params = useParams();
  const category = params?.id ?? "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      if (!category) return;
      try {
        setLoading(true);
        setError(null);

        // ✅ Call backend API instead of direct storage import
        const res = await fetch(`/api/products/category/${category}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch products (${res.status})`);
        }

        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  if (!category) {
    return <h2 className="text-center p-10">Invalid category</h2>;
  }

  if (loading) {
    return <h2 className="text-center p-10">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="text-center p-10 text-red-500">{error}</h2>;
  }

  if (products.length === 0) {
    return <h2 className="text-center p-10">No products found</h2>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Products in {category}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="border rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export default function CategoryPage() {
  const params = useParams(); // ✅ safe usage
  const id = params?.id;

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", id],
    queryFn: async () => {
      const res = await fetch("/api/products");
      const allProducts = await res.json();
      return allProducts.filter((p: Product) => p.category === id);
    },
    enabled: !!id, // ✅ prevent fetching when id is undefined
  });

  if (!id) {
    return <h2 className="text-center p-10">Invalid category</h2>;
  }

  if (isLoading) {
    return <h2 className="text-center p-10">Loading products...</h2>;
  }

  if (!products || products.length === 0) {
    return <h2 className="text-center p-10">No products found</h2>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Products in {id}</h2>
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

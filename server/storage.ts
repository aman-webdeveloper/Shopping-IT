import { type Product, type InsertProduct, type Category, type InsertCategory, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private categories: Map<string, Category>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.products = new Map();
    this.categories = new Map();
    this.testimonials = new Map();

    // Initialize with sample data
    this.initializeData();
  }

  private async initializeData() {
    // Categories
    const categoriesData: InsertCategory[] = [
      {
        name: "Laptops",
        description: "Boost your productivity with brand-new business laptops from the world's leading brands",
        imageUrl:"/product-categories/mainlaptop.png",
        link: "/laptops"
      },
      {
        name: "Desktops",
        description: "High-performance desktop systems for demanding workloads",
        imageUrl: "/product-categories/maindesktop.png",
        link: "/desktop"
      },
      {
        name: "Memory & Storage",
        description: "RAM, SSDs, and storage solutions for optimal performance",
        imageUrl: "/product-categories/mainmemeorystorage.png",
        link: "/memorystorage"
      },
      {
        name: "Peripherals",
        description: "Keyboards, mice, and essential computer accessories",
        imageUrl: "/product-categories/mainPeripherals.png",
        link: "peripherals"
      },
      {
        name: "CCTV & Security",
        description: "Professional security camera and biometric installation",
        imageUrl: "/product-categories/maincctvsecurity.png",
        link: "CctvSecurity"
      },
      {
        name: "Software & License",
        description: "Adobe,Micrsoft and all other License",
        imageUrl:"/product-categories/mainsoftwarelicense.png",
        link: "softwarelicenses"
      }
    ];

    for (const category of categoriesData) {
      await this.createCategory(category);
    }

    // Products
    const productsData: InsertProduct[] = [
      {
        name: "LENOVO L14",
        description: "i5/10th Gen/8Gb/256Gb SSD",
        category: "Laptops",
        imageUrl: "/leonvo.png"
      },
      {
        name: "MACBOOK AIR",
        description: "13 inch, 8GB RAM, 256SSD",
        category: "Laptops",
        imageUrl: "/macbookair.png"
      },
      {
        name: "8GB DDR4 RAM",
        description: "3200MHz, High Performance",
        category: "Memory & Storage",
        imageUrl: '/RAM.png'
      },
      {
        name: "256GB NVMe SSD",
        description: "Ultra-fast boot and load times",
        category: "Memory & Storage",
        imageUrl: "/SSD.png"
      },
    ];

    for (const product of productsData) {
      await this.createProduct(product);
    }

    // Testimonials
    const testimonialsData: InsertTestimonial[] = [
      {
        name: "Bhaskar Godiyal",
        quote: "Dear Random IT Solutions, if you think you won my brand loyalty by providing me a good quality service, then you are 100% right.",
        imageUrl: "/reviewimages/bhaskargodiyal.png",
        rating: 5
      },
      {
        name: "Aman Kumar",
        quote: "Random IT Solutions has an excellent team with very professional and polite staff. Their services are reliable, quick, and customer-friendly.",
        imageUrl: "/reviewimages/amankumar.png",
      },
      {
        name: "Deepak Singh",
        quote: "Product, price and service all are just mind blowing. I'm one of the happy and satisfied customers of Random IT Solutions.",
        imageUrl: "/reviewimages/deepaksingh.png",
        rating: 5
      }
    ];

    for (const testimonial of testimonialsData) {
      await this.createTestimonial(testimonial);
    }
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      rating: insertTestimonial.rating ?? 5
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();

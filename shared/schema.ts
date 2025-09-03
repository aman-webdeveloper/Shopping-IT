// import { sql } from "drizzle-orm";
// import { pgTable, text, varchar, integer, decimal } from "drizzle-orm/pg-core";
// import { createInsertSchema } from "drizzle-zod";
// import { z } from "zod";

// export const products = pgTable("products", {
//   id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
//   name: text("name").notNull(),
//   description: text("description").notNull(),
//   // price: decimal("price", { precision: 10, scale: 2 }).notNull(),
//   category: text("category").notNull(),
//   imageUrl: text("image_url").notNull(),
// });

// export const categories = pgTable("categories", {
//   id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
//   name: text("name").notNull(),
//   description: text("description").notNull(),
//   imageUrl: text("image_url").notNull(),
//   link: text("link").notNull(),  
// });

// export const testimonials = pgTable("testimonials", {
//   id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
//   name: text("name").notNull(),
//   // company: text("company").notNull(),
//   quote: text("quote").notNull(),
//   imageUrl: text("image_url").notNull(),
//   rating: integer("rating").notNull().default(5),
// });

// export const insertProductSchema = createInsertSchema(products).pick({
//   name: true,
//   description: true,
//   // price: true,
//   category: true,
//   imageUrl: true,
// });

// export const insertCategorySchema = createInsertSchema(categories).pick({
//   name: true,
//   description: true,
//   imageUrl: true,
// });

// export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
//   name: true,
//   // company: true,
//   quote: true,
//   imageUrl: true,
//   rating: true,
//    link: true,
// });

// export type InsertProduct = z.infer<typeof insertProductSchema>;
// export type Product = typeof products.$inferSelect;

// export type InsertCategory = z.infer<typeof insertCategorySchema>;
// export type Category = typeof categories.$inferSelect;

// export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
// export type Testimonial = typeof testimonials.$inferSelect;

import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ---------------- Products ----------------
export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
});

// ---------------- Categories ----------------
export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link").notNull(),   // 👈 naya column add kiya
});

// ---------------- Testimonials ----------------
export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  quote: text("quote").notNull(),
  imageUrl: text("image_url").notNull(),
  rating: integer("rating").notNull().default(5),
});

// ---------------- Zod Schemas ----------------
export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  category: true,
  imageUrl: true,
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  description: true,
  imageUrl: true,
  link: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  name: true,
  quote: true,
  imageUrl: true,
  rating: true,
});

// ---------------- Types ----------------
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

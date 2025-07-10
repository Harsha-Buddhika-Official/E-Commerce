import React from 'react';
import GenericCategory from './GenericCategory';

const booksProducts = [
  {
    id: 601,
    name: "Bestselling Novel Collection",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 3247,
    image: "📚",
    badge: "Bestseller",
    category: "Books"
  },
  {
    id: 602,
    name: "Programming Fundamentals",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.9,
    reviews: 1876,
    image: "💻",
    badge: "Educational",
    category: "Books"
  },
  {
    id: 603,
    name: "Self-Help Motivation Pack",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 2134,
    image: "📖",
    badge: "Inspiring",
    category: "Books"
  },
  {
    id: 604,
    name: "Children's Story Collection",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 1456,
    image: "🧸",
    badge: "Family Favorite",
    category: "Books"
  }
];

export default function Books() {
  return (
    <GenericCategory 
      categoryName="Books"
      categoryIcon="📚"
      categoryColor="from-indigo-500 to-blue-500"
      products={booksProducts}
    />
  );
}

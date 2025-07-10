import React from 'react';
import GenericCategory from './GenericCategory';

const toysGamesProducts = [
  {
    id: 701,
    name: "Gaming Console Bundle",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 2847,
    image: "🎮",
    badge: "Hot Deal",
    category: "Toys & Games"
  },
  {
    id: 702,
    name: "LEGO Architecture Set",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 1634,
    image: "🧱",
    badge: "Creative",
    category: "Toys & Games"
  },
  {
    id: 703,
    name: "Remote Control Drone",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 892,
    image: "🚁",
    badge: "Tech Toy",
    category: "Toys & Games"
  },
  {
    id: 704,
    name: "Board Game Collection",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 1245,
    image: "🎲",
    badge: "Family Fun",
    category: "Toys & Games"
  }
];

export default function ToysGames() {
  return (
    <GenericCategory 
      categoryName="Toys & Games"
      categoryIcon="🎮"
      categoryColor="from-yellow-500 to-orange-500"
      products={toysGamesProducts}
    />
  );
}

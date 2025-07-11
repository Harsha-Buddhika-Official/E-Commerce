import React from 'react';
import GenericCategory from './GenericCategory';
import {
  electronicsProducts,
  fashionProducts,
  homeGardenProducts,
  sportsProducts,
  beautyProducts,
  booksProducts,
  toysGamesProducts,
  automotiveProducts,
  healthWellnessProducts,
  foodBeveragesProducts
} from '../Components/data';

// Electronics Category
export function Electronics() {
  return (
    <GenericCategory 
      categoryName="Electronics"
      categoryIcon="📱"
      categoryColor="from-blue-500 to-purple-500"
      products={electronicsProducts}
    />
  );
}

// Fashion Category
export function Fashion() {
  return (
    <GenericCategory 
      categoryName="Fashion"
      categoryIcon="👗"
      categoryColor="from-pink-500 to-rose-500"
      products={fashionProducts}
    />
  );
}

// Home & Garden Category
export function HomeGarden() {
  return (
    <GenericCategory 
      categoryName="Home & Garden"
      categoryIcon="🏡"
      categoryColor="from-green-500 to-emerald-500"
      products={homeGardenProducts}
    />
  );
}

// Sports Category
export function Sports() {
  return (
    <GenericCategory 
      categoryName="Sports"
      categoryIcon="⚽"
      categoryColor="from-orange-500 to-red-500"
      products={sportsProducts}
    />
  );
}

// Beauty Category
export function Beauty() {
  return (
    <GenericCategory 
      categoryName="Beauty"
      categoryIcon="💄"
      categoryColor="from-purple-500 to-pink-500"
      products={beautyProducts}
    />
  );
}

// Books Category
export function Books() {
  return (
    <GenericCategory 
      categoryName="Books"
      categoryIcon="📚"
      categoryColor="from-indigo-500 to-blue-500"
      products={booksProducts}
    />
  );
}

// Toys & Games Category
export function ToysGames() {
  return (
    <GenericCategory 
      categoryName="Toys & Games"
      categoryIcon="🎮"
      categoryColor="from-yellow-500 to-orange-500"
      products={toysGamesProducts}
    />
  );
}

// Automotive Category
export function Automotive() {
  return (
    <GenericCategory 
      categoryName="Automotive"
      categoryIcon="🚗"
      categoryColor="from-gray-500 to-slate-500"
      products={automotiveProducts}
    />
  );
}

// Health & Wellness Category
export function HealthWellness() {
  return (
    <GenericCategory 
      categoryName="Health & Wellness"
      categoryIcon="💊"
      categoryColor="from-green-500 to-teal-500"
      products={healthWellnessProducts}
    />
  );
}

// Food & Beverages Category
export function FoodBeverages() {
  return (
    <GenericCategory 
      categoryName="Food & Beverages"
      categoryIcon="🍔"
      categoryColor="from-red-500 to-pink-500"
      products={foodBeveragesProducts}
    />
  );
}

// Default exports for backward compatibility
export default {
  Electronics,
  Fashion,
  HomeGarden,
  Sports,
  Beauty,
  Books,
  ToysGames,
  Automotive,
  HealthWellness,
  FoodBeverages
};

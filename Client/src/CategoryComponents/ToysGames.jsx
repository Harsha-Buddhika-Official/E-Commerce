import React from 'react';
import GenericCategory from './GenericCategory';
import { toysGamesProducts } from '../Components/data';

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

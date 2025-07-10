import React from 'react';
import GenericCategory from './GenericCategory';
import { booksProducts } from '../Components/data';

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

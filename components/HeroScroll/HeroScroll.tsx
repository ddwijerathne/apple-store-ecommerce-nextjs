// components/HeroScroll.tsx
import React from 'react';
import Image from 'next/image'; // 1. Import Next.js Image
import styles from './HeroScroll.module.css';

interface Product {
  id: number;
  title: string;
  subtitle?: string;
  price?: string;
  imageUrl: string; 
  theme: 'dark' | 'light'; 
}

const products: Product[] = [
  {
    id: 1,
    title: 'iPhone 17 Pro',
    subtitle: 'All out pro.',
    price: 'From $1099 or $45.79/mo. for 24 mo.',
    imageUrl: '/HeroScroll/iphone-17-pro.png', 
    theme: 'dark',
  },
  {
    id: 2,
    title: 'MacBook Pro 14"',
    subtitle: 'Suppercharged by M5.',
    price: 'From $1599 or $133.25/mo. for 12 mo.',
    imageUrl: '/HeroScroll/macbook-pro-14.png',
    theme: 'dark',
  },
  {
    id: 3,
    title: 'iPad Pro',
    subtitle: 'Mmmmm. Power.',
    price: 'From $999 or $83.25/mo. for 12 mo.',
    imageUrl: '/HeroScroll/ipad-pro.png',
    theme: 'dark',
  },
  {
    id: 4,
    title: 'Apple Watch Series 11',
    subtitle: 'The ultimate way to watch your health.',
    price: 'From $399 or $33.25/mo. for 12 mo.',
    imageUrl: '/HeroScroll/apple-watch-series-11.png',
    theme: 'light',
  },
  {
    id: 5,
    title: 'iPhone 17',
    subtitle: 'Magicroromatic.',
    price: 'From $799 or $33.29/mo. for 24 mo.',
    imageUrl: '/HeroScroll/iphone-17.png',
    theme: 'light',
  },
  {
    id: 6,
    title: 'Macbook Air',
    subtitle: 'Speed of lightness.',
    price: 'From $999 or $83.25/mo. for 12 mo.',
    imageUrl: '/HeroScroll/macbook-air.png',
    theme: 'light',
  },
  {
    id: 7,
    title: 'iPhone Air',
    subtitle: 'The thinnest iPhone ever.',
    price: 'From $999 or $41.62/mo. for 24 mo.',
    imageUrl: '/HeroScroll/iphone-air.png',
    theme: 'light',
  },
  {
    id: 8,
    title: 'Apple Watch Ultra 3',
    subtitle: 'Pearsonal beast.',
    price: 'From $799 or $66.58/mo. for 12 mo.',
    imageUrl: '/HeroScroll/apple-watch-ultra.png',
    theme: 'dark',
  },
  {
    id: 9,
    title: 'Apple Watch SE 3',
    subtitle: 'Walk it. Talk it. Track it. Love it.',
    price: 'From $249 or $20.75/mo. for 12 mo.',
    imageUrl: '/HeroScroll/apple-watch-se.png',
    theme: 'light',
  },
  {
    id: 10,
    title: 'Apple Vision Pro',
    subtitle: 'New Powerful M5 Chip.',
    price: 'From $3499 or $291.58/mo. for 12 mo.',
    imageUrl: '/HeroScroll/vision.png',
    theme: 'light',
  },
  {
    id: 11,
    title: 'Explore iPhone Accessories',
    imageUrl: '/HeroScroll/accessories.png',
    theme: 'light',
  },
];

const HeroScroll: React.FC = () => {
  return (
    <div className={styles.scrollContainer}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`${styles.card} ${styles[product.theme + 'Theme']}`}
        >
          {/* 2. Added Next.js Image Component */}
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className={styles.cardImage}
            priority={product.id <= 2} // Optional: Prioritize loading the first 2 images
          />

          <div className={styles.cardContent}>
            <h3 className={styles.title}>{product.title}</h3>
            {product.subtitle && <p className={styles.subtitle}>{product.subtitle}</p>}
            {product.price && <p className={styles.price}>{product.price}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroScroll;
// app/page.tsx
import HeroScroll from '../components/HeroScroll/HeroScroll';
// app/page.tsx
export default function Home() {
  return (
    <main style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
      
      {/* Header stays centered */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 20px' }}>
        <h1>The latest.</h1>
      </div>

      {/* HeroScroll stays Full Width */}
      <HeroScroll />
      
    </main>
  );
}
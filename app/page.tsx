// app/page.tsx
import HeroScroll from '../components/HeroScroll/HeroScroll';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px 180px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{ fontSize: '28px', color: '#f5f5f7', fontWeight: '600' }}>
          <span style={{ color: '#2a2a2a' }}>The latest. Take a look at what’s new, right now.</span>
        </h1>
      </div>
      <div>
        <HeroScroll />
      </div>

    </main>
  );
}
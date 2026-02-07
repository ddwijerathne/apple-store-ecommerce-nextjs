// app/page.tsx
import HeroScroll from '../components/HeroScroll/HeroScroll';
// app/page.tsx
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', marginTop: '0', padding:'0' }}>
      <div style={{ paddingInline: 'var(--page-inline-padding)', color: '#000000'}}>
        <h1>The latest. Take a look at what&#39;s new, right now.</h1>
      </div>
      {/* HeroScroll stays Full Width */}
      <HeroScroll />
      
    </main>
  );
}
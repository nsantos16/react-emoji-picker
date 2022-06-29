import EmojiShowcase from './components/home/EmojiShowcase';
import Hero from './components/home/Hero';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-48">
      <Hero />
      <EmojiShowcase />
    </div>
  );
}

export default App;

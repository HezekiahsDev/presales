import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;

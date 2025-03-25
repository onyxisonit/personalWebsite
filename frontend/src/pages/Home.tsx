import CardCarousel from "../components/CardCarousel.tsx";

function Home(){
    return(
        <div>
            <section className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl">Welcome to My Portfolio</h1>
            </section>
            <div className="p-6">
                <CardCarousel />
            </div>
            
        
        </div>
    );
}
export default Home;
// app/page.js
import Image from "next/image";
import lapimg from '../public/image.png';
import Link from "next/link";

// Fetch products data
async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products?limit=6');
  const data = await response.json();
  return data.products;
}

export default async function Home() {
  const items = await fetchProducts();

  return (
    <main>
      <div className="container mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg text-4xl font-bold mb-12">
          <div className="lg:w-1/2">
            <Image className="w-full h-auto object-cover rounded-lg" src={lapimg} width={700} height={500} alt="home" />
          </div>
          <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">Explore Our Latest Items</h2>
            <p className="text-gray-700 mb-4">Discover the latest products and Items with our range of Groceries. Find one for your needs.</p>
            <Link href='/properties'>
              <button className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Shop Now</button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={item.thumbnail} alt={item.title} width={300} height={200} className="w-full h-auto object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">${item.price.toFixed(2)}</p>
              <Link href='/properties'>
                <button className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Book</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>Sai Kumar, 6281602324, pmsai.2626@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}

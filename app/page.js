import Image from "next/image";
import  lapimg from '../public/image.png'
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div className="container mx-auto w-full ">
      <div className="flex flex-col lg:flex-row items-center  bg-gray-100  rounded-lg shadow-lg text-4xl font-bold">
        <div className="lg:w-1/2">
        <Image className="w-full h-auto object-cover rounded-lg" src={lapimg} width={700} height={500}  layout="responsive" alt="home" />

        </div>
        <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        <h2 className="text-3xl font-bold mb-4">Explore Our Latest Items</h2>
        <p className="text-gray-700 mb-4">Discover the latest products and Items with our range of Groceries. Find one for your needs.</p>
         <Link href='/properties' > <button className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:lg-blue-600 transition-colors">Shop Now</button></Link>
        </div>
      </div>
      </div>
    </main>
  );
}

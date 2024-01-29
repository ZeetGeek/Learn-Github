import Image from "next/image";

export default function Home() {
	return (
		<>
			<button className='py-3 px-5 bg-black text-white rounded-md shadow-lg mt-5 ms-5'>Button</button>
			<button className='py-3 px-5 bg-blue-500 text-white rounded-md shadow-lg shadow-blue-500/20 duration-150 hover:bg-blue-600 mx-5'>Designer Button</button>
			<button className='py-3 px-5 bg-indigo-500 text-white rounded-md shadow-lg shadow-indigo-500/20 duration-150 hover:bg-indigo-600'>Developer Button</button>
		</>
	);
}

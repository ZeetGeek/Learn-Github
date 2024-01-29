import Image from "next/image";

export default function Home() {
	return (
		<>
			<button className='py-3 px-5 bg-black text-white rounded-md shadow-lg m-5'>Button</button>
			<button className='py-3 px-5 bg-blue-500 text-white rounded-md shadow-lg shadow-blue-500/20 duration-150 hover:bg-blue-600'>Designer Button</button>
		</>
	);
}

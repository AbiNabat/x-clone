import Input from "@/components/Input";

export default function Home() {


  return (

   <>
       <div className='max-w-2xl mx-auto border-r border-l min-h-screen'>
           <div className='py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
               <h2 className='text-lg sm:text-xl'>Home </h2>
           </div>
           <Input/>
       </div>
   </>
  );
}

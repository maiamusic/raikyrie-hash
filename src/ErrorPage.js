import { Link } from "react-router-dom";
import './App.css';

export default function NotFound() {
    return (




        <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 tracking-widest">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="max-w-md text-center">
                    <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span class="sr-only  ">Error</span>404
                    </h2>

                    <p class="text-2xl font-semibold md:text-3xl">Seems that you found something forbidden..</p>
                    <p class="mt-4 mb-8 dark:text-gray-400 text-xl">.. or it has never existed</p>
 

                    <div >

                        <Link to='/' rel="noopener noreferrer"  class="text-white px-8 py-3 font-semibold   ">
                            <button class="navMint  hover:text-defaultdark hover:bg-neutral-300 bg-violet-400
                        ">
                                Take me home
                            </button>
                        </Link>

                    </div>  

                </div>
            </div>
        </section>
    )
}
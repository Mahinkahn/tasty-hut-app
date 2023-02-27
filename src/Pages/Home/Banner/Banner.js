import React from 'react';
import chair from '../../../assets/images/banner_1.png';


const Banner = () => {
    return (

        <section class=" mt-8 h-[650px]" style={{
            background: `url(${chair})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',


        }}>
            <div className="hero-overlay bg-opacity-70">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto  text-center mt-20">
                        <h2 class="text-5xl font-bold text-white md:text-5xl">
                            Taste Our Delicious <br />
                            Best Foods
                        </h2>

                        <p class="hidden text-white sm:mt-4 sm:block">
                            There are many variations of passages of Lorem Ipsum available, but the majority have <br />  suffered alteration in some form, by injected humou.
                        </p>
                    </div>

                    <form className='w-[752px]  max-w-[1440px] mx-auto mt-9'>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full h-16 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
                            <button type="submit" class="text-black font-bold w-36 h-16 absolute right-0 bottom-0 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 dark:primary dark:hover:bg-primary dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                </div>

            </div>
        </section>

    );
};

export default Banner;
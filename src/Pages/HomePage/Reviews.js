import React from 'react';

const Reviews = () => {
    return (
            <div class="py-16 white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What our client says?</h2>
                    <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                        <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                            <div class="h-full flex flex-col justify-center space-y-4">
                                <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
                                    <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> “The team that was assigned to our project…were extremely professional throughout the project and assured that the owner expectations were met and often exceeded.”<span class="font-serif">"</span></p>
                                    <div>
                                        <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                        <span class="text-xs text-gray-500">Product Designer</span>
                                    </div>
                            </div>
                        </div>

                        <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
                                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                    <p class="text-gray-600"> <span class="font-serif">"</span> “We want to note  your success in meeting our schedules with excellent workmanship, performing it affordably and the spirit of cooperation and integrity everyone came to admire. “ <span class="font-serif">"</span></p>
                                    <div>
                                        <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                        <span class="text-xs text-gray-500">Product Designer</span>
                                    </div>
                                </div>
                        </div>
                        <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
                                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                    <p class="text-gray-600"> <span class="font-serif">"</span> Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house ever! It’s been a beautiful ride, there were up's and down's, frustrations, delays at the same time great looks. keep touch with them. <span class="font-serif">"</span></p>
                                    <div>
                                        <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                        <span class="text-xs text-gray-500">Product Designer</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Reviews;
import React from 'react';

const TrustSection = () => {
    return (
        <section className="bg-white py-12 border-t border-border-light mt-16">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-24 opacity-80">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#52002B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-[17px] font-semibold text-text-primary">24hr Delivery</p>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#52002B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-[17px] font-semibold text-text-primary">Quality Assurance</p>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#52002B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <p className="text-[17px] font-semibold text-text-primary">Easy Returns</p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;

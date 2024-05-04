import { useState, useEffect } from 'react';

const Hero = () => {
    const [selectedMarket, setSelectedMarket] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [marketingCost, setMarketingCost] = useState(0);
    const [selectedUtilityService, setSelectedUtilityService] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleMarketChange = (event) => {
        const market = event.target.value;
        setSelectedMarket(market);

        let cost = 0;

        switch (market) {
            case 'India':
                setSelectedCurrency('Indian Rupee');
                switch (selectedUtilityService) {
                    case 'Utility':
                        cost = 0.3082;
                        break;
                    case 'Service':
                        cost = 0.2906;
                        break;
                    case 'Marketing':
                        cost = 0.7265;
                        break;
                    default:
                        cost = 0;
                }
                break;
            case 'North America':
                setSelectedCurrency('Dollars');
                switch (selectedUtilityService) {
                    case 'Utility':
                        cost = 0.0099;
                        break;
                    case 'Service':
                        cost = 0.0042;
                        break;
                    case 'Marketing':
                        cost = 0.004;
                        break;
                    default:
                        cost = 0;
                }
                break;
        }
        setMarketingCost(cost);
    };


    const handleUtilityServiceChange = (event) => {
        const utilityService = event.target.value;
        setSelectedUtilityService(utilityService);

        let cost = 0;

        switch (utilityService) {
            case 'Utility':
                if (selectedMarket === 'India') {
                    cost = 0.3082;
                } else if (selectedMarket === 'North America') {
                    cost = 0.0099;
                }
                break;
            case 'Service':
                if (selectedMarket === 'India') {
                    cost = 0.2906;
                } else if (selectedMarket === 'North America') {
                    cost = 0.0042;
                }
                break;
            case 'Marketing':
                if (selectedMarket === 'India') {
                    cost = 0.7265;
                } else if (selectedMarket === 'North America') {
                    cost = 0.004;
                }
                break;
            default:
                cost = 0;
        }
        setMarketingCost(cost);
    };


    useEffect(() => {
        if (isNaN(inputValue)) {
            setResult('');
        } else {
            let calculatedResult = (inputValue * marketingCost);
            if (calculatedResult < 1) {
                calculatedResult = (inputValue * marketingCost).toFixed(5);
            } else {
                calculatedResult = (inputValue * marketingCost).toFixed(1);
            }
            setResult(calculatedResult);
        }
    }, [inputValue, marketingCost]);



    return (
        <div className="w-full flex flex-col items-center justify-center">

            <div className="w-full flex flex-col items-center py-10">
                <div className="text-3xl font-semibold mb-[33px] text-[#103928] text-[40px]">
                    Conversation Rates
                </div>
                <div className="w-3/4 text-center">
                    <p className="text-[16px] leading-[150%] text-[#526571]">
                        Select the market, currency, and conversation category to find the rate.
                        Conversations are 24-hour message threads between you and your customers.
                    </p>
                </div>
            </div>

            {/* Market and currency selection */}
            <div className="w-[50%] ">
                <div className="flex justify-start">
                    <label htmlFor="country" className="text-[#103928] text-[16px] leading-[150%] font-[700] mb-2 block">
                        Market
                    </label>
                </div>
                <div className="flex gap-[40px]">
                    <div className="flex-1">
                        <select id="country" name="country" className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-[16px] h-[5rem]"
                            onChange={handleMarketChange}>
                            <option value="">Select a Market</option>
                            <option value="North America">North America</option>
                            <option value="India">India</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <select id="currency" name="currency" className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-[16px] h-[5rem]">
                            <option value="">{selectedCurrency ? selectedCurrency : 'Select a Currency'}</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Conversation category selection */}
            <div className="w-[50%] my-[2rem]">
                <div className="flex justify-start">
                    <label htmlFor="" className="text-[#103928] font-[700] text-[18px] leading-[150%]">
                        Conversation category
                    </label>
                </div>
                <div className="my-6">
                    <label htmlFor="form" className="cursor-pointer">
                        <form id="form" action="" className="flex items-center gap-[50px]">
                            <div className="gap-[10px] mt-[10px] h-[7rem] w-[20rem] flex items-center justify-between flex-row-reverse border rounded-full overflow-hidden shadow-md">
                                <input type="radio" id="Marketing" name="utilityService" value="Marketing" onChange={handleUtilityServiceChange} className="w-[50%]" />
                                <label htmlFor="Marketing" className="bg-white text-[#526571] px-4 py-2 rounded-lg cursor-pointer text-[20px] flex items-center justify-center w-[50%]">
                                    Marketing
                                </label>
                            </div>
                            <div className="gap-[10px] mt-[10px] h-[7rem] w-[20rem] flex items-center justify-between flex-row-reverse border rounded-full overflow-hidden shadow-md">
                                <input type="radio" id="utility" name="utilityService" value="Utility" onChange={handleUtilityServiceChange} className="w-[50%]" />
                                <label htmlFor="utility" className="bg-white text-[#526571] px-4 py-2 rounded-lg cursor-pointer text-[20px] flex items-center justify-center w-[50%]">
                                    Utility
                                </label>
                            </div>
                            <div className="gap-[10px] mt-[10px] h-[7rem] w-[20rem] flex items-center justify-between flex-row-reverse border rounded-full overflow-hidden shadow-md ">
                                <input type="radio" id="service" name="utilityService" value="Service" onChange={handleUtilityServiceChange} className="w-[50%]" />
                                <label htmlFor="service" className="bg-white text-[#526571] px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center w-[50%]">Service</label>

                            </div>
                        </form>
                    </label>
                </div>
            </div>


            {/* Display marketing cost */}
            <div className='w-full my-8 flex flex-row justify-center items-center gap-[10rem]' >

                <div className=" ">
                    <div className="flex items-center justify-center">
                        <label htmlFor="" className="text-[#526571] font-semibold text-[28px] leading-[150%]">
                            Conversation rate:
                        </label>
                    </div>
                    <div className='py-[2rem] border bg-[#F1E9DE] rounded-[20px] w-[20rem]'>
                        <div className='flex items-center justify-center'>
                            {selectedMarket === 'North America' ? (
                                <p className='text-[#103928] text-[48px] '>${marketingCost}</p>
                            ) : (
                                <p className='text-[#103928] text-[48px] '>₹{marketingCost}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full gap-8 flex flex-col items-center justify-center'>
                <div className='w-[50%] border-t border-overflow-hidden border-shadow-md' />

                <div className='w-[50%]'>
                    <div className="gap-[10px] mt-[10px] h-[7rem] overflow-hidden shadow-md flex flex-col ">
                        <div className='flex justify-start' >
                            <label htmlFor="Marketing" className="bg-white text-[#526571] px-4 py-2 rounded-lg cursor-pointer text-[20px] flex items-center justify-center ">
                                Enter ratio here
                            </label>
                        </div>

                        <input type="text" id="Ratio" name="Ratio" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="bg-[#F1E9DE] rounded-[50px] h-[30vh] " style={{ outline: 'none' }} />
                    </div>
                </div>

                <div className='py-[2rem] border bg-[#F1E9DE] rounded-[20px] w-[20rem]'>
                    <div className='flex items-center justify-center'>
                        {result && (
                            selectedMarket === 'North America' ? (
                                <p className='text-[#103928] text-[48px] '>${result}</p>
                            ) : (
                                <p className='text-[#103928] text-[48px] '>₹{result}</p>
                            )
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;

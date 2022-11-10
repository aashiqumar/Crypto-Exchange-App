import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';
import { SiEthereum } from 'react-icons/si';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    const gifUrl = useFetch({ keyword })

    return (
        <div 
            className='bg-[#181918] m-4 flex flex-1
                2xl:min-w-[450px]
                2xl:max-w-[500px]
                sm:min-w-[270px]
                sm:max-w-[300px]
                flex-col p-3 rounded-2xl hover:shadow-2xl
        '
        >
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target='_blank' rel='noopener noreferrer'>
                        <p className='text-white text-base'>From: {shortenAddress(addressFrom)}</p>
                    </a>

                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
                        <p className='text-white text-base'>To: {shortenAddress(addressTo)}</p>
                    </a>

                    <p className='text-white text-base'>Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className='text-white text-base'>Message: {message}</p>
                        </>

                    )}

                    

                    

                        <a href={`https://goerli.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
                            <button 
                                type='button' 
                                className='flex flex-row justify-center items-center my-5 bg-[#0aba22] p-3 cursor-pointer hover:bg-[#2546bd] rounded-md'>

                                    <div className='flex flex-row'>
                                        
                                        <div className='w-7 h-7 rounded-full border-2 border-white flex justify-center items-center'>
                                            < SiEthereum fontSize={15} color="#fff" /> 
                                        </div>
                                        
                                        
                                        <p className='text-white text-base font-semibold flex-row pl-2'>Etherscan</p>

                                    </div>

                                    
                            </button> 
                        </a>

                    
                </div>

                <img 
                        src={gifUrl || url}
                        alt = "nature"
                        className="w-full h-64 2x:h-96 rounded-xl shadow-lg object-cover"
                    />

                    <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
                        <p className='text-[#37c7da] font-bold'>{timestamp}</p>
                    </div>
            </div>

        </div>

    )
}

const Transactions = () => {

    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
         <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'>Connect your Acccount to see the latest Transactions</h3>
                )}

                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>

         </div>
    );
}

export default Transactions;
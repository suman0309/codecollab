import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './custom hooks/usecurrencyhooks';
import './App.css'

function App() {

const [amount,setAmount]=useState(0)
const [from,setFrom]=useState("usd")
const [to,setTo]=useState("inr")
const[convertedAmount,setConvertedAmount]=useState(0)


const currencyInfo=useCurrencyInfo(from)

const options=Object.keys(currencyInfo)

console.log("currencyInfo:", currencyInfo);
console.log("options:", options);


const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
const convert=()=>{
setConvertedAmount(amount*currencyInfo[to])
}
 
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
  backgroundImage: "url('https://images.pexels.com/photos/16292307/pexels-photo-16292307.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

    >
      <div className="w-full max-w-md m-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
          className="space-y-4"
        >
          <div className="w-full mb-1">
            <InputBox  
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              selectCurrency={from}
            />
          </div>

          <div className="relative">
            <button
              type="button"
              className="absolute right-0 top-0 px-2 py-1 bg-gray-200 rounded"
              onClick={swap}
            >
              swap
            </button>
          </div>

          <div className="w-full mt-4">
            <InputBox
            
            label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}
            amountDisable//means passing true
            
            
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Convert {from.toLocaleUpperCase() } to {to.toLocaleUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
      }

export default App

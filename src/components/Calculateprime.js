import React, { useEffect, useMemo, useState } from "react";

function CalculatePrime() {
  const [input, setInput] = useState("");
  const [inputName, setInputName] = useState("");
  const [primeData, setPrimeData] = useState(0);

  const findPrimes = (n) => {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  };
  // without useMemo the prime value is calculate during each re-render
  //   const primes = findPrimes(input); // ❌ runs on every render even if input changes
  //   what happen when we use useEffect now
  //   useEffect(() => {
  //     const primes = findPrimes(input);
  //     // we need to make another useState to set value of this .. so on updating the state it will re-render component again
  //     // this will not return value instead set another state which need to be included in dependency array
  //     // useEffect
  //     // why useEffect not ideal for heavy calculation
  //     // extra -rerender ,useEffect called after render of ui but useMemo called during render
  //     setPrimeData(primes);
  //     console.log("render useEffect");
  //   }, [input]);
  const primeData1 = useMemo(() => {
    const primes = findPrimes(input);
    console.log("call useMemo");
    // calls during render and dosnt re-render component again .. it dosnt cause ui lage
    return primes;
  }, [input]);
  console.log("render");
  return (
    <div>
      <h2>Prime Numbers up to {input}</h2>
      <input
        type="text"
        placeholder="Type anything"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Total Primes: {primeData1.length}</p>
      <input
        type="text"
        placeholder="Type anything"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
    </div>
  );
}

export default CalculatePrime;

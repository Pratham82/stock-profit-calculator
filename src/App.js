import React, { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [stockCount, setStockCount] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')

  const calculateProfit = (purchasedStockPrice, currStockPrice, noOfStocks) => {
    let diff = currStockPrice - purchasePrice
    let diffPer = (diff / purchasedStockPrice) * 100
    const amt = diff * noOfStocks
    return {
      differencePercentage: diffPer,
      diffAmount: amt,
      resMessage:
        diffPer === 0
          ? 'No profit No loss 🙂'
          : diffPer < 0
          ? `Sorry the total loss amount is ${Math.abs(
              amt
            )} rs. 😢 The loss percentage is ${Math.abs(diffPer)}%`
          : `Hurray 🎉 The total profit amount is ${amt} rs. 😄 The profit percentage is ${diffPer}%`,
      resStatus: diffPer === 0 ? 'neutral' : diffPer < 0 ? 'loss' : 'profit',
    }
  }

  const calculate = () => {
    // eslint-disable-next-line
    const { _, __, resMessage, resStatus } = calculateProfit(
      purchasePrice,
      currentPrice,
      stockCount
    )
    setMessage(resMessage)
    setStatus(resStatus)
  }

  return (
    <div
      className={`${
        status === 'profit'
          ? 'profitBG altInput'
          : status === 'loss'
          ? 'lossBG'
          : 'neutralBG'
      }`}
    >
      <h2>Stock 💹 profit & loss calculator 📈</h2>
      <div className="container"></div>
      <h3>Enter purchase price:</h3>
      <input
        type="number"
        className="inputStyles"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(Number(e.target.value))}
      />
      <br />
      {purchasePrice > 0 && (
        <React.Fragment>
          <h3>Enter no. of stocks purchased:</h3>
          <input
            type="number"
            className="inputStyles"
            value={stockCount}
            onChange={(e) => setStockCount(Number(e.target.value))}
          />
        </React.Fragment>
      )}
      <br />
      {stockCount > 0 && (
        <React.Fragment>
          <h3>Enter current price of stock:</h3>
          <input
            type="number"
            className="inputStyles"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(Number(e.target.value))}
          />
          <br />
          <br />
        </React.Fragment>
      )}
      {currentPrice > 0 && (
        <button className="calculate" onClick={calculate}>
          Check Profit/Loss
        </button>
      )}
      <div className="report">
        <h3 className="outputMessage">{message.split('.')[0]}</h3>
        <h3 className="outputMessage">{message.split('.')[1]}</h3>
      </div>
    </div>
  )
}

export default App

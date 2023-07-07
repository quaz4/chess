import { useState } from 'react'
import './board.css'

function Board() {
  // A1, A2, A3, A4, A5, A6, A7, A8
  // B2, B3 ...
  // const board: ChessPiece[][] = [
    const board: any[][] = [
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ], 
    [
      [], [], [], [], [], [], [], []
    ]
  ];
//   const [count, setCount] = useState(0)

  return (
    <>
        <p>Chess Board Component</p>
        <div className="board">
        {board.map(row => (
            <div className="row">
                {row.map(col => (
                    <div className="square">
                        <p>Square</p>
                    </div>
                ))}
            </div>
        ))}
        </div>
    </>
  )
}

export default Board
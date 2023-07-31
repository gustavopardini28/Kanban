'use client'

import { Column } from '../components/index';
import { useContext, useState } from "react";
import { BoardsContext } from "@/contexts/BoardsContext";


export default function Home() {
  const { boards } = useContext(BoardsContext);

  return (
    <>
      <div className=" flex content-center justify-center w-screen ">
        <header className="p-4">
          <span className='text-4xl font-bold text-transparent bg-clip-text bg-purple'>
            Kanban
          </span>
        </header>
      </div>
      <main className="grid grid-cols-4 gap-2 my-10 mx-auto max-w-7xl overflow-x-auto ">
        {boards.map((board, rowIndex) => {
          return (
            <Column
              key={rowIndex}
              rowIndex={rowIndex}
              items={board.items}
              name={board.name}
            />
          );
        })}
      </main>
    </>
  );
}

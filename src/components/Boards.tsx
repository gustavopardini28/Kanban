
import React, { useState } from "react";

import { BoardsContext } from '../contexts/BoardsContext'
import { useContext, useRef } from "react";
import { theme } from '../../tailwind.config'

interface BoardProps {
  description: string;
}
interface index {
  rowIndex: number;
  columnIndex: number;
}

export default function Boards({
  description,
  columnIndex,
  rowIndex,
}: BoardProps & index) {
  const {
    boards,
    setBoards,
    changeTask,
    drop,
    dragEnter,
    dragStart

  } = useContext(BoardsContext);



  return (
    <>
      <input
        key={columnIndex}
        type='text'
        value={description}
        className={`focus: cursor-pointer focus: outline-none`}
        onChange={(e) => changeTask(e, rowIndex, columnIndex)}
        onDragStart={(e) => dragStart(rowIndex, columnIndex)}
        onDragEnter={(e) => dragEnter(rowIndex, columnIndex)}
        onDragEnd={drop}
        draggable
      >
      </input>
    </>
  );
}

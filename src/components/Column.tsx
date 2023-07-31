
import { Plus } from "@phosphor-icons/react";
import { Boards } from '../components/index';
import { BoardsContext } from '../contexts/BoardsContext'
import { useContext } from "react";

export interface item {
  description: string;
  id: number;
}

export interface boards {
  name: string;
  items: item[];
}

export interface index {
  rowIndex: number;
}

export default function Column({ name, items, rowIndex }: boards & index) {
  const { dragOver, setRef } = useContext(BoardsContext);

  return (
    <section className=" flex flex-col gap-4 rounded-md m-4 px-4 py-4 shadow-md bg-gray-100 ">
      <header className="">
        <span className=" bg-gray-100 rounded-md font-Roboto p-1">{name}</span>
      </header>
      <div className="flex justify-center rounded-md bg-gray-300 transition transform hover:bg-gray-400 p-1  ">
        <button className="">
          <Plus size={14} />
        </button>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg p-4 w-full flex-grow"
        onDragOver={(e) => dragOver(e, rowIndex)}
        ref={(element) => setRef(rowIndex, element)}
        key={rowIndex}

      >
        {items.map((item, columnIndex) => {
          return (
            <Boards
              key={columnIndex}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}

import React, {
  RefObject,
  createContext,
  ReactNode,
  useRef,
  useState,
  DragEvent,
} from "react";
interface item {
  description: string;
  id: number;
}
export interface Board {
  name: string;
  items: item[];
}
interface BoardsContextType {
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  dragStart: (row: number, column: number) => void;
  dragEnter: (row: number, column: number) => void;
  changeTask: (e: any, row: number, column: number) => void;
  drop: () => void;
  setRef: (index: number, element: HTMLDivElement | null) => void;
  dragOver: (e: DragEvent<HTMLDivElement>, rowIndex: number) => void;
}
interface BoardProviderProps {
  children: ReactNode;
}
export const BoardsContext = createContext({} as BoardsContextType);
export function BoardsProvider({ children }: BoardProviderProps) {

  const dragItemRow = React.useRef<number>(0); // RowIndex
  const dragItemColumn = React.useRef<number>(0); // ColumnIndex
  const dragOverItemRow = React.useRef<number>(0); // RowOverIndex
  const dragOverItemColumn = React.useRef<number>(0); // ColumnOverIndex
  const hasChildOnDiv = useRef<HTMLDivElement[]>([]); // storage for child elements
  const indexColumn = useRef<number>(0);
  const booleanIfExistsChild = useRef<boolean>(!0);

  const [boards, setBoards] = useState<Board[]>([
    {
      name: "In Progress",
      items: [
        { id: 1, description: "Done kanban" },
        { id: 2, description: "Done lession" },
      ],
    },
    {
      name: "Stopped",
      items: [
        { id: 3, description: "Done luigi" },
        { id: 4, description: "Done lol" },
      ],
    },
  ]);

  const [targetValueInput, setTargetValueInput] = useState();


  const changeTask = (e: any, rowIndex: number, columnIndex: number) => {
    const aux = { ...boards }
    aux[columnIndex].items[rowIndex].description = e.target.value;
    setBoards(aux);

  };

  const setRef = (index: number, element: HTMLDivElement | null) => {
    // this function set all children refs
    if (element !== null) hasChildOnDiv.current[index] = element;

  };
  const dragOver = (e: React.DragEvent<HTMLDivElement>, rowIndex: number) => {
    // this function get all children and your index | set true if exists a chlild

    e.preventDefault();

    const element = hasChildOnDiv.current[rowIndex];
    indexColumn.current = rowIndex;
    booleanIfExistsChild.current = element.children.length ? true : false;

  };
  const dragStart = (row: number, column: number) => {
    //this function gets index of current item
    dragItemRow.current = row;
    dragItemColumn.current = column;
  };

  const dragEnter = (row: number, column: number) => {
    // this function gets index of over current item
    dragOverItemRow.current = row;
    dragOverItemColumn.current = column;
  };

  const drop = () => {
    //make drag and drop work
    const copyListItems = [...boards];
    const dragItem =
      copyListItems[dragItemRow.current].items[dragItemColumn.current];

    if (dragItem === copyListItems[dragOverItemRow.current].items[dragOverItemColumn.current]) return;

    copyListItems[dragItemRow.current].items.splice(dragItemColumn.current, 1);
    console.log(copyListItems);

    if (booleanIfExistsChild.current === false) {

      copyListItems[indexColumn.current].items.unshift(dragItem);
    } else {
      copyListItems[dragOverItemRow.current].items.splice(
        dragOverItemColumn.current,
        0,
        dragItem
      );
    }


    setBoards(copyListItems);
  };
  return (
    <BoardsContext.Provider
      value={{
        changeTask,
        boards,
        setBoards,
        setRef,
        dragOver,
        dragStart,
        dragEnter,
        drop,

      }}
    >
      {children}
    </BoardsContext.Provider>
  );
}

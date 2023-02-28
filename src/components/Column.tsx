import { Plus } from "phosphor-react";

import { Boards } from '@/components'

export default function Column () {
  return (
    <section className='flex flex-col rounded-md m-4 px-4 py-4 bg-gray-100 gap-6 '>
      <header className="">
      <span className=" bg-gray-300 rounded-md font-Roboto p-1">
        TODO
      </span>
      </header>
      <div className="flex w-full justify-center rounded-md bg-gray-300 p-1">
      <button className="">
      <Plus size={14} />
      </button>
      </div>
      <Boards/>
      <Boards/>
      <Boards/>
      <Boards/>
      <Boards/>
    </section>
  )
}
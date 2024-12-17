import React from 'react'
import {RiReactjsLine, RiPhpLine} from 'react-icons/ri'
import {SiMongodb,SiMysql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 lg:mb-35 lg:pb-14' id="skills">
      <h1 className="text-center text-4xl my-10">Skills</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-2xl border border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div className="rounded-2xl border border-neutral-800 p-4">
          <SiMongodb className='text-7xl ' />
        </div>
        <div className="rounded-2xl border border-neutral-800 p-4">
          <FaNodeJs className='text-7xl text-green-500' />
        </div>
        <div className="rounded-2xl border border-neutral-800 p-4">
          <BiLogoPostgresql className='text-7xl text-sky-700' />
        </div>
        <div className="rounded-2xl border border-neutral-800 p-4">
          <RiPhpLine className='text-7xl text-sky-800' />
        </div>
        <div className="rounded-2xl border border-neutral-800 p-4">
          <SiMysql className='text-7xl text-sky-400' />
        </div>
      </div>
    </div>
  )
}

export default Technologies
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';


function Home({ data }) {

  const [tasks, setTasks] = useState([{}])
  const [pen, setPen] = useState('')




  useEffect(() => {
    if (localStorage.getItem('tasks') === null) {
      setTasks([])
    } else {
      setTasks(JSON.parse(localStorage.getItem('tasks')))
    }

  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Reminders+</title>
      </Head>
      <main className='flex flex-col gap-y-5 my-10'>
        <div className='md:mx-20 mx-5 transition'>
          <form onSubmit={(e) => {
            e.preventDefault()
            if (pen.length > 3) {
              const temp = [{
                task: pen,
                status: 'incomplete'
              }]
              setTasks(tasks.concat(temp))
              localStorage.setItem('tasks', JSON.stringify(tasks.concat(temp)))
              setPen("")
            }
          }}
            className='flex justify-center flex-col  gap-y-4'
          >
            <input value={pen} className='text-black px-2 py-3  rounded-lg' type="text" placeholder='Reminder' onChange={e => setPen(e.target.value)} />
            <input
              className='bg-gray-700 px-5 py-2 hover:bg-gray-800 hover:text-gray-400 transition'
              type='submit'
              placeholder='submit'
            />
          </form>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col gap-y-3 text-lg mx-6 md:mx-40 w-full'>
            <p className='mt-2 mb-1'>
              Tasks to-do:
            </p>
            {
              tasks.map((e, index) => (
                <>
                  {
                    e.status === 'incomplete' ? (
                      <div className='bg-gray-700 flex gap-x-3 rounded-xl'>
                        <div className='bg-green-600 hover:bg-green-800  rounded-l-xl'>
                          <button
                            onClick={() => {
                              console.log('dlick')
                              let tempArr = []
                              tasks.forEach((doc, key) => {
                                if (key === index) {
                                  tempArr.push({
                                    task: doc.task,
                                    status: 'complete'
                                  })

                                } else {
                                  tempArr.push(doc)
                                }
                              })
                              console.log(tempArr)
                              setTasks(tempArr)
                              localStorage.setItem('tasks', JSON.stringify(tempArr))
                            }}
                            className='w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 px-3 w-full  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                        <div className='py-2 w-full'>
                          {e.task}
                        </div>
                        <div className='px-3 bg-gray-800 rounded-r-xl  flex flex-col'>
                          <div>
                            <button onClick={() => {

                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                              </svg>
                            </button>
                          </div>
                          <div>
                            <button>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : undefined
                  }
                </>
              )).reverse()
            }
            <p className='mt-2 mb-1'>
              Completed Tasks:
            </p>
            {
              tasks.map((e, index) => (
                <>
                  {
                    e.status === 'complete' ? (
                      <div className='bg-gray-700 flex gap-x-3 rounded-xl'>
                        <div className='bg-yellow-600 hover:bg-yellow-800  rounded-l-xl'>
                          <button
                            onClick={() => {
                              console.log('dlick')
                              let tempArr = []
                              tasks.forEach((doc, key) => {
                                if (key === index) {
                                  tempArr.push({
                                    task: doc.task,
                                    status: 'incomplete'
                                  })

                                } else {
                                  tempArr.push(doc)
                                }
                              })
                              console.log(tempArr)
                              setTasks(tempArr)
                              localStorage.setItem('tasks', JSON.stringify(tempArr))
                            }}
                            className='w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 px-3 w-full p" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </button>
                        </div>
                        <div className='py-2 w-full'>
                          <s>{e.task}</s>
                        </div>
                        <div className=' bg-red-600 hover:bg-red-700 rounded-r-xl '>
                          <button
                            onClick={() => {
                              let temp = []
                              for (let i = 0; i < tasks.length; i++) {
                                if (i !== index) {
                                  temp.push(tasks[i])
                                }
                              }
                              setTasks(temp)
                              localStorage.setItem('tasks', JSON.stringify(temp))
                            }}
                            className='w-full h-full px-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ) : undefined
                  }
                </>
              )).reverse()
            }
          </div>
          <div>

          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;

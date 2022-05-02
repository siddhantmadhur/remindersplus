import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';


function Home({ data }) {

  const [tasks, setTasks] = useState([])
  const [tempTasks, setTempTasks] = useState([{}])
  const [pen, setPen] = useState('')

  const tempdata = [
    {
      task: 'You have to clean',
      status: 'incomplete'
    },
    {
      task: 'You have to study',
      status: 'incomplete'
    }
  ]


  useEffect(() => {
    if (localStorage.getItem('tasks') === null) {
      setTasks([])
    } else {
      setTasks(JSON.parse(localStorage.getItem('tasks')))
    }

  }, [])

  useEffect(() => {
    if (localStorage.getItem('tempTasks') === null) {
      setTempTasks([])
    } else {
      setTempTasks(JSON.parse(localStorage.getItem('tempTasks')))
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
              setTempTasks(tempTasks.concat(temp))
              localStorage.setItem('tempTasks', JSON.stringify(tempTasks.concat(temp)))
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
              tempTasks.map((e, index) => (
                <>
                  {
                    e.status === 'incomplete' ? (
                      <div className='hover:opacity-50 flex gap-x-5 '>
                        <button onClick={() => {
                          let temp = []
                          for (let i = 0; i < tempTasks.length; i++) {
                            if (i !== index) {
                              temp.push(tempTasks[i])
                            } else {
                              temp.push({
                                task: tempTasks[i].task,
                                status: 'complete'
                              })
                            }
                          }
                          setTempTasks(temp)
                          localStorage.setItem('tempTasks', JSON.stringify(temp))
                        }}>
                          <div className='flex gap-x-4'>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className='text-left'>
                              {e.task}
                            </div>
                          </div>

                        </button>
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
              tempTasks.map((e, index) => (
                <div className=''>
                  {
                    e.status === 'complete' ? (
                      <div className='flex gap-x-5 ' >


                        <div className='flex gap-x-4'>
                          <div className='hover:opacity-50'>
                            <button onClick={() => {
                              let temp = []
                              for (let i = 0; i < tempTasks.length; i++) {
                                if (i !== index) {
                                  temp.push(tempTasks[i])
                                } else {
                                  temp.push({
                                    task: tempTasks[i].task,
                                    status: 'incomplete'
                                  })
                                }
                              }
                              setTempTasks(temp)
                              localStorage.setItem('tempTasks', JSON.stringify(temp))
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </button>
                          </div>
                          <div>
                            <s>  {e.task}</s>
                          </div>
                          <div className=''>
                            <button onClick={() => {
                              let temp = []
                              for (let i = 0; i < tempTasks.length; i++) {
                                if (i !== index) {
                                  temp.push(tempTasks[i])
                                }
                              }
                              setTempTasks(temp)
                              localStorage.setItem('tempTasks', JSON.stringify(temp))
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-900 transition text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>



                      </div>
                    ) : undefined
                  }
                </div>
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

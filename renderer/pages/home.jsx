import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {

  const [tasks, setTasks] = useState([])
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
        <div className='mx-20'>
          <form onSubmit={(e) => {
            e.preventDefault()
            if (pen.length > 3) {
              const temp = [pen]
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
          <div className='flex flex-col gap-y-3 text-lg mx-40 w-full'>
            {
              tasks.map((e, index) => (
                <div className='flex gap-x-5 '>
                  <div className='hover:opacity-50'>
                    <button onClick={() => {
                      let temp = []
                      for (let i = 0; i < tasks.length; i++) {
                        if (i !== index) {
                          temp.push(tasks[i])
                        }
                      }
                      setTasks(temp)
                      localStorage.setItem('tasks', JSON.stringify(temp))
                    }}>
                      <div className='flex gap-x-4'>
                        <div>
                          ❌
                        </div>
                        <div className='text-left'>
                          {e}
                        </div>
                      </div>

                    </button>
                  </div>
                  <div>

                  </div>
                </div>
              )).reverse()
            }
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;

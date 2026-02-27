import React from 'react'
import "./github.scss"
import githubdata from "../../assets/github.json"
import MacWindow from './MacWindow'

const GitCard = ({data}) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {data.tags.map((tag) => {
                return<p className='tag'>{tag}</p>

            })}
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink &&<a href={data.demoLink}>Demo Link</a>}
        </div>
    </div>

}


const GitHub = ({windowName, setwindowState}) => {
  return (
    <MacWindow windowName={windowName} setwindowState={setwindowState}>
        <div className="cards">
            {
                githubdata.map((project) =>{
                    return <GitCard data={project} />

                })
            }

        </div>
    </MacWindow>
  )
}

export default GitHub
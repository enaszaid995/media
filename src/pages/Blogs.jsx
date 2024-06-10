import React from 'react'
import './Blogs.css'
export default function Blogs() {
  return (
    <div className='Blogs'>
        <h2>Most common topics</h2>

        <button className="btn success">Industry</button>
        <button className="btn info">Trens</button>
        <button className="btn warning">Tips</button>
        <button className="btn danger">Company News</button>
        <button className="btn default">Other</button>


        <section>
          <div className="card">
            <h3>5 Emerging Media Trends to Watch in 2024</h3>
            <p>Stay ahead of the curve with these five media trends that will dominate the 
                industry in 2024.
            </p>
           </div>
        </section>
    </div>
  )
}

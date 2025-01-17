import React from 'react'

function App() {
   // <></> Fragment is used to group several html elements and avoids unneccessary dom node creation
   let data = [
     {
       title:"project one",
       image:"https://via.placeholder.com/700x400",
       description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                 aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                 dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
     },
     {
       title:"project one",
       image:"https://via.placeholder.com/700x400",
       description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                 aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                 dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
     },
     {
       title:"project one",
       image:"https://via.placeholder.com/700x400",
       description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                 aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                 dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
     },
     {
       title:"project one",
       image:"https://via.placeholder.com/700x400",
       description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                 aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                 dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
     },
     {
       title:"project one",
       image:"https://via.placeholder.com/700x400",
       description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                 aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                 dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
     },
     {
       title:"project one",
       image:"https://via.placeholder.com/700x400",
       description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                 aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                 dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
     }
  ]
  return<>
    <div className="container">
      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>

      <div className="row">
        {
          data.map((e,index)=>{
            return <div className="col-lg-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={e.image} alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{e.title}</a>
                </h4>
                <p className="card-text">{e.description}</p>
              </div>
            </div>
           </div>
          })
        }
      </div>
    </div>

  </>
}

export default App
import React from 'react';
import './App.css';
import image1 from "./Images/aanshi.jpg";
import image2 from "./Images/ankita.jpg";
import image3 from "./Images/aman.jpg"

const App =()=>(<PersonList />)

const PersonList =()=>{
  const people=[
    {
      img:image1, name:'Aanshi', job:'designer'
    },
    {
      img:image2 , name:'Ankita', job:'developer'
    },
    {
      img:image3 , name:'Aman', job:'coder'
    } 

  ];
  console.log(people)
  return <section>
  <Person person={people[0]}>
    Curiosity to learn new things & try to solve proplems untill they are resolved .
  
    </Person>
  <Person person={people[1]}>

    She knows she will be successful & stands up for herselfs and their friends too.
    </Person>
  <Person person={people[2]}>
   He is the responsible personality among all . He guided and support  us in difficult situations 
</Person>
  </section>
}
const Person =props=>{
  const {img,name,job} = props.person
  const {children}=props
  //const url="BeautyPlus_20171101171503_fast.jpg"
  // const url =  "https://randomuser.me/api/portraits/thumb/men/1.jpg"
  return <div className="person">
    <img class="profile_img" src={img} alt="" />
    
    <div>
      <h4>{name}</h4>
     <h4>{job}</h4>
     {children}
    </div>
  </div>
}
export default App;

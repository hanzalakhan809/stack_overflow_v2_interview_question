import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'
import Questions from './components/Questions'
import RightSideSection from './components/RightSideSection'
import Footer from './components/Footer'
import QuestionsService from './services/questions';




export default function App() {

  const dummyData = {
    items: [
      {
        tags: [
          "powerbi",
          "dax",
          "powerquery",
          "powerbi-desktop"
        ],
        owner: {
          account_id: 10391258,
          reputation: 126,
          user_id: 7662484,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/a2bf14cd620059fda618f7f029e00055?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Prem Chand",
          link: "https://stackoverflow.com/users/7662484/prem-chand"
        },
        is_answered: false,
        view_count: 10,
        answer_count: 1,
        score: 0,
        last_activity_date: 1692625308,
        creation_date: 1692619142,
        question_id: 76945069,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945069/concatenatex-txt-details-with-condition-statement-dax",
        title: "CONCATENATEX txt details with condition statement Dax"
      },
      {
        tags: [
          "spring",
          "spring-boot"
        ],
        owner: {
          account_id: 16282396,
          reputation: 1,
          user_id: 11757941,
          user_type: "registered",
          profile_image: "https://lh5.googleusercontent.com/-QsBSjGJZ7hM/AAAAAAAAAAI/AAAAAAAAAJw/5Clpf5dXALQ/photo.jpg?sz=256",
          display_name: "Rohit Reddy",
          link: "https://stackoverflow.com/users/11757941/rohit-reddy"
        },
        is_answered: false,
        view_count: 4,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625297,
        creation_date: 1692625297,
        question_id: 76945854,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945854/error-while-upgrading-spring-boot-version-to-2-7-14-creating-bean-with-name-en",
        title: "Error while upgrading spring-boot version to 2.7.14. creating bean with name &#39;entityManagerFactory defined in class path resource"
      }
    ],
    has_more: true,
    quota_max: 10000,
    quota_remaining: 9995
  }
  const [questions, setQuestions] = useState(dummyData);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchText, setSearchText] = useState("");



  useEffect(() => {

    QuestionsService.getAllQuestions().then((data) => {
      console.log(data,"i am fetch data")
      setQuestions(data)
      setFilteredQuestions(data);
    });
  }, [])





  return (
    <div>
      <Navbar searchText={searchText} setFilteredQuestions={setFilteredQuestions} setSearchText={setSearchText} questions={questions} />
      <div className='flex w-full '>
        <SideMenu />
        <div className='w-full'>
          <Questions questions={questions} filteredQuestions={filteredQuestions} searchText={searchText}/>
        </div>
        <RightSideSection />
      </div>
      <Footer />
    </div>
  )
}

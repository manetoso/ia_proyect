import Navbar from './components/Navbar';
import Questionnaire_anx from './components/questionaire_anx';
import { QuestionsAnx } from './components/Questions'


function App() {
  return (
    <>
      <Navbar/>,
      <div className="container">
        {
          QuestionsAnx.map( ( question, key ) => (
            <Questionnaire_anx
              key={key}
              number={ key+1 }
              question={ question }
            />
          ))
        }
      </div>
    </>
  );
}

export default App;

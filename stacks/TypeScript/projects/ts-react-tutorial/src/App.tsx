import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import SampleContext from './SampleContext';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="React" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleContext>
        <ReducerSample />
      </SampleContext>
    </>
  );
}

export default App;

import UserCard from "./components/UserCard";

const App = () => {
  return (
    <>
      <UserCard
        name="Rahul Yadav"
        age={23}
        city="Panipat"
        role="Frontend Developer"
      />

      <UserCard name="Amit" age={25} city="Delhi" role="React Developer" />
    </>
  );
};

export default App;

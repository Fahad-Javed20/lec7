import Profile_Card from "./components/Profile_Card";

function App() {
  const user1 = {
    name: "Fahad Bin Javed",
    title: "Website Developer",
    picture:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };
  
  const user2 = {
    name: "Usama Bin Javed",
    title: "App Developer",
    picture:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const user3 ={
    name: "Shehroz Bin Javed",
    title: "Software Engineer",
    picture:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }


  return (
    <>
      <div className=" md:flex-row flex flex-col justify-center items-center h-screen gap-2">
        <Profile_Card user={ user1 } />
        <Profile_Card user={ user2 } />
        <Profile_Card user={ user3 } />
      </div>
    </>
  );
}

export default App;

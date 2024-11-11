import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./pages/navbar";
import MyTable from "./pages/table";


function App() {
  const IsBigScreen = useMediaQuery("(min-width: 1060px)");

  const tableStyle = IsBigScreen ? 'ml-[300px] p-4' : 'py-2';
  
  return (
    <div className={`app bg-gradient-to-r from-black to-primary-500`}>
      <div className="">
        <NavBar />
        <div className={tableStyle}>
          <MyTable />
        </div>
      </div>
    </div>
  );
}

export default App;

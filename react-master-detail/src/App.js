import MasterDetail from "./components/MasterDetail";

function App() {
  return (
    <div>
      <MasterDetail
        payload={[
          { title: "Intro", content: "Hello Peers" },
          { title: "Welcome", content: "Welcome to Cool Company" },
        ]}
      />
    </div>
  );
}

export default App;

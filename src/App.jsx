import CardPreview from "./components/Card";
import Avatar from "./assets/image-avatar.webp";

function App() {
  return (
    <div className="App">
      <CardPreview
        avatar={Avatar}
        name="Greg Hooper"
        tag="Learning"
        title="HTML & CSS foundations"
        preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus tortor vel ipsum fermentum ullamcorper."
      />
    </div>
  );
}

export default App;

// Create a TypeScript interface (or type alias) that describes 
// the shape of the single object you intend to pass as a prop.
export interface EntryScrimData {
  id: number,
  image: {
    alt: string,
    src: string
  }
  location: string,
  link: string,
  title: string,
  date: string,
  content: string
}

// Then define the actual props for your component
export interface EntryScrim {
  data: EntryScrimData;
}


// Then, create the object that conforms to your component data,
// (in our case, EntryScrimData) inside the component that will 
// pass the data. In our case, 

// App.tsx will be passing the data, so create the object there
// and pass it as a single prop to Entry.tsx 

// In Entry.tsx, you'll receive the single data prop and then you 
// can destructure that prop or access its properties directly.
// So to access the image src for example, either destructure like so:
// const {image} = data
// or access directly:
// const image = data.image.src
import styles from './scrim5.module.css'

export default function Scrim5() {

  function signUp(formData:FormData) {
    const data = Object.fromEntries(formData)
    const diet = formData.getAll("diet")
    const allData = {
      ...data,
      diet
    }
    console.log(allData)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
            <label>
              <input type="radio" name="employmentStatus" value="Part-time" />
              Part-time
          </label>
            <label>
              <input type="radio" name="employmentStatus" value="Full-time" />
              Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Diet:</legend>
          <label>
            <input type="checkbox" name="diet" value="herbivore" />
            Herbivore
          </label>
            <label>
              <input type="checkbox" name="diet" value="carnivore" />
            Carnivore
          </label>
        </fieldset> 

        <label htmlFor='dropdown'>Favorite Food</label>
        <select id="dropdown" name="dropdown" defaultValue="" required>
          <option value="" disabled>Choose!</option>
          <option value="fish">Fish!</option>
          <option value="vegetable">Vegetables!</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}
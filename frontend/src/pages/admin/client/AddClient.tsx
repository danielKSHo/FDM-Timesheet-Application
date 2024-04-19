import "../Add.css";

export default function AddClientTag() {
  return (
    <>
      <form>
        <div className="add-tile">
          <div className="header">Add Client</div>

          <div className="add-info">
            <div className="inputs">
                <label htmlFor="type">Tag Type:</label>
                <select id="type" name="type">
                  <option value="Client">Client</option>
                </select>
            </div>

            <div className="inputs">
              <label htmlFor="firstname">First name:</label>
              <input id="firstname" type="text"></input>
            </div>

            <div className="inputs">
              <label htmlFor="surname">Surname:</label>
              <input id="surname" type="text"></input>
            </div>

            <div className="inputs">
              <label htmlFor="email"> Email:</label>
              <input id="email" type="email"></input>
            </div>

            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

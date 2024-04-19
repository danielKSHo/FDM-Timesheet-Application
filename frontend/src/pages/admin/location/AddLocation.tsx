import "../Add.css";

export default function AddLocation() {
  return (
    <>
      <form>
        <div className="add-tile">
          <div className="header">Add Location</div>

          <div className="add-info">
            <div className="inputs">
                <label htmlFor="type">Tag Type:</label>
                <select id="type" name="type">
                  <option value="Location">Location</option>
                </select>
            </div>

            <div className="inputs">
              <label htmlFor="locationname">Location name:</label>
              <input id="locationname" type="text"></input>
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

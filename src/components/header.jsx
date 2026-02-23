function Header({edit, setEdit}) {
 return (
    <div className="header">
    <h1>Curriculum Vitae</h1>
    <div className="headerButtonGroup">
      <button type="button" className="blueBg" id="editBtn" disabled={edit} onClick={() => setEdit(true)}>Edit</button>
      <button type="button" className="greenBg" id="submitBtn" disabled={!edit} onClick={() => setEdit(false)}>Submit</button>
    </div>
    </div>
 );
};

export default Header;
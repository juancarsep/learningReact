import "./App.css";
export function TwitterFollorCard( {formtUsername,userName, name}) {


  const addAt = (username) => `@${username}`

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/dribbble/omidnikrah"
          alt="Avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formtUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}

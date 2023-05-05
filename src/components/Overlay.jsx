import { useProgress } from "@react-three/drei"
import { usePlay } from "../contexts/Play"

export const Overlay = () => {
  const { progress } = useProgress()
  const { play, end, setPlay, hasScroll } = usePlay()
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Jangmu
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">
            <span>BILBAO - VALENCIA</span>
            <br />
            Ahahaha 💀. Scroll gara 👇
          </p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true)
            }}
          >
            Enter
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">
          Wish you had a great flight with me, Miss Jangmu... - Captain Samir 🫡👨‍✈️🤣💀 <br />
          <br />
          Happy Birthday to you, <br />
          Happy Birthday to you, <br />
          Happy Birthday mero bestestttt friend,
          <br /> Happy birthday to you! <br />
          Yayyyyyyyyy!! Cake khai malai? 🤤😋🎂
          <br />
          <br />
          Aba huda huda 22 years bhaisakyeu hai. Ohooooo 🥳 Kangrachulesan kangrachulesan saksesful parsan. May this
          year be as amazing as I am 😇🤣 re k. Sooooooo happy for you. Timle socheko sabai kura puraa hos. 😊 Future ma
          timro clinic ma malai free ma checkup huna parcha. Aru kura thaha chaina 🤣💀. You've no idea how special you
          are. 👻 I'm alwaysss here to support you. Always cheering for you. Always rooting for you.
          <br />
          <br />
          HAPPIESTTT BIRTHDAYYY JANGMUUU!! Oilcommm to club 22. 🥂
        </p>
      </div>
    </div>
  )
}

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [choice, setChoice] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("userChoice");
    if (saved) setChoice(saved);
  }, []);

  const handleSelect = (value) => {
    setChoice(value);
    localStorage.setItem("userChoice", value);
    console.log("User selected:", value);
  };

  return (
    <div className="App">
      <div className="gradient-orbit gradient-orbit-1" />
      <div className="gradient-orbit gradient-orbit-2" />
      <div className="noise-overlay" />

      <main className="shell">
        <section className="left-pane">
          <p className="badge">Today’s Secret Mission • 31 Jan</p>

          <h1 className="hero-heading">
            Zingude,
            <span className="hero-gradient"> aaj plan karuya? 💫</span>
          </h1>
<p>

Aik ki ..
Tula nahi mhanaych asel tr tu nahi bolu shaktes mla khar sangtoy evdh vait nahi vatnar..
Tr me as mhant hoto ki aaj office sutlyavr city mdhlya Sainath la chicken thali khayla jaych ka..Kiva FC la richi rich la vgere mla tuzyabr baher jau vatty....
Prakash la sangu shaktes ki kakane Hadapsar la bolavly as kytri mhanje to video call krnar nahi ..
</p>

          <div className="chip-row">
            <span className="chip">Chicken thali</span>
            <span className="chip">City rides</span>
            <span className="chip">Full proof plan</span>
          </div>
        </section>

        <section className="right-pane">
          <div className="glass-card">
            <p className="card-title">Choose your vibe</p>
            <p className="card-sub">
              Hover to feel it, click to lock it in.
            </p>

            <div className="choice-grid">
              <button
                className={`choice-card yes ${choice === "a" ? "active" : ""}`}
                onClick={() => handleSelect("a")}
              >
                <div className="emoji-bubble happy">😊</div>
                <div className="choice-content">
                  <span className="choice-tag">A</span>
                  <h3>Yes, let’s go!</h3>
                  <p>Full masti, dinner + long drive, no excuses.</p>
                </div>
              </button>

              <button
                className={`choice-card no ${choice === "b" ? "active" : ""}`}
                onClick={() => handleSelect("b")}
              >
                <div className="emoji-bubble sad">😢</div>
                <div className="choice-content">
                  <span className="choice-tag">B</span>
                  <h3>No,</h3>
                  {/* <p>Thik aahe, pan tu “no” mhanalis tr mala sad face.</p> */}
                </div>
              </button>

              <button
                className={`choice-card maybe ${choice === "c" ? "active" : ""}`}
                onClick={() => handleSelect("c")}
              >
                <div className="emoji-bubble secret">🤫</div>
                <div className="choice-content">
                  <span className="choice-tag">C</span>
                  <h3>Yeycha aahe pan…</h3>
                  <p>
                    Prakash la samjla tr problem hoil – pan mala ek full proof plan aahe.
                  </p>
                </div>
              </button>

              <button
                className={`choice-card think ${choice === "d" ? "active" : ""}`}
                onClick={() => handleSelect("d")}
              >
                <div className="emoji-bubble think">🤔</div>
                <div className="choice-content">
                  <span className="choice-tag">D</span>
                  <h3>Convince me for A</h3>
                  <p>Mala chance de, me properly convince karto.</p>
                </div>
              </button>
            </div>

            <p className="tiny-note">
              If you pick <span className="highlight">C</span>, ekdam solid,
              drama‑free plan ready aahe. Fkt ekda aik.
            </p>

            {choice && (
              <div className="selected-pill">
                <span className="dot" />
                You locked in{" "}
                <span className="selected-code">{choice.toUpperCase()}</span>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from "react"
import discordInvite from "./assets/discordInvite.svg"
import arrow from "./assets/arrow.svg"
import progressionIcon from "./assets/progressionIcon.svg"
import styled from "styled-components"

const Underline = styled.div``

const Arrow = styled.img`
  position: absolute;
  top: 16%;
  left: -10%;
`

function App() {
  return (
    <div className="App">
      <div className="container mx-auto pt-20">
        <div id="top" className="mb-10">
          <div className="flex flex-col mb-6">
            <span className="font-semibold text-4xl leading-none">Pollo</span>
            <span className="text-blue-800 leading-none">Discord poll generator</span>
          </div>
          <Underline className="description inline border-b border-gray-400 pb-1">
            → Créer des sondages à l’aide du bot discord Pollo
          </Underline>
        </div>

        <div id="tour">
          <div className="italic text-gray-700 font-medium text-sm mb-4">Comment faire ?</div>

          <div id="step1" className="mb-8">
            <div className="italic font-medium mb-2">1. Inviter le bot Pollo sur votre serveur Discord</div>
            <img src={discordInvite} alt="discord invite" />
          </div>
          <div className="">
            <div className="italic font-medium mb-2">
              2. A partir de cet outil en ligne créer le sondage de
              <br />
              votre choix
            </div>
            <div className="flex items-center">
              <div id="step2">
                <div className="relative inline-flex p-4 w-auto flex-col border border-gray-300 rounded">
                  <Arrow src={arrow} alt="arrow" />
                  <div className="pb-5">
                    <h1 className="text-gray-700 text-xl">Qui est le meilleur dribleur</h1>
                    <p className="text-gray-400 text-xs">Une description si tu veux décrire ta question (logique)</p>
                  </div>
                  <div className="flex flex-col pl-4">
                    {["Ronaldo", "Messi", "Germain"].map((item, key) => {
                      return (
                        <label class="inline-flex pb-3 last:pb-0 items-center">
                          <div class="form-radio" />
                          <span class="ml-2">{item}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
              <img src={progressionIcon} className='ml-10' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
